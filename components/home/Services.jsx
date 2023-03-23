import { Stack, Typography } from "@mui/material"
import EnigmaLink from "../common/EnigmaLink"

const Services = () => {
	return (
		<Stack
			minHeight='100vh'
			padding='64px 32px'
		>
			<Typography
				variant='h1'
				color='text.title'
			>
				What we do.
			</Typography>
			<EnigmaLink />
		</Stack>
	)
}

export default Services
