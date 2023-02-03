import Hero from "@/components/home/Hero"
import LiftOffC from "@/components/home/LiftOffC"
import DefaultLayout from "@/layout/DefaultLayout"
import { Button, Stack } from "@mui/material"

const Home = () => {
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