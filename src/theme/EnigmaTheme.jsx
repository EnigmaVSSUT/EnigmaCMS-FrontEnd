import { ThemeProvider, createTheme } from "@mui/material"
import componentOverrides from "./components"
import darkPalette from "./palette.dark"
import typographyOptions from "./typography"
// import lightPalette from "./palette.light"

const EnigmaTheme = ({children}) => {
	const theme = createTheme({
		components: componentOverrides,
		palette: darkPalette,
		typography: typographyOptions,
		
	})

	return (
		<ThemeProvider
			theme={theme}
		>
			{children}
		</ThemeProvider>
	)
}

export default EnigmaTheme