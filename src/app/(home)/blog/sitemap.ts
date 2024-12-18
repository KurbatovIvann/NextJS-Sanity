import type { MetadataRoute } from "next";

import { sanityFetch } from "@/sanity/lib/fetchSenity";
import { POSTS_QUERY } from "@/sanity/lib/queries/posts";
import { Post } from "@/sanity/types";

export async function generateSitemaps() {
	const posts = await sanityFetch<Post[]>({ query: POSTS_QUERY });

	return posts.map((post) => ({
		id: post?.slug?.current
	}));
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
	const posts = await sanityFetch<Post[]>({ query: POSTS_QUERY });

	return posts.map((product) => ({
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${id}`,
		lastModified: product.publishedAt
	}));
}
