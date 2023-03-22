import { AppBar, Stack, Typography } from "@mui/material"
import Image from "next/image"

const Header = () => {
	return (
		<AppBar
			position="sticky"
		>
			<Stack
				direction='row'
				borderBottom='1px solid'
				borderColor='divider'
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

export default Header
