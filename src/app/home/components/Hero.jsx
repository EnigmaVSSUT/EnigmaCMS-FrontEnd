import {Stack, Typography, useTheme } from "@mui/material"
import { grey } from "@mui/material/colors"

const Hero = () => {
	const theme = useTheme()

	return (
		<Stack
			height='calc(100vh - 62.8px)'
			sx={{
				background: `radial-gradient(${grey[200]} 0%, transparent 8%)`,
				backgroundSize: `5vmin 5vmin`,
				backgroundPosition: '0 0'
			}}
		>
			<Stack
				sx={{
					background: `radial-gradient(300px circle at 50% 50%, ${theme.palette.background.default} 40%, transparent)`,
					backgroundSize: '100% 100%',
				}}
				width='100%'
				height='100%'
				justifyContent='center'
				alignItems='center'
				padding='32px'
				gap='16px'
			>	
				<Typography
					variant='displayLarge'
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
