import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  Chip
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Stack } from "@mui/material";
const useStyles = makeStyles({
  title: {
    color: "#35ff1f",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: "1px",
    border: "1px solid #red",
  },
  btn: {
    color: "#35ff1f",
    borderRadius: "10px",
    marginBottom: "10px",
    borderColor: "#35ff1f",
    "&:hover": {
      backgroundColor: "#35ff1f",
      color: "#000",
    },
  },
  stack:{
    display:'flex',
    justifyContent:'space-between',
    // border:'1px solid #35ff1f',
  }
});
const ArticleCard = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <Card style={{ backgroundColor: "#17141d" }}>
        <CardMedia
          component="img"
          height="100%"
          image={item.image}
          alt="Article"
        />
        <CardContent>
          <Stack direction='row' className={classes.stack}>

          <Typography variant="h5" component="" className={classes.title}>
            {item.name}
          </Typography>
          <Chip label='web' variant="outlined" style={{borderColor:'#35ff1f',color:'#35ff1f'}} />
          </Stack>
          {/* <Typography variant="body2" style={{color:'#fff'}} component="p">
            {item.description}
          </Typography> */}
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Link
            to={`/articles/${item.slug}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" size="small" className={classes.btn}>
              View Article
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default ArticleCard;
