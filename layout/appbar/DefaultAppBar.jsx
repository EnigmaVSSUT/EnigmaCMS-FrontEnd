import { AppBar, Stack, Typography } from "@mui/material"
import Image from "next/image"

const DefaultAppBar = () => {
	return (
		<AppBar
			color="white"
		>
			<Stack
				direction='row'
				borderBottom='1px solid'
				justifyContent='center'
				alignItems='center'
				padding='10px 24px'
			>
				
				<Stack
					direction='row'
					gap='12px'
					alignItems='center'
				>
					<Image
						src='/logo/enigma_contained.png'
						alt="Enigma VSSUT logo"
						width={42}
						height={42}
					/>
					<Typography>
						Enigma VSSUT
					</Typography>
				</Stack>
			</Stack>
		</AppBar>
	)
}

export default DefaultAppBar