import { Stack, Typography } from "@mui/material"

const DefaultFooter = () => {
	return (
		<Stack
			padding='24px'
			alignItems='center'
			borderTop='1px solid'
		>
			<Typography>
				Enigma VSSUT &copy; 2023
			</Typography>
		</Stack>
	)
}

export default DefaultFooter