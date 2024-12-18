import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
	title: "Some title for SEO",
	description: "Some description for SEO"
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			<main>
				<div className="min-h-screen p-6 font-sans md:p-12 lg:p-20">{children}</div>
			</main>
			<Footer />
		</>
	);
}
