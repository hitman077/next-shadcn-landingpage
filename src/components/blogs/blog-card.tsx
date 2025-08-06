import Image from "next/image"
import { Blog } from "../shared/types"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { ShoppingCartIcon } from "lucide-react"
import { Badge } from "../ui/badge"

interface BlogCardProps {
	blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
	const imageUrl = blog.images[0].startsWith("http")
		? blog.images[0]
		: `https://i.imgur.com/${blog.images[0]}`
	return (
		<Card key={blog.id} className="pt-0 flex flex-col justify-between gap-2">
			<CardHeader className="p-0 relative">
				<Image
					src={imageUrl}
					alt={blog.title}
					width={300}
					height={300}
					className="w-full h-full object-cover rounded-t-lg"
				/>
				<Badge className="absolute top-2 left-2">
					{blog.category.name}
				</Badge>
				<div className="p-6">
					<CardTitle>{blog.title}</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<p className="text-xl font-bold">${blog.price}</p>
				<CardDescription>
					{blog.description.slice(0, 80)}...
				</CardDescription>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button>
					<ShoppingCartIcon className="size-4" />
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	)
}
