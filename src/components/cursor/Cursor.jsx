import { useLayoutEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import useCursorStore from "@/lib/store/useCursorPositionStore"
import { useTheme } from "@emotion/react"

const Cursor = () => {
	const cursorRef = useRef(null)
	const [showCursor, setCursorPosition, isHovering, setCursorVisibility] = useCursorStore(state => [state.showCursor, state.x, state.y, state.setCursorPosition, state.isHovering, state.cursorBackgroundColor, state.setCursorVisibility])
	const theme = useTheme()
	const [isMobile, setIsMobile] = useState(true)

	useLayoutEffect(() => {
		if(window.orientation == undefined)	 {
			setIsMobile(false)
		}

		const mouseMove = e => {
			let x = e.pageX + window.scrollX
			let y = e.pageY - window.scrollY
			cursorRef.current.style.setProperty('--mouse-x', `${x-10}px`)
			cursorRef.current.style.setProperty('--mouse-y', `${y-10}px`)
			// setCursorPosition(x, y)
		}

		document.body.addEventListener('mousemove', mouseMove)
		document.addEventListener('mouseleave', () => setCursorVisibility(false))
		document.addEventListener('mousemove', () => setCursorVisibility(true))

		return () => document.body.removeEventListener('mousemove', mouseMove)
		
	}, [setCursorPosition, setCursorVisibility])

	// const variants = {
	// 	default: {
	// 		x: x - 10,
	// 		y: y - 10,
	// 		width: 20,
	// 		height: 20
	// 	}
	// }

	return (
		<motion.div
			ref={cursorRef}
			// variants={variants}
			// animate='default'
			style={{
				display: isMobile ? 'none' : 'block',
				visibility: showCursor ? 'visible' : 'hidden',
				position: 'fixed',
				width: '20px',
				height: '20px',
				left: 'var(--mouse-x)',
				top: 'var(--mouse-y)',				
				backgroundColor: 'transparent',
				border: '1px solid',
				borderColor: theme.palette.border.default,
				borderRadius: '50%',
				pointerEvents: 'none',
				zIndex: 99999,
				mixBlendMode: isHovering ? 'difference' : 'normal'
			}}
			transition={{
				delay: 1
			}}
		/>
	)
} 

export default Cursor
