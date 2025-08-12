
import JobsPage from '../Jobs'
import Combobox from "@/components/combobox"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SearchIcon } from "lucide-react"

type Props = {}

const Jobs = async({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
	return (
		// <JobsPage />
		<section className="max-w-6xl mx-auto px-6">
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-4">
				<div>
					<Card className="w-full max-w-sm rounded-md">
						{/* <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link">Sign Up</Button>
              </CardAction>
            </CardHeader> */}
						<CardContent>
							<form>
								<div className="flex flex-col gap-6">
									<div className="grid gap-2">
										<Label htmlFor="">
											สถานที่ปฏิบัติงาน
										</Label>
										<Combobox placeholder="ค้นหาสถานที่ปฏิบัติงาน" />
									</div>
									<div className="grid gap-2">
										<Label htmlFor="">ประเภทงาน</Label>
										<Combobox placeholder="ค้นหาประเภทงาน" />
									</div>
									<div className="grid gap-2">
										<Label htmlFor="">
											คำที่ต้องการค้นหา
										</Label>
										<div className="relative">
											<div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
												<SearchIcon className="h-4 w-4" />
											</div>
											<Input
												type="search"
												placeholder="ระบุตำแหน่งงาน"
												className="w-full rounded-lg bg-background pl-8"
											/>
										</div>
									</div>
								</div>
							</form>
						</CardContent>
						<CardFooter className="flex-col gap-2">
							<Button type="submit" variant="default">
								ค้นหา
							</Button>
						</CardFooter>
					</Card>
				</div>
				<div className="col-span-2">
					<h2 className="text-balance text-2xl font-semibold lg:text-2xl">
						บทความล่าสุด {slug}
					</h2>
				</div>
			</div>
		</section>
	)
}

export default Jobs