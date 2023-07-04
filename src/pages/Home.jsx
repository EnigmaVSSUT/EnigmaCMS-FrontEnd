import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import AnimatePage from "@/layout/AnimatePage"
import { Stack } from "@mui/material"

const Home = () => {
	return (
		<AnimatePage>
			<Stack
				flexGrow={1}
			>
				<Hero />
				<Services />
			</Stack>
		</AnimatePage>
	)
}

export default Home
