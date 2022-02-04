import React from 'react';
import Heading from '../Heading/index'
import ArticleCard from './ArticleCard';
import {Container, Grid} from '@mui/material'
import { makeStyles } from '@material-ui/styles';

const useStyles  =  makeStyles({
    main:{
        border:'1px solid red',
        padding:'10px'
    },
    item:{
        border:'1px solid red',
        padding:'10px',
        justifyContent:'space-around'

    },
    card:{
        // border:'1px solid red',
        padding:'10px'
    }
})

const Article = () => {
    const classes = useStyles(); 
  const articles = [
      {img:'https://picsum.photos/200',title:"Article 1",id:1},
      {img:'https://picsum.photos/200',title:"Article 2",id:2},
      {img:'https://picsum.photos/200',title:"Article 3",id:3},
      {img:'https://picsum.photos/200',title:"Article 4",id:4},
      {img:'https://picsum.photos/200',title:"Article 5",id:5}
  ]  
  return (
  <Container>
    <Heading main='Articles'/>
        <Grid container className={classes.main} flexDirection='column'>
            <Grid item container xs={12} className={classes.item} flexDirection='row' justifyContent='space-arround'>
                {articles.map((item)=>{
                    return(
                        <Grid item xs={12} md={4} key={item.id} className={classes.card}>
                            <ArticleCard item={item}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
  </Container>
  )
};

export default Article;
