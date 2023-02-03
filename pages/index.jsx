import Hero from "@/components/home/Hero"
import LiftOffC from "@/components/home/LiftOffC"
import DefaultLayout from "@/layout/DefaultLayout"
import { Button, Stack, useTheme } from "@mui/material"
import { useEffect } from "react"

const Home = () => {
	const theme = useTheme()
	useEffect(() => {
		console.log(theme)
	}, [])

	return (
		<Stack
			flexGrow={1}
		>
			<Hero />
			<LiftOffC />
		</Stack>
	)
}

Home.getLayout = function(page) {
	return (
		<DefaultLayout>
			{page}
		</DefaultLayout>
	)
}

export default Home