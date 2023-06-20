import AnimatePage from "@/layout/AnimatePage"
import { Stack, Typography } from "@mui/material"

const About = () => {
	return (
		<AnimatePage>
			<Stack
				padding='32px'
			>
				<Typography
					variant='h1'
				>
					About
				</Typography>
			</Stack>
		</AnimatePage>
	)
}

export default About;
