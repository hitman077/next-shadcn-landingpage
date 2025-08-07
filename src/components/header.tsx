"use client"
import Link from "next/link"
import { Logo, LogoIcon, LogoStroke } from "@/components/logo"
import { Menu, Moon, MoonStar, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import { ModeToggle } from "./mode-toggle"
import NavigationMenus from "./navigation-menu"
import { useTheme } from "next-themes"
import { Separator } from "./ui/separator"

const menuItems = [
	{ name: "Features", href: "#link" },
	{ name: "Solution", href: "#link" },
	{ name: "Pricing", href: "#link" },
	{ name: "About", href: "#link" },
]

export const HeroHeader = () => {
	const [menuState, setMenuState] = React.useState(false)
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		// ถ้าธีมปัจจุบันเป็น "light" ให้เปลี่ยนเป็น "dark"
		// ถ้าไม่ใช่ (เป็น "dark" หรือ "system") ให้เปลี่ยนเป็น "light"
		setTheme(theme === "light" ? "dark" : "light")
	}
	return (
		<header>
			<nav
				data-state={menuState && "active"}
				className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
			>
				<div className="mx-auto max-w-6xl px-6 transition-all duration-300">
					<div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-3">
						<div className="flex w-full items-center gap-2 lg:gap-12">
							<Link
								href="/"
								aria-label="home"
								className="items-center space-x-2 hidden lg:flex"
							>
								{/* <Logo /> */}
								{/* <LogoIcon /> */}
								<div className="space-y-1">
									<h1 className="text-lg leading-none font-medium">
										E-Profile
									</h1>
									<p className="text-muted-foreground text-sm">
										เว็บไซต์สำหรับเช็คสายลับที่แฝงตัวอยู่ทั่วโลก
									</p>
								</div>
							</Link>
							<div className="flex items-center gap-4 lg:hidden">
								<Button
									onClick={() => setMenuState(!menuState)}
									aria-label={
										menuState == true
											? "Close Menu"
											: "Open Menu"
									}
									variant="ghost"
									size={"icon"}
									className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
								>
									<Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto  duration-200" />
									<X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto  -rotate-180 scale-0 opacity-0 duration-200" />
								</Button>
							</div>

							<div className="hidden lg:block">
								<ul className="flex gap-8 text-sm">
									<NavigationMenus />
								</ul>
							</div>
							<div className="ml-auto flex items-center gap-4 md:flex-1 md:justify-end">
								<div className="flex h-9 items-center space-x-4 text-sm">
									<Button
										variant="ghost"
										size="icon"
										onClick={toggleTheme}
									>
										<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
										<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
										<span className="sr-only">
											Toggle theme
										</span>
									</Button>
									<Separator orientation="vertical" />
									<Button variant="default" size="sm">
										เข้าสู่ระบบ
									</Button>
								</div>
							</div>
						</div>

						{/* Display Mobile */}
						<div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
							<div className="lg:hidden">
								<ul className="space-y-6 text-base">
									{menuItems.map((item, index) => (
										<li key={index}>
											<Link
												href={item.href}
												className="text-muted-foreground hover:text-accent-foreground block duration-150"
											>
												<span>{item.name}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}
