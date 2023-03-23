const componentOptions = {
	MuiAppBar: {
		defaultProps: {
			elevation: 0
		}
	},
	MuiButton: {
		defaultProps: {
			disableRipple: true,
			disableElevation: true
		},
		styleOverrides: {
			root: {
				width: 'fit-content',
				padding: '6px 16px',
				textTransform: 'none',
				fontWeight: 500
			}
		}
	},
	MuiLink: {
		defaultProps: {
			underline: 'none'
		}
	},
	MuiIconButton: {
		styleOverrides: {
			root: {
				width: 'fit-content'
			}
		}
	}
}

export default componentOptions
