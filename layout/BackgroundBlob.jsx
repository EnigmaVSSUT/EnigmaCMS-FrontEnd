import useCursorStore from "@/lib/store/useCursorPositionStore"
import { Box } from "@mui/material"
import { motion } from "framer-motion"


const BackgroundBlob = () => {
	const [x, y] = useCursorStore(state => [state.x, state.y])

	return (
		<motion.div
			animate={{
				rotate: 360,
				transition: {
					duration: 3,
					repeat: Infinity,
					repeatType: 'loop',
					ease: 'linear'
				}
			}}
			style={{
				width: '200px',
				height: '200px',
				position: 'fixed',
				left: x - 100,
				top: y - 100,
				background: `linear-gradient(to right, #2BC96D, #D3D3D3)`,
				borderRadius: '200px',
				zIndex: 0,
			}}
		/>
	)
}

export default BackgroundBlob
