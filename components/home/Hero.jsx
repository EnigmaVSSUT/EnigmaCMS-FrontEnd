import { Stack, Typography } from "@mui/material"
import Lottie from 'lottie-react'

import waveAnimation from '@/lib/lottie/waves.json'
import useCursorStore from "@/lib/store/useCursorPositionStore"

const Hero = () => {
	const toggleHoverState = useCursorStore(state => state.toggleHoverState)

	return (
		<Stack
			// height='calc(100vh - 64px - 74px)'
			height='500px'
			alignItems='center'
			justifyContent='center'
			position='relative'
			bgcolor='#fff'
			padding='64px 32px'

		>
			<Lottie 
				animationData={waveAnimation}
				loop
				style={{
					width: 500,
					height: 500,
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			/>
			<Stack
				gap='8px'
				alignItems='center'
				zIndex={1000}
				onMouseEnter={() => toggleHoverState()}
				onMouseLeave={() => toggleHoverState()}
			>
				<Typography
					variant="h1"
				>
					Enigma
				</Typography>
				<Typography>
					The Official Coding Club of VSSUT, Burla
				</Typography>
			</Stack>
		</Stack>
	)
}

export default Hero