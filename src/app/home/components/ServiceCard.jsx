
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Stack, Typography, useTheme } from "@mui/material"

const ServiceCardContent = ({ service }) => {
	const theme = useTheme()

	return (
		<Stack
			sx={{
				position: 'relative',
				width: 'calc(100% - 2px)',
				height: 'calc(100% - 2px)',
				margin: '1px',
				bgcolor: 'background.paper',
				borderRadius: 'inherit',
				padding: '20px',
				gap:'14px',
				alignItems: 'start',
				'&:hover svg': {
					color: theme.palette.primary.main
				},
				'&:hover .MuiTypography-bodyLarge': {
					color: theme.palette.primary.main
				}
			}}
		>
			<FontAwesomeIcon 
				icon={service.icon}
				color={theme.palette.text.primary}
				size="2xl"
				style={{
					transition: 'color 500ms',
				}}
			/>
			<Typography
				variant='bodyLarge'
			>
				{ service.name }
			</Typography>
			<Typography
				variant='bodyMedium'
				whiteSpace={'normal'}
				color={theme => theme.palette.text.secondary}
			>
				{ service.description }
			</Typography>
		</Stack>
	)
}

const ServiceCard = ({ service }) => {
	// const [x, y] = useCursorStore(state => [state.x, state.y])


	return (
		<Stack
			position='relative'
			sx={{
				width: '100%',
				height: '100%',
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
			<ServiceCardContent service={service} />
		</Stack>
	)
}

export default ServiceCard
