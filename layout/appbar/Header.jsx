import EnigmaLink from "@/components/common/EnigmaLink"
import EnigmaNavLink from "@/components/common/EnigmaNavLink"
import { AppBar, Stack, Typography } from "@mui/material"
import Image from "next/image"

const Header = () => {
	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: '#12121290',
				backdropFilter: 'blur(200px)'
			}}
		>
			<Stack
				direction='row'
				borderBottom='1px solid'
				borderColor='divider'
				justifyContent='center'
				alignItems='center'
				padding='10px 24px'
				gap='16px'
			>				
				<Stack
					direction='row'
					gap='12px'
					alignItems='center'
					flexGrow={1}
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
				<Stack
					direction='row'
					gap='20px'
				>
					<EnigmaNavLink
						href='/events'
					>
						Events
					</EnigmaNavLink>
					<EnigmaNavLink
						href='/projects'
					>
						Projects
					</EnigmaNavLink>
					<EnigmaNavLink
						href='/team'
					>
						Team
					</EnigmaNavLink>
				</Stack>
			</Stack>
		</AppBar>
	)
}

export default Header
