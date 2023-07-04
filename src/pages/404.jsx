import AnimatePage from "src/ui/AnimatePage"
import { Stack, Typography } from "@mui/material"

const NotFound = () => {
	return (
		<AnimatePage>
			<Stack
				padding='32px'
			>
				<Typography
					variant='h1'
				>
					This page doesn{"'"}t exist.
				</Typography>
			</Stack>
		</AnimatePage>
	)
}

export default NotFound
