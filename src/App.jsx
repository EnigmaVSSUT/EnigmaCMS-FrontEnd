import './App.css'
import '@/styles/globals.css'
import EnigmaTheme from '@/theme/EnigmaTheme'
import { Stack } from '@mui/material'
import BackgroundBlob from '@/layout/BackgroundBlob'
import Header from '@layout/appbar/Header'
import Footer from '@layout/footer/Footer'
import Cursor from '@/components/cursor/Cursor'
import { AnimatePresence } from 'framer-motion'
import PageRouter from './router'
import {BrowserRouter} from "react-router-dom"

function App() {

  return (
    <>
   <EnigmaTheme>
				<head>
					<title>Enigma VSSUT</title>
				</head>
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
							{/* <Component {...pageProps} key={router.pathname} /> */}
							<BrowserRouter>
							<PageRouter/>
							</BrowserRouter>
						</AnimatePresence>
					</Stack>
					<Footer />
				</Stack>
			</EnigmaTheme>
    </>
  )
}

export default App
