"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react"
import { parseAsInteger, useQueryState } from "nuqs"
interface BlogsFilterProps {
	refetchBlogs: () => Promise<void>
}

const BlogsPagination = ({ refetchBlogs }: BlogsFilterProps) => {
	const [offset, setOffset] = useQueryState(
		"offset",
		parseAsInteger.withDefault(1)
	)

	const [perPage, setPerPage] = useQueryState(
		"perPage",
		parseAsInteger.withDefault(10)
	)

	const handleOffsetChange = (value: number) => {
		setOffset(value)
		setTimeout(() => {
			refetchBlogs()
		}, 300)
	}

	const handlePerPageChange = (value: string) => {
		setPerPage(Number(value))
		setTimeout(() => {
			refetchBlogs()
		}, 300)
	}

	return (
		<div className="relative flex flex-col py-4 gap-4 overflow-auto">
			<div className="flex items-center justify-between">
				<div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
					บทความทั้งหมด (100)
				</div>
				<div className="flex w-full items-center gap-8 lg:w-fit">
					<div className="hidden items-center gap-2 lg:flex">
						<Label
							htmlFor="rows-per-page"
							className="text-sm font-medium"
						>
							แสดงผลต่อหน้า
						</Label>
						<Select
							value={perPage.toString()}
							onValueChange={(value) =>
								handlePerPageChange(value)
							}
						>
							<SelectTrigger
								size="sm"
								className="w-20"
								id="rows-per-page"
							>
								<SelectValue placeholder={perPage.toString()} />
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
						หน้า {offset} ทั้งหมด
					</div>
					<div className="ml-auto flex items-center gap-2 lg:ml-0">
						<Button
							variant="outline"
							className="hidden h-8 w-8 p-0 lg:flex"
							// onClick={() => table.setPageIndex(0)}
							// disabled={!table.getCanPreviousPage()}
						>
							<span className="sr-only">Go to first page</span>
							<ChevronsLeft />
						</Button>
						<Button
							variant="outline"
							className="size-8"
							size="icon"
							onClick={() => handleOffsetChange(offset - 1)}
							// disabled={!table.getCanPreviousPage()}
						>
							<span className="sr-only">Go to previous page</span>
							<ChevronLeft />
						</Button>
						<Button
							variant="outline"
							className="size-8"
							size="icon"
							onClick={() => handleOffsetChange(offset + 1)}
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
	)
}

export default BlogsPagination
