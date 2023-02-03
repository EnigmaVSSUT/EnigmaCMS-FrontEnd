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
				padding: '10px 16px',
				cursor: 'none'
			}
		}
	}
}

export default componentOptions