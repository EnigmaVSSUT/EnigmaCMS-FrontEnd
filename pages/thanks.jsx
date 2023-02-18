import React from 'react'
import IconRocketLaunch from "/components/loc/IconRocketLaunch";
import styles from "../styles/thanks.module.css";
import Link from 'next/link';
import { Button, Typography,Box} from '@mui/material';
import useCursorStore from "@/lib/store/useCursorPositionStore"
const Thanks = () => {
    const toggleHoverState = useCursorStore(state => state.toggleHoverState)
    return (
        <>
            <div className={styles.formDiv}>
                <div className={styles.heading} onMouseEnter={() => toggleHoverState('#ffffff')}
				onMouseLeave={() => toggleHoverState()}>Lift-Off C  <IconRocketLaunch /></div>
                <div className={styles.messageBox}>
                    <h1 className={styles.thanksmessage} onMouseEnter={() => toggleHoverState('#ffffff')}
				onMouseLeave={() => toggleHoverState()}>Thanks for registering!</h1>
                    
                </div>
                <Box sx={{display:"flex",justifyContent:"center",paddingTop:"20px"}}>
                <Link href="/" style={{textDecoration:'none'}}>
				<Button
					variant='contained'
					color='white'
				>
					<Typography
						color='black.main'
					>
						Back to Home
					</Typography>
				</Button>
				</Link>
                </Box>
                <div className={styles.copyThanks}>
                    <p>Enigma VSSUT &copy; 2023 </p>
                </div>
            </div>
        </>
    )
}

export default Thanks