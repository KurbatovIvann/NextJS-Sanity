import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(
	`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...12]{_id, title, body, slug, readTimeEstimate, author->, mainImage, categories->, publishedAt}`
);

export const POSTS_SEARCH_QUERY = defineQuery(
	`*[_type == "post" && defined(slug.current)][title match $searchQuery + "*" || pt::text(body) match $searchQuery + "*"] | order(publishedAt desc)[0...12]{_id, title, body, slug, readTimeEstimate, author->, mainImage, categories->, publishedAt}`
);

export const POST_QUERY = defineQuery(
	`*[_type == "post" && slug.current == $slug][0]{_id, title, slug, body, readTimeEstimate, author->, mainImage, categories->, publishedAt}`
);
