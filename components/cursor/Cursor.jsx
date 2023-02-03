import { useLayoutEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import useCursorStore from "lib/store/useCursorPositionStore"
import { useMediaQuery } from "@mui/material"

const Cursor = () => {
	const cursorRef = useRef(null)
	const [showCursor, x, y, setCursorPosition, isHovering, cursorBackgroundColor, setCursorVisibility] = useCursorStore(state => [state.showCursor, state.x, state.y, state.setCursorPosition, state.isHovering, state.cursorBackgroundColor, state.setCursorVisibility])
	const isTouchDevice = useMediaQuery('(pointer: coarse)')

	useLayoutEffect(() => {
		const mouseMove = e => {
			let x = e.pageX + window.scrollX
			let y = e.pageY - window.scrollY

			setCursorPosition(x, y)
		}

		document.body.addEventListener('mousemove', mouseMove)
		document.addEventListener('mouseleave', () => setCursorVisibility(false))
		document.addEventListener('mousemove', () => setCursorVisibility(true))

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
				display: isTouchDevice ? 'none' : 'block',
				visibility: showCursor ? 'visible' : 'hidden',
				position: 'fixed',
				backgroundColor: cursorBackgroundColor,
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