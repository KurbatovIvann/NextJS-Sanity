import { PropsWithChildren } from "react";

export default function StudioLayout({ children }: PropsWithChildren) {
	return <div className="absolute left-0 top-5 h-full w-full">{children}</div>;
}
