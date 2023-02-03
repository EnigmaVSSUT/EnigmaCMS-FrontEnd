import { useLayoutEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import useCursorStore from "lib/store/useCursorPositionStore"

const Cursor = () => {
	const cursorRef = useRef(null)
	const [x, y, setCursorPosition, isHovering] = useCursorStore(state => [state.x, state.y, state.setCursorPosition, state.isHovering])

	useLayoutEffect(() => {
		const mouseMove = e => {
			let x = e.pageX
			let y = e.pageY

			setCursorPosition(x, y)
		}

		document.body.addEventListener('mousemove', mouseMove)

		return () => document.body.removeEventListener('mousemove', mouseMove)
		
	}, [])

	const variants = {
		default: {
			x: x - (isHovering ? 50 : 20),
			y: y - (isHovering ? 50 : 20),
			width: isHovering ? 100 : 40,
			height: isHovering ? 100 : 40
		}
	}

	return (
		<motion.div
			ref={cursorRef}
			variants={variants}
			animate='default'
			style={{
				position: 'fixed',
				backgroundColor: isHovering ? '#fff' : 'transparent',
				border: '1px solid black',
				borderRadius: '50%',
				pointerEvents: 'none',
				zIndex: 99999,
				mixBlendMode: isHovering ? 'difference' : 'normal'
			}}
		/>
	)
} 

export default Cursor