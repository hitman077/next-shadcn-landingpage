import BlogCard from "@/components/blogs/blog-card"
import BlogFillter from "@/components/blogs/blogs-fillter"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { getBlogs } from "@/server/blogs"
import { loadSearchParams } from "./search-params"
import type { SearchParams } from "nuqs/server"
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react"


type BlogPageProps = {
	searchParams: Promise<SearchParams>
}
const BlogPage = async ({ searchParams }: BlogPageProps) => {
	const { search } = await loadSearchParams(searchParams)
	const blogs = await getBlogs({search})
	// console.log("blogs", blogs)
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
					<BlogFillter />
				</div>
			</div>
			<div className="relative flex flex-col py-4 gap-4 overflow-auto">
				<div className="flex items-center justify-between">
					<div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
						บทความทั้งหมด ({blogs.length})
					</div>
					<div className="flex w-full items-center gap-8 lg:w-fit">
						<div className="hidden items-center gap-2 lg:flex">
							<Label
								htmlFor="rows-per-page"
								className="text-sm font-medium"
							>
								แสดงผลต่อหน้า
							</Label>
							<Select>
								<SelectTrigger
									size="sm"
									className="w-20"
									id="rows-per-page"
								>
									<SelectValue placeholder={10} />
								</SelectTrigger>
								<SelectContent side="top">
									{[10, 20, 30, 40, 50].map((pageSize) => (
										<SelectItem
											key={pageSize}
											value={`${pageSize}`}
										>
											{pageSize}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="flex w-fit items-center justify-center text-sm font-medium">
							หน้า 1 ทั้งหมด 7
						</div>
						<div className="ml-auto flex items-center gap-2 lg:ml-0">
							<Button
								variant="outline"
								className="hidden h-8 w-8 p-0 lg:flex"
								// onClick={() => table.setPageIndex(0)}
								// disabled={!table.getCanPreviousPage()}
							>
								<span className="sr-only">
									Go to first page
								</span>
								<ChevronsLeft />
							</Button>
							<Button
								variant="outline"
								className="size-8"
								size="icon"
								// onClick={() => table.previousPage()}
								// disabled={!table.getCanPreviousPage()}
							>
								<span className="sr-only">
									Go to previous page
								</span>
								<ChevronLeft />
							</Button>
							<Button
								variant="outline"
								className="size-8"
								size="icon"
								// onClick={() => table.nextPage()}
								// disabled={!table.getCanNextPage()}
							>
								<span className="sr-only">Go to next page</span>
								<ChevronRight />
							</Button>
							<Button
								variant="outline"
								className="hidden size-8 lg:flex"
								size="icon"
								// onClick={() =>
								// 	table.setPageIndex(table.getPageCount() - 1)
								// }
								// disabled={!table.getCanNextPage()}
							>
								<span className="sr-only">Go to last page</span>
								<ChevronsRight />
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{blogs.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</section>
	)
}

export default BlogPage
