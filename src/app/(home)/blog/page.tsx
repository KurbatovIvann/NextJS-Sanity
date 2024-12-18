import { PostsGrid } from "@/app/(home)/blog/_components/posts-grid";
import { SearchPosts } from "@/app/(home)/blog/_components/search-posts";
import { sanityFetch } from "@/sanity/lib/fetchSenity";
import { POSTS_SEARCH_QUERY } from "@/sanity/lib/queries/posts";
import { POSTS_QUERYResult } from "@/sanity/types";

export default async function Blog(props: { searchParams?: Promise<{ query: string }> }) {
	const searchParams = await props.searchParams;
	const searchQuery = searchParams?.query || "";

	const posts = await sanityFetch<POSTS_QUERYResult>({
		query: POSTS_SEARCH_QUERY,
		params: { searchQuery: searchQuery }
	});

	return (
		<div className="flex flex-col items-center gap-8">
			<h1 className="self-center text-xl">Blog</h1>
			<SearchPosts />
			<PostsGrid posts={posts} />
		</div>
	);
}
