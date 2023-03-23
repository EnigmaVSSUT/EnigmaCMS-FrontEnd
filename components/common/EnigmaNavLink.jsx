import { Stack, Box, Typography } from "@mui/material"
import Link from "next/link"

const EnigmaNavLink = ({ href = '/', color = 'text.body', children }) => {
	return (
		<Stack
      direction="row"
      position="relative"
      gap="8px"
      alignItems="center"
      sx={{
        width: "fit-content",
        "&:hover": {
          "& .MuiBox-root": {
            width: "100%"
          }
        }
      }}
    >
			<Link
				href={href}
			>
				<Typography
					color={color}
				>
					{ children }
				</Typography>
			</Link>
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

export default EnigmaNavLink
