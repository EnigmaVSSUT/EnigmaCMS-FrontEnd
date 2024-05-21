import { motion } from "framer-motion"

const variants = {
	hidden: {
		opacity: 0,
		x: 200
	},
	enter: {
		opacity: 1,
		x: 0
	},
	exit: {
		opacity: 0,
		x: -200
	}
}

const AnimatePage = ({ children }) => {
	return (
		<motion.main
			// variants={variants}
			// initial='hidden'
			// animate='enter'
			// exit='exit'
			// transition={{
			// 	stiffness: 500
			// }}
			style={{
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				backdropFilter: 'blur(200px)'
			}}
		>
			{ children }
		</motion.main>
	)
}

export default AnimatePage
