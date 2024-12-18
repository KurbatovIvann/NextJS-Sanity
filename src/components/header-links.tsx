"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@utils/cn";

export const HeaderLinks = () => {
	const pathname = usePathname();
	const routes = [
		{
			label: "Home",
			path: "/"
		},
		{
			label: "Blog",
			path: "/blog"
		}
	];

	return (
		<>
			{routes.map(({ path, label }) => (
				<Link
					key={path}
					href={path}
					className={cn("border-b-2 border-secondary hover:border-accent", {
						"border-accent hover:border-secondary": pathname === path
					})}
				>
					{label}
				</Link>
			))}
		</>
	);
};
