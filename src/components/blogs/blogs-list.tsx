import { getBlogs } from "@/server/blogs"
import React from "react"
import BlogCard from "./blog-card"


const BlogsList = async ({
	search,
	perPage,
    offset
}: {
	search: string
	perPage: number
	offset: number
    }) => {
    const transformedOffset = (offset - 1) * perPage
	const blogs = await getBlogs({ search, perPage, offset: transformedOffset })
	// console.log("blogslist", search)
	// console.log("blogs", blogs)
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{blogs.map((blog) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</div>
	)
}
export default BlogsList
