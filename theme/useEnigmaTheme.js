import { createTheme } from "@mui/material"
import paletteOptions from "./options/palette"
import componentOptions from "./options/components"
import typographyOptions from "./options/typography"

const useEnigmaTheme = () => {
	const theme = createTheme({
		palette: paletteOptions,
		components: componentOptions,
		typography: typographyOptions
	})

	return theme
}

export default useEnigmaTheme