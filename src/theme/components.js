/**
 * @type {import("@mui/material").Components}
 */
const componentOverrides = {
	MuiButton: {
		defaultProps: {
			fullWidth: false,
			disableElevation: true,
			disableRipple: true
		},
		styleOverrides: {
			root: {
				padding: '10px 24px',
				textTransform: 'none'
			}
		}
	},
	MuiContainer: {
		defaultProps: {
			disableGutters: true
		}
	},
	MuiAppBar: {
		defaultProps: {
			elevation: 0
		}
	},
	MuiToolbar: {
		defaultProps: {
			disableGutters: true
		}
	},
	MuiIconButton: {
		styleOverrides: {
			root: {
				borderRadius: 0
			}
		}
	},
	MuiBreadcrumbs: {
		styleOverrides: {
			separator: {
				margin: '0 4px'
			}
		}
	},
	MuiTypography: {
		defaultProps: {
			variant: 'bodyLarge'
		}
	}
}

export default componentOverrides

