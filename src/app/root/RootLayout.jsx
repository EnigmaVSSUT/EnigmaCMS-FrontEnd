
import { Stack } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "../../ui/Header"
import Footer from "../../ui/Footer"

const RootLayout = () => {
	return (
		<Stack
			flexGrow={1}
		>
			<Header />
			<Stack flexGrow={1}>
				<Outlet />
			</Stack>
			<Footer />
		</Stack>
	)
}

export default RootLayout