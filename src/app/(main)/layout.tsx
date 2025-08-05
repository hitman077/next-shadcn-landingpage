import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import HeroSection from "@/components/hero-section"

interface MainLayoutProps {
	children: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="min-h-screen flex flex-col">
			<HeroHeader />
			{/* <HeroSection /> */}
			<main className="py-24 md:py-28 lg:py-28 dark:bg-transparent">
				{children}
			</main>
			<FooterSection />
		</div>
	)
}

export default MainLayout
