import { Stack, Typography } from "@mui/material"

const Footer = () => {
	return (
		<Stack
			padding='24px'
			alignItems='center'
			borderTop='1px solid'
			borderColor='divider'
			// bgcolor='background.default'
			sx={{
				background: '#12121240',
				backdropFilter: 'blur(200px)'
			}}
		>
			<Typography
				color='text.body'
			>
				Enigma VSSUT &copy; 2023
			</Typography>
		</Stack>
	)
}

export default Footer
