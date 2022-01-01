import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import 
const useStyles = makeStyles({
    root:{
        textAlign: 'center',
        margin: '60px auto 20px'
    },
    heading:{
        borderBottom: '20px',
        color:'#35ff1f',
        
    }
})

const AboutUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h3"  className={classes.heading}>About Us</Typography>
            <Typography variant="subtitle1">more</Typography>
        </div>
    )
}

export default AboutUs
