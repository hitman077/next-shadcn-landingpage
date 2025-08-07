"use client"

import { parseAsInteger, useQueryState } from "nuqs"

import { Input } from "../ui/input"

type Props = {}

export default function BlogFillter({}: Props) {
	const [search, setSearch] = useQueryState("search", { defaultValue: "" })
	const [perPage, setPerpage] = useQueryState(
		"perPage",
		parseAsInteger.withDefault(10)
	)
	return (
		// <div className="flex justify-between gap-3">
		<div>
			<Input
				className="w-full"
				placeholder="ค้นหาบทความ..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
		
		// </div>
	)
}
