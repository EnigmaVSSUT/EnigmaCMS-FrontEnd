import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  title: {
    color: "#35ff1f",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: "1px",
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
});
const ArticleCard = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <Card style={{ backgroundColor: "#17141d" }}>
        <CardMedia
          component="img"
          height="100%"
          image={item.img}
          alt="Article"
        />
        <CardContent>
          <Typography variant="h5" component="" className={classes.title}>
            {item.title}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Link
            to={`/articles/${item.title}`}
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
