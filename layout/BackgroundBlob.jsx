import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"


const BackgroundBlob = () => {
	const blobRef = useRef()
	const [isMobile, setIsMobile] = useState(true)
	useEffect(() => {
		if(window.orientation == undefined) {
			setIsMobile(false)
		}

		document.body.addEventListener('mousemove', e => {
			const x = e.pageX + window.scrollX, y = e.pageY - window.scrollY
			blobRef.current.style.setProperty('--mouse-x', `${x-100}px`)
			blobRef.current.style.setProperty('--mouse-y', `${y-100}px`)
		})
	}, [])

	return (
		<motion.div
			ref={blobRef}
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
				display: isMobile ? 'none' : 'block',
				width: '200px',
				height: '200px',
				position: 'fixed',
				left: 'var(--mouse-x)',
				top: 'var(--mouse-y)',
				background: `linear-gradient(to right, #2BC96D, #D3D3D3)`,
				borderRadius: '200px',
				zIndex: 0,
			}}
		/>
	)
}

export default BackgroundBlob
