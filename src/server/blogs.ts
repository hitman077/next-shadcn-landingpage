"use server"

import { Blog } from "@/components/shared/types"

export async function getBlogs(): Promise<Blog[]> {
    const res = await fetch("https://api.escuelajs.co/api/v1/products")
    const data = await res.json()

    return data
}