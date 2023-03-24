import useCursorStore from "@/lib/store/useCursorPositionStore"
import { Stack } from "@mui/material"

const ServiceCardContent = () => {
	return (
		<Stack
			sx={{
				position: 'absolute',
				width: 'calc(100% - 2px)',
				height: 'calc(100% - 2px)',
				margin: '1px',
				bgcolor: 'background.paper',
				borderRadius: 'inherit'
			}}
		>

		</Stack>
	)
}

const ServiceCard = ({ mousePos }) => {
	// const [x, y] = useCursorStore(state => [state.x, state.y])


	return (
		<Stack
			position='relative'
			sx={{
				width: 300,
				height: 260,
				bgcolor: 'rgba(255, 255, 255, 0.1)',
				borderRadius: '8px',
				overflow: 'hidden',
				'&:before': {
					content: '""',
					position: 'absolute',
					width: '100%',
					height: '100%',
					background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.6), transparent 40%)`,
					opacity: 0,
					transition: 'opacity 500ms'
				}
			}}
		>
			<ServiceCardContent />
		</Stack>
	)
}

export default ServiceCard
