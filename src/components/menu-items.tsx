import Link from 'next/link'
import React from 'react'
import { NavigationMenuLink } from './ui/navigation-menu'

interface MenuItemProps {
	title: string
	href: string
	// description: string
	children: string
}

const MenuItems = ({ title, href, children }: MenuItemProps) => {
    return (
		<li>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className="text-sm leading-none font-medium">
						{title}
					</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	)
}

export default MenuItems