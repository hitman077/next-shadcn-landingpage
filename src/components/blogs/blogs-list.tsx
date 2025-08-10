import { getBlogs } from "@/server/blogs"
import React from "react"
import BlogCard from "./blog-card"
import BlogsPagination from "./blogs-pagination"
import { revalidateTag } from "next/cache"
import BlogsPaginationDemo from "./blogs-pagination-demo"

const BlogsList = async ({
	search,
	perPage,
	offset,
	refetchBlogs,
}: {
	search: string
	perPage: number
	offset: number
	refetchBlogs: () => Promise<void>
}) => {
	// const transformedOffset = (offset - 1) * perPage
	// const blogs = await getBlogs({ search, perPage, offset: transformedOffset })
	const blogs = await getBlogs({ search, perPage, offset })
	// ในโปรเจกต์จริง ควรใช้ total count จาก API ถ้ามี
	const totalblogs = blogs.length // สมมติว่ามีสินค้าทั้งหมด 200 ชิ้น
	const pageCount = Math.ceil(totalblogs / perPage)

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{blogs.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
			<BlogsPaginationDemo
				totalblogs={totalblogs}
				pageCount={pageCount}
				refetchBlogs={refetchBlogs}
			/>
		</>
	)
}
export default BlogsList
