"use server"

interface GetBlogParams {
	search?: string
	// perPage?: number;
	// page?: number;
}

import { Blog } from "@/components/shared/types"

export async function getBlogs({ search }: GetBlogParams): Promise<Blog[]> {
	const res = await fetch(
		`https://api.escuelajs.co/api/v1/products/?title=${search}&limit=10`
	)
	const data = await res.json()

	return data
}
