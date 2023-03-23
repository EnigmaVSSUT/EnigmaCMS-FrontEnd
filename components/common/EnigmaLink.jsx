import { Link, Stack, Box } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"

import { Link as NextLink } from "next/link"

const EnigmaLink = () => {
	return (
		<Stack
      direction="row"
      position="relative"
      gap="8px"
      alignItems="center"
      sx={{
        width: "fit-content",
        "&:hover": {
          "& .MuiSvgIcon-root": {
            transform: "translateX(0px)",
            opacity: 1
          },
          "& .MuiBox-root": {
            width: "100%"
          }
        }
      }}
    >
      <Link
				component={NextLink}
				href='/about'
				color='text.subtitle'
			>
				About
			</Link>
      <ArrowForward
        fontSize="12px"
				color='primary'
        sx={{
          position: "relative",
          transform: "translateX(-18px)",
          opacity: 0,
          transition: "transform 300ms"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-4px",
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

export default EnigmaLink
