import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    grid:{
        border:'1px solid red',
        justifyContent:'space-around',
        marginBottom:'20px',
    }
})
const Colab = () => {
    const classes = useStyles();
    const community = [
        {title:'GDSC', desc:'GDSC is a global network of over 1,000,000 students and professionals who are committed to improving the lives of underrepresented groups in the world.', img:'https://picsum.photos/140'},
        {title:'HackerEarth', desc:'GDSC is a global network of over 1,000,000 students and professionals who are committed to improving the lives of underrepresented groups in the world.', img:'https://picsum.photos/140'},
        {title:'CodeChef', desc:'GDSC is a global network of over 1,000,000 students and professionals who are committed to improving the lives of underrepresented groups in the world.', img:'https://picsum.photos/140'},
        {title:'Geek for Geeks', desc:'GDSC is a global network of over 1,000,000 students and professionals who are committed to improving the lives of underrepresented groups in the world.', img:'https://picsum.photos/140'},

    ]

    return (
      
        <Grid className={classes.grid} container spacing={3}>
            {community.map((item) => (
                <Grid item>
                  <Card sx={{ maxWidth: 345 }} >
                       <CardActionArea>
                 <CardMedia
                 component="img"
                 height="140"
                 image={item.img}
                 alt="green iguana"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                  {item.desc}
                 </Typography>
               </CardContent>
               </CardActionArea>
               </Card>
               </Grid>
            ))}
         </Grid>
       
     
    )
}

export default Colab
