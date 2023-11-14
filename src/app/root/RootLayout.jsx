
import { Stack } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "../../ui/Header"
import Footer from "../../ui/Footer"
import ErrorBoundary from "../../errors/ErrorBoundary"

const RootLayout = () => {
	return (
		<ErrorBoundary>
			
		<Stack
			flexGrow={1}
		>
			<Header />
			<Stack flexGrow={1}>
				<Outlet />
			</Stack>
			<Footer />
		</Stack>
		
		</ErrorBoundary>
	)
}

export default RootLayout