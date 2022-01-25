import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import gdsc from '../../../assets/images/colab/1.png'
import gfg from '../../../assets/images/colab/2.png'
import he from '../../../assets/images/colab/4.png'
import cc from '../../../assets/images/colab/3.png'
const useStyles = makeStyles({
    grid:{
        // border:'1px solid red',
        justifyContent:'space-around',
        marginBottom:'20px',
        marginTop:'15px',

    },
    desc:{
        color:'#fff',
    },
    heading:{
        marginTop: '30px',
        color:'#35ff1f', 
    },
    title:{
        color: "#35ff1f",
        letterSpacing: "3px",
        fontSize: '25px'  
    }

})
const Colab = () => {
    const classes = useStyles();
    const community = [
        {title:'GDSC', desc:'GDSC is a global network of over 1,000,000 students and professionals who are committed to improving the lives of underrepresented groups in the world.', img:gdsc},
        {title:'HackerEarth', desc:'The HackerEarth Campus Ambassador Program is a platform for students who are passionate about programming, to start and run an active programming club in their college. A HackerEarth Campus Ambassador is a leader with a keen interest in starting and building a programming community.', img:he},
        {title:'CodeChef', desc:'CodeChef VSSUT is an initiative for the geeks who share a common love for Computational Problem Solving. It is a non-commercial organization with a goal to provide a platform for programmers & developers everywhere to meet, compete and have fun. We host exciting contests frequently and post content to sharpen their coding skills.', img:cc},
        {title:'Geeks for Geeks', desc:'GeeksForGeeks has started an official student chapter in VSSUT. It hosts many programming contests, hackathons and events for the university student helping students hone their coding skills and prepare them for the placement scenario. Students excelling in these contests are rewarded with various GeeksForGeeks goodies and voucher.', img:gfg},

    ]

    return (
        <>
        <Typography variant="h4" align="center" className={classes.heading}>Collaborations</Typography>
        <Grid className={classes.grid} container spacing={3}>
            {community.map((item) => (
                <Grid item>
                  <Card sx={{ maxWidth: 345,backgroundColor: "#17141d" }} elevation={3} >
                       <CardActionArea>
                 <CardMedia
                 component="img"
                 height="140"
                 image={item.img}
                 alt="logo"
               />
               <CardContent>
                 <Typography className={classes.title} gutterBottom variant="" component="div">
                  {item.title}
                 </Typography>
                 <Typography  className={classes.desc} variant="body2" >
                  {item.desc}
                 </Typography>
               </CardContent>
               </CardActionArea>
               </Card>
               </Grid>
            ))}
         </Grid>
        </>
        
       
     
    )
}

export default Colab
