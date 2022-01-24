import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import About from './components/About'
import Achievements from './components/Achievements'
import Colab from './components/Colab'
const useStyles = makeStyles({
    root:{
        textAlign: 'center',
        margin: '60px auto 20px'
    },
    heading:{
        margin: '10px',
        color:'#35ff1f',
    }
})

const AboutUs = () => {
    const classes = useStyles();
    return (
        <Container>
        <div className={classes.root}>
            <Typography variant="h3"  className={classes.heading}>About Us</Typography>
            <About />
            {/* <Typography variant="h4"  className={classes.heading}>Collaborations</Typography> */}
            <Colab />
            <Typography variant="h4"  className={classes.heading}>Achievements</Typography>
            <Achievements />
        </div>
        </Container>
    )
}

export default AboutUs
