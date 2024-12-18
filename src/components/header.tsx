import { HeaderLinks } from "@/components/header-links";

export const Header = () => {
	return (
		<header>
			<div className="sticky top-0 z-10 w-full bg-background py-6 font-sans text-md shadow-md">
				<div className="flex justify-center gap-12">
					<HeaderLinks />
				</div>
			</div>
		</header>
	);
};
