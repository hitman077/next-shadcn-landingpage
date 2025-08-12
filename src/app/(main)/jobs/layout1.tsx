import React from "react"

interface JobsLayoutProps {
	children: React.ReactNode
}

const JobsLayout = ({ children }: JobsLayoutProps) => {
	return <div>{children}</div>
}

export default JobsLayout
