import { Container } from "@material-ui/core";
import { Grid, Card, CardContent,CardMedia, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../../helpers/AxiosInstance";
import Heading from "../Heading/index";

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    Axios({
      method: "GET",
      url: `courses/article-detail/${slug}/`,
    }).then((res) => {
      setArticle(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Container>
      <Heading main={article.name} sub={article.category} />
      <Grid container>
        <Grid item xs={12}>
          <Card style={{backgroundColor: "#17141d"}}>
      
            <CardMedia 
                component="img"
                style={{
                    width: "100%",
                    height: "180px",
                    backgroundSize: "100% 100%",
                }}
                image="https://picsum.photos/600/140"
                alt="banner"
            />
            <CardContent>
              <Typography variant="body1" compoent='p' style={{color:"#fff"}}>
                {article.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticleDetail;
