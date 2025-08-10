import BlogsFillter from "@/components/blogs/blogs-fillter"
import BlogsList from "@/components/blogs/blogs-list"
import BlogsPagination from "@/components/blogs/blogs-pagination"
import BlogsPagination2 from "@/components/blogs/blogs-pagination2"
import { getBlogs } from "@/server/blogs"
import { revalidateTag } from "next/cache"

const BlogPage = async ({
	search,
	perPage,
	offset,
}: {
	search: string
	perPage: number
	offset: number
}) => {
	// const blogs = await getBlogs({ search })
	async function refetchBlogs() {
		"use server"
		revalidateTag("blogs")
	}

	return (
		<section className="max-w-6xl mx-auto px-6">
			<div className="text-center">
				<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
					Built to cover your needs
				</h2>
				<p className="mt-4">
					Libero sapiente aliquam quibusdam aspernatur, praesentium
					iusto repellendus.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-4">
				<div className="col-span-2">
					<h2 className="text-balance text-2xl font-semibold lg:text-2xl">
						บทความล่าสุด
					</h2>
				</div>
				<div>
					<BlogsFillter refetchBlogs={refetchBlogs} />
				</div>
			</div>
			{/* <BlogsList search={search} perPage={perPage} offset={offset} /> */}
			<BlogsList
				search={search}
				perPage={perPage}
				offset={offset}
				refetchBlogs={refetchBlogs}
			/>

			{/* <BlogsPagination refetchBlogs={refetchBlogs} /> */}
			{/* <BlogsPagination2 refetchBlogs={refetchBlogs} /> */}
		</section>
	)
}

export default BlogPage
