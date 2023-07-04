import { Stack } from "@mui/material"
import Hero from "./components/Hero"
import Services from "./components/Services"
import AnimatePage from "../../ui/AnimatePage"

const HomePage = () => {
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

export default HomePage