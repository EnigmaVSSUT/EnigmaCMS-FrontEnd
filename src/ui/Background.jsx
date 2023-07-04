import { Stack } from "@mui/material"

const Background = ({children}) => {
	return (
		<Stack 
			width='100%' 
			minHeight='100vh'
			bgcolor={theme => theme.palette.surface.main}
		>
			{children}
		</Stack>
	)
}

export default Background