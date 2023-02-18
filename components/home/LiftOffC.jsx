import { Button, Link, Stack, Typography ,Box} from "@mui/material"
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
					Registrations Open !
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
					Learning never exhausts the mind <br/>
&#39; Lift off C &#39; requires no prior programming expertise and is suitable for all levels of experience, as everything will be taught from the scratch along with personalised mentoring and attention. Simple study materials and well curated assignments are all you need to get started.
<br/>
Registrations are open till 23rd February 2023.
					</Typography>
				</Stack>
				<Box>
				<Link href="/locregistration" style={{textDecoration:'none'}}>
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
				</Link>
				</Box>
			</Stack>
		</Stack>
	)
}

export default LiftOffC
