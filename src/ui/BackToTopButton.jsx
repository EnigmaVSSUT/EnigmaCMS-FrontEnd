import { Stack, Box, Typography } from "@mui/material"
import {  ArrowUpward } from "@mui/icons-material"

const ScrollToTopButton = () => {
	const scrollToTop = () => {
		window.scrollTo(0,0)
	}

	return (
		<Stack
      direction="row"
      position="relative"
      gap="8px"
      alignItems="center"
      sx={{
        width: "fit-content",
				cursor: 'pointer',
        "&:hover": {
          "& .MuiSvgIcon-root": {
            transform: "translateY(0px)",
            opacity: 1
          },
          "& .MuiBox-root": {
            width: "100%"
          }
        }
      }}
			onClick={scrollToTop}
    >
			<Typography
				color='text.body'
			>
				Scroll to Top
			</Typography>
      <ArrowUpward
        fontSize="12px"
				color='primary'
        sx={{
          position: "relative",
          transform: "translateY(18px)",
          opacity: 0,
          transition: "transform 300ms"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "0px",
          left: "0",
          width: "0%",
          height: "2px",
          bgcolor: "primary.main",
          borderRadius: "10px",
          transition: "width 300ms"
        }}
      />
    </Stack>
	)
}

export default ScrollToTopButton
