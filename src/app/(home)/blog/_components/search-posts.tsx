"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";

import { useDebounce } from "@/lib/hooks/use-debounce";

export const SearchPosts = () => {
	const [query, setQuery] = useState<string>();
	const searchParams = useSearchParams();
	const debouncedQuery = useDebounce(query);
	const { replace } = useRouter();
	const pathname = usePathname();

	const handleSearch = (event: SyntheticEvent) => {
		const target = event.target as HTMLInputElement;

		setQuery(target.value);
	};

	useEffect(() => {
		const params = new URLSearchParams(searchParams);

		if (debouncedQuery) {
			params.set("query", debouncedQuery);
		} else {
			params.delete("query");
		}

		replace(`${pathname}?${params.toString()}`);
	}, [debouncedQuery, searchParams]);

	return (
		<div className="flex">
			<input
				onChange={handleSearch}
				className="rounded-xl border border-secondary p-2 outline-none focus:border-accent"
				placeholder="Search posts"
			/>
		</div>
	);
};
