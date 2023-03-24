import BackgroundBlob from '@/layout/BackgroundBlob'
import Header from '@/layout/appbar/Header'
import Footer from '@/layout/footer/Footer'
import '@/styles/globals.css'
import { Stack } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import EnigmaTheme from 'theme/EnigmaTheme'

const Cursor = dynamic(() => import('@/components/cursor/Cursor'), {
	ssr: false
})


export default function App({ Component, pageProps }) {
	const router = useRouter()

  return (
		<>
			<EnigmaTheme>
				<Head>
					<title>Enigma VSSUT</title>
				</Head>
				<Stack
					minHeight='100vh'
					bgcolor='background.default'
				>
					<BackgroundBlob />
					<Cursor />
					<Header />
					<Stack
						flexGrow={1}
						overflow='hidden'
						sx={{
							// backdropFilter: 'blur(200px)'
						}}
					>
						<AnimatePresence
							mode='wait'
							initial={false}
						>
							<Component {...pageProps} key={router.pathname} />
						</AnimatePresence>
					</Stack>
					<Footer />
				</Stack>
			</EnigmaTheme>
		</>
  )
}
