import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

import { AuthorCard } from "@/app/(home)/blog/_components/author-card";
import { BackButton } from "@/app/(home)/blog/_components/back-button";
import { sanityFetch } from "@/sanity/lib/fetchSenity";
import { urlFor } from "@/sanity/lib/image";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries/posts";
import { POST_QUERYResult, Post } from "@/sanity/types";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

export const dynamicParams = false;

export async function generateStaticParams() {
	const posts = await sanityFetch<Post[]>({ query: POSTS_QUERY });

	return posts.map((post) => ({
		slug: String(post?.slug?.current)
	}));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const post = await sanityFetch<POST_QUERYResult>({ query: POST_QUERY, params: { slug } });

	if (!post) return notFound();

	const postImageSrc = urlFor(post.mainImage?.asset?._ref ?? "").url();

	return (
		<div className="mx-auto flex max-w-[960px] flex-col gap-4">
			<div className="mb-4 flex self-start">
				<BackButton />
			</div>
			<h1 className="mb-4 self-center text-xl font-bold">{post.title}</h1>
			<div className="relative h-[440px] w-full">
				<Image src={postImageSrc} alt={post.mainImage?.alt ?? ""} objectFit="cover" fill priority />
			</div>
			{post.body && (
				<div className="my-2">
					<PortableText value={post.body}></PortableText>
				</div>
			)}
			<div className="flex w-full items-center">
				{post.author && (
					<div className="flex w-full">
						<AuthorCard author={post.author} />
					</div>
				)}
				{post.publishedAt && (
					<div className="flex text-md">
						<span>{format(post.publishedAt, "PPP")}</span>
					</div>
				)}
			</div>
		</div>
	);
}
