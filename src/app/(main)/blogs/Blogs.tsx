
import BlogCard from "@/components/blogs/blog-card"
import { getBlogs } from "@/server/blogs"

const BlogPage = async () => {

	const blogs = await getBlogs()
	return (
		<section className="max-w-6xl mx-auto px-6">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{blogs.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</section>
	)
}

export default BlogPage
