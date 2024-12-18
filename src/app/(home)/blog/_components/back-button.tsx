"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
	const router = useRouter();

	return (
		<div className="flex cursor-pointer items-center gap-2" onClick={() => router.back()}>
			<MoveLeft size={32} />
			<span className="font-mono text-lg font-bold">Back</span>
		</div>
	);
};
