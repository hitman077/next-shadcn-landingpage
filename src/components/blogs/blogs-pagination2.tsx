"use client"

import { parseAsInteger, useQueryState } from "nuqs"

import {
	Pagination,
	PaginationContent,
	PaginationItem,
} from "@/components/ui/pagination"
import { ChevronLeft } from "lucide-react"
import { Button } from "../ui/button"

interface ProductsPaginationProps {
	refetchBlogs: () => Promise<void>
}

const BlogsPagination2 = ({ refetchBlogs }: ProductsPaginationProps) => {
	const [offset, setOffset] = useQueryState(
		"offset",
		parseAsInteger.withDefault(1)
	)

	const handleOffsetChange = (value: number) => {
		setOffset(value)
		setTimeout(() => {
			refetchBlogs()
		}, 300)
	}

	return (
		<Pagination>
			<PaginationContent>
				{offset > 1 && (
					<>
						<PaginationItem>
							<Button
								variant="outline"
								onClick={() => handleOffsetChange(offset - 1)}
							>
								<ChevronLeft className="size-4" /> Previous
							</Button>
						</PaginationItem>
						<PaginationItem>
							<Button
								variant="outline"
								onClick={() => handleOffsetChange(offset - 1)}
							>
								{offset - 1}
							</Button>
						</PaginationItem>
					</>
				)}

				<PaginationItem>
					<Button variant="outline" disabled>
						{offset}
					</Button>
				</PaginationItem>
				<PaginationItem>
					<Button
						variant="outline"
						onClick={() => handleOffsetChange(offset + 1)}
					>
						{offset + 1}
					</Button>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

export default BlogsPagination2