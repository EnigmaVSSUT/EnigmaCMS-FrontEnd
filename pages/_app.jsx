import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import EnigmaTheme from 'theme/EnigmaTheme'

const Cursor = dynamic(() => import('@/components/cursor/Cursor'), {
	ssr: false
})


export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || (page => page)

  return (
	<EnigmaTheme>
		<Head>
			<title>Enigma VSSUT</title>
		</Head>
		<div
			style={{
				minHeight: '100vh'
			}}
		>
			<Cursor />
			{ getLayout(<Component {...pageProps} />) }
		</div>
	</EnigmaTheme>
  )
}
