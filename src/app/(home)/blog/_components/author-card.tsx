import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import { Author } from "@/sanity/types";
import { PortableText } from "@portabletext/react";

type AuthorCardProps = {
	author: Author;
};
export const AuthorCard = ({ author }: AuthorCardProps) => {
	if (!author) return null;
	const authorImageSrc = urlFor(author.image?.asset?._ref ?? "").url();

	return (
		<div className="flex gap-6 p-2">
			<div className="relative h-14 w-14 overflow-hidden rounded-full p-1 ring-4 ring-gray-300">
				<Image
					src={authorImageSrc}
					alt={author?.image?.alt ?? "Image alt text"}
					fill
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col">
				<span className="text-lg">{author.name}</span>
				{author.bio && (
					<span className="font-mono text-md">
						<PortableText value={author.bio} />{" "}
					</span>
				)}
			</div>
		</div>
	);
};
