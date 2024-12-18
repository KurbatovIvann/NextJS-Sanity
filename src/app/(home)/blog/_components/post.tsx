import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { AuthorCard } from "@/app/(home)/blog/_components/author-card";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERYResult } from "@/sanity/types";

type PostProps = {
	post: POST_QUERYResult;
};
export const PostComponent = ({ post }: PostProps) => {
	const postImageSrc = urlFor(post?.mainImage?.asset?._ref ?? "").url();

	return (
		<Link href={`/blog/${post?.slug?.current}`}>
			<div className="border-gray flex h-[470px] min-w-[350px] cursor-pointer flex-col gap-8 rounded-xl border p-4 shadow hover:shadow-lg">
				<h1 className="h-12 text-center text-lg font-bold">{post?.title}</h1>
				<div className="relative h-[240px]">
					<Image
						src={postImageSrc}
						alt={post?.mainImage?.alt ?? "Image alt text"}
						objectFit="cover"
						fill
						priority
					/>
				</div>
				<div className="flex w-full">
					{post?.author && (
						<div className="flex w-full">
							<AuthorCard author={post?.author} />
						</div>
					)}
					<div className="flex flex-col gap-2 text-xs">
						<span>{post?.readTimeEstimate} read</span>
						{post?.publishedAt && <span>{format(post?.publishedAt, "PPP")}</span>}
					</div>
				</div>
			</div>
		</Link>
	);
};
