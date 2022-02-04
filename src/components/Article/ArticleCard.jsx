import React from 'react';
import {Card,CardContent,Typography,CardMedia,CardActions,Button} from '@material-ui/core';
const ArticleCard = ({item}) => {
  return (
      <>
       <Card>
        <CardMedia
            component="img"
            height="100%"
            image={item.img}
            alt="Article"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {item.title}
            </Typography>
        </CardContent>
        <CardActions>
             <Button variant='outlined' size="small">View Article</Button>
        </CardActions>

       </Card>
      </>
  )
};

export default ArticleCard;
