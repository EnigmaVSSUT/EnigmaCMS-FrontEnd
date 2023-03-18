import Hero from "@/components/home/Hero"
import LiftOffC from "@/components/home/LiftOffC"
import Induction from "@/components/home/Induction"
import DefaultLayout from "@/layout/DefaultLayout"
import { Stack } from "@mui/material"

const Home = () => {
	return (
		<Stack
			flexGrow={1}
		>
			<Hero />
			<LiftOffC />
			<Induction></Induction>
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
