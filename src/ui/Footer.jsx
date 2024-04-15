import { Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material"
import ScrollToTopButton from "./BackToTopButton"

const socialLinks = [
	{
		icon: <Instagram />,
		href: 'https://www.instagram.com/enigma_vssut'
	},
	{
		icon: <LinkedIn />,
		href: 'https://www.linkedin.com/company/enigma-vssut/'
	},
	{
		icon: <Twitter />,
		href: 'https://twitter.com'
	},
]

const Footer = () => {

	const currentYear = new Date().getFullYear();

	const openGmail = () => {
		window.open('mailto:enigma.vssut@gmail.com', '_blank')
	}

	return (
		<Stack
		
			// padding='24px'
			borderTop='1px solid'
			borderColor='divider'
			// bgcolor='background.default'
			sx={{
				background: '#12121290',
				backdropFilter: 'blur(200px)',
				
				padding:"1.6vw"
			}}
			// gap='32px'
		>
			<Stack
				// direction='row'
				// gap='12px'
				
				sx={{flexDirection:{sm:"column",md:"column",lg:"row"},gap:"13px"}}
			>
				<Stack
				
					padding='0.8vw'
					flexGrow={1}
					
				>
					<Stack
					
						direction='row'
						gap='0.8vw'
						alignItems='center'
						
						
						// sx={{alignItems:{md:"center",lg:"flex-start"}}}
					>
						<img
							src='/logo/enigma_contained.png'
							alt="Enigma VSSUT logo"
							width={42}
							height={42}
						/>
						<Typography
							color='text.subtitle'
						>
							Enigma VSSUT <br/>Since 2014
						</Typography>
					</Stack>
				</Stack>
				<Divider 
					orientation='vertical'
					flexItem
				/>
				<Stack
					flexGrow={1}
					
					gap='0.9vw'
					padding='0.9vw'
				>
					<Stack
						direction='row'
						gap='0.5vw'
					>
						{ socialLinks.map(s => (
						
								<a href={s.href}
								target='_blank'
								key={s.href} rel="noreferrer">

								<IconButton
									sx={{
										border: '1px solid',
										borderColor: 'divider'
									}}
									>
									{s.icon}
								</IconButton>
									</a>
						)) }
					</Stack>
					<Stack>
						<Typography
							color='text.body'
						>
							Veer Surendra Sai University of Technology, Burla
						</Typography>
						<Typography
							color='text.body'
						>
							768018
						</Typography>
					</Stack>
					<Typography
						color='text.body'
					>
						+91 6372742772
					</Typography>
				</Stack>
			</Stack>
			<Button
				variant='contained'
				sx={{
					alignSelf: 'center',
					marginTop:"10px",
					marginBottom:"10px"
				}}
				onClick={openGmail}
			>
				Mail Us
			</Button>
			<Stack
				// padding='16px'
				direction='row'
				justifyContent='space-between'
			>
				<Typography
					color='text.body'
				>
					Enigma VSSUT &copy; {currentYear}
				</Typography>
				<ScrollToTopButton />
			</Stack>
		</Stack>
	)
}

export default Footer
