import React from "react"
import BlogPage from "./Blogs"

import { loadSearchParams } from "./search-params"
import type { SearchParams } from "nuqs/server"
type BlogPageProps = {
	searchParams: Promise<SearchParams>
}

const Blog = async ({ searchParams }: BlogPageProps) => {
  const { search, perPage, offset } = await loadSearchParams(searchParams)
  // console.log("searchParams", search)
	return <BlogPage search={search} perPage={perPage} offset={offset} />
}

export default Blog
