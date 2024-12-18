import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-start gap-8 md:items-center">
			<h1 className="self-center text-xl">Lorem ipsum</h1>
			<Image src="/hero-image.jpg" alt="Next.js logo" width={1024} height={768} priority />
		</div>
	);
}
