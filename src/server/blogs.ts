"use server"

interface GetBlogsParams {
	search?: string
	perPage?: number
	offset?: number
}

import { Blog } from "@/components/shared/types"
import { unstable_cache } from "next/cache"

// export async function getBlogs({ search }: GetBlogsParams): Promise<Blog[]> {
//     console.log("search", search)
// 	const res = await fetch(
// 		`https://api.escuelajs.co/api/v1/products`
// 	)
// 	const data = await res.json()

// 	return data
// }




export const getBlogs = unstable_cache(
	async (params: GetBlogsParams): Promise<Blog[]> => {
		
		const res = await fetch(
			`https://api.escuelajs.co/api/v1/products/?title=${params.search}&offset=${params.offset}&limit=${params.perPage}`
		)
		const data = await res.json()
		// await new Promise((resolve) => setTimeout(resolve, 3000))
		// console.log("getBlogs", params.search, data)
		return data
	},
	["blogs"],
	{
		tags: ["blogs"],
	}
)
