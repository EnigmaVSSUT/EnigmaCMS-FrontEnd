import { Stack, Typography } from "@mui/material"
import EnigmaLink from "../common/EnigmaLink"
import ServiceCard from "./ServiceCard"
import { useEffect, useRef, useState } from "react"

const Services = () => {
	const servicesContainerRef = useRef()
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0
	})

	useEffect(() => {
		servicesContainerRef.current.addEventListener('mousemove', e => {
			for(const card of servicesContainerRef.current.querySelectorAll('.MuiStack-root')) {
				const rect = card.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top
				card.style.setProperty('--mouse-x', `${x}px`)
				card.style.setProperty('--mouse-y', `${y}px`)
			}
		})
	}, [])

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
			<Stack
				direction='row'
				flexWrap='wrap'
				ref={servicesContainerRef}
				sx={{
					'&:hover': {
						'& .MuiStack-root:before': {
							opacity: 1
						}
					}
				}}
				gap='8px'
				padding='64px 0'
				flex='300px'
				maxWidth='916px'
				alignSelf='center'
				justifyContent='center'
			>
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</Stack>
		</Stack>
	)
}

export default Services
