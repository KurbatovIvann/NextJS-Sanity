import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import { cn } from "@utils/cn";

import { fonts } from "@/lib/fonts";

import "../styles/globals.css";

export const metadata: Metadata = {
	title: "Test project for Boosters",
	description: "Blog created with NextJS"
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className={cn(...fonts)}>
			<body>{children}</body>
		</html>
	);
}
