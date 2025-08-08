"use client"

import { useQueryState } from "nuqs"

import { Input } from "../ui/input"

interface BlogsFilterProps {
	refetchBlogs: () => Promise<void>
}

export default function BlogsFillter({ refetchBlogs }: BlogsFilterProps) {
	const [search, setSearch] = useQueryState("search", { defaultValue: "" })
	// const [perPage, setPerpage] = useQueryState(
	// 	"perPage",
	// 	parseAsInteger.withDefault(10)
	// )
	const handleSearch = (value: string) => {
		setSearch(value)
		setTimeout(() => {
			refetchBlogs()
		}, 300)
	}
	return (
		// <div className="flex justify-between gap-3">
		<div>
			<Input
				className="w-full"
				placeholder="ค้นหาบทความ..."
				value={search}
				onChange={(e) => handleSearch(e.target.value)}
			/>
			{/* <p>Hello, {search || "anonymous visitor"}!</p> */}
		</div>

		// </div>
	)
}
