import { Stack, Typography } from "@mui/material"
import useCursorStore from "lib/store/useCursorPositionStore"

const HelloWorld = () => {
	const toggleHoverState = useCursorStore(state => state.toggleHoverState)

    return (
		<Stack
			height='100vh'
			justifyContent='center'
		>
			<Stack
				padding='32px'
				bgcolor='#fff'
			>
				<Typography
					variant='h1'
					fontWeight='bold'
					textAlign='center'
					onMouseEnter={() => {
						toggleHoverState()
					}}
					onMouseLeave={() => toggleHoverState()}
				>
					Hello World
				</Typography>
				<Typography
					variant='h1'
					fontWeight='bold'
					// color='#35ff1f'
					textAlign='center'
				>
					Hello World
				</Typography>
			</Stack>
		</Stack>
	)
}

export default HelloWorld