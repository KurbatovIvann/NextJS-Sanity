import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/header";

export const generateMetadata = async () => {
	const title = "Page not found";

	return {
		title
	};
};

export default async function notFound() {
	return (
		<div className="flex h-screen flex-1 flex-col">
			<Header />

			<div className="container m-auto flex w-full flex-1 flex-col items-center justify-center">
				<div className="flex flex-col items-center space-y-12">
					<div>
						<h1 className="text-xl font-bold">Ouch! :|</h1>
					</div>

					<div className="flex flex-col items-center space-y-8">
						<div className="flex flex-col items-center space-y-2.5">
							<div>
								<h2 className="font-mono text-lg font-extrabold">
									Sorry, this page does not exist.
								</h2>
							</div>

							<p className="text-darkgreen">
								Apologies, the page you were looking for was not found
							</p>
						</div>

						<Link href="/" className="flex items-center rounded-xl border border-accent p-2">
							<ArrowLeft className="mr-2" size={24} />
							Back to Home Page
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
