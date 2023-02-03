import { Button, Stack, Typography } from "@mui/material"
import useCursorStore from "@/lib/store/useCursorPositionStore"
import { RocketLaunch } from "@mui/icons-material"

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
					onMouseEnter={() => toggleHoverState('#35ff1f')}
					onMouseLeave={() => toggleHoverState()}
				>
					<Typography
						variant='h1'
						component='span'
					>
						Lift-Off C <RocketLaunch sx={{ fontSize: (theme) => theme.typography.h1.fontSize }} />
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