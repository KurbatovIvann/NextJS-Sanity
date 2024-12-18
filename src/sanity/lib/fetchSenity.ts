import { type QueryParams } from "next-sanity";

import { client } from "@/sanity/lib/client";

export async function sanityFetch<fetchResponse>({
	query,
	params = {},
	revalidate = 60, // default revalidation time in seconds
	tags = []
}: {
	query: string;
	params?: QueryParams;
	revalidate?: number | false;
	tags?: string[];
}) {
	return client.fetch<fetchResponse>(query, params, {
		next: {
			revalidate: tags.length ? false : revalidate,
			tags
		}
	});
}
