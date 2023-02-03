import { ThemeProvider } from "@mui/material"
import useEnigmaTheme from "./useEnigmaTheme"

const EnigmaTheme = ({ children }) => {
	const theme = useEnigmaTheme()

	return (
		<ThemeProvider
			theme={theme}
		>
			{children}
		</ThemeProvider>
	)
}

export default EnigmaTheme