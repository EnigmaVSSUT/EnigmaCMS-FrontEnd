import { Button, Link, Stack, Typography ,Box} from "@mui/material"
import useCursorStore from "@/lib/store/useCursorPositionStore"
import { RocketLaunch } from "@mui/icons-material"
import { useRouter } from 'next/router'
import WhatshotIcon from '@mui/icons-material/Whatshot';


const Induction = () => {
	const toggleHoverState = useCursorStore(state => state.toggleHoverState)
   const router = useRouter()
    const inductCall = ()=>{
       
  router.push('https://apply.enigmavssut.com/')
    }

	return (
		<Stack
			padding='64px 32px'
		>
			<Stack
				padding='32px'
				borderRadius='32px'
				bgcolor='primary.main'
				gap='20px'
			>
				<Typography
					variant="h6"
                    sx={{fontFamily:'Oxygen'}}
				>
					Registrations Open !
				</Typography>
				<Stack
					onMouseEnter={() => toggleHoverState('#35ff1f')}
					onMouseLeave={() => toggleHoverState()}
				>
					<Typography
						variant='h1'
						component='span'
                        sx={{fontFamily:'Play'}}
					>
						Induction <WhatshotIcon sx={{ fontSize: (theme) => theme.typography.h1.fontSize }} />
					</Typography>
					<Typography
                     sx={{fontFamily:'Comforta'}}>
					Join the Community! <br/>
Enroll in our exciting month-long induction program to be held from 20th March to 14th April. In order to find the best talents, we conduct this program every year in various stages which comprises development, competetive programming, AI/ML and lots more. Students can register, complete different tasks assigned by our team and finally become the part of our Enigma family. 
<br/>
					</Typography>
				</Stack>
				<Box>
				
				<Button
                onClick={inductCall}
					variant='contained'
					color='black'
				>
					<Typography
						color='white.main'
					>
						Enroll
					</Typography>
				</Button>
			
				</Box>
			</Stack>
		</Stack>
	)
}

export default Induction
