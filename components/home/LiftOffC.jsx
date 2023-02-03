import { Button, Stack, Typography } from "@mui/material"
import useCursorStore from "@/lib/store/useCursorPositionStore"

const LiftOffC = () => {
	const toggleHoverState = useCursorStore(state => state.toggleHoverState)

	return (
		<Stack
			padding='64px 32px'
		>
			<Stack
				padding='32px'
				borderRadius='32px'
				bgcolor='primary.main'
				gap='20px'
			>
				<Typography
					variant="h6"
				>
					Upcoming
				</Typography>
				<Stack
					
					onMouseEnter={() => toggleHoverState()}
					onMouseLeave={() => toggleHoverState()}
				>
					<Typography
						variant='h1'
					>
						Lift-Off C 🚀
					</Typography>
					<Typography>
						Are you dreaming of competing off the edge with high-class hackathons and dreaming of a top position? Don't worry! Team Enigma has come up with a great program to help you build up your programming skills.
					</Typography>
				</Stack>
				<Button
					variant='contained'
					color='black'
				>
					<Typography
						color='white.main'
					>
						Register
					</Typography>
				</Button>
			</Stack>
		</Stack>
	)
}

export default LiftOffC