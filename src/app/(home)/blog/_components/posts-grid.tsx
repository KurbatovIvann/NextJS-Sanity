import { PostComponent } from "@/app/(home)/blog/_components/post";
import { POSTS_QUERYResult } from "@/sanity/types";

type PostsGridProps = {
	posts: POSTS_QUERYResult;
};

export const PostsGrid = ({ posts }: PostsGridProps) => {
	return (
		<div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
			{posts.map((post) => (
				<PostComponent post={post} key={post._id} />
			))}
		</div>
	);
};
