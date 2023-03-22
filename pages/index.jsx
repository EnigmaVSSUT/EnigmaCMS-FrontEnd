import Hero from "@/components/home/Hero"
import AnimatePage from "@/layout/AnimatePage"
import DefaultLayout from "@/layout/DefaultLayout"
import { Stack } from "@mui/material"
import Link from "next/link"

const Home = () => {
	return (
		<AnimatePage>
			<Stack
				flexGrow={1}
			>
				<Hero />
				<Link
					href='/members'
					passHref
				>
					members
				</Link>
			</Stack>
		</AnimatePage>
	)
}

export default Home
