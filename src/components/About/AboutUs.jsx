import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import About from './components/About'
import Achievements from './components/Achievements'
import Colab from './components/Colab'
const useStyles = makeStyles({
    root:{
        textAlign: 'center',
        margin: '60px auto 20px'
    },
    heading:{
        marginBottom: '20px',
        color:'#35ff1f',
        
    }
})

const AboutUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h3"  className={classes.heading}>About Us</Typography>
            <About />
            <Typography variant="h4"  className={classes.heading}>Colaborations</Typography>
            <Colab />
            <Typography variant="h4"  className={classes.heading}>Achievements</Typography>
            <Achievements />
        </div>
    )
}

export default AboutUs
