import { Box, Stack } from "@mui/material"
import { Children } from "react"
import DefaultAppBar from "./appbar/Header"
import DefaultFooter from "./footer/Footer"

const DefaultLayout = ({ children }) => {
	return (
		<Stack
			minHeight='100vh'
			justifyContent='space-between'
		>
			<DefaultAppBar />
			<Box 
				sx={{
					height: '64px'
				}}
			/>
			<Stack
				flexGrow={1}
			>
				{children}
			</Stack>
			<DefaultFooter />
		</Stack>
	)
}

export default DefaultLayout
