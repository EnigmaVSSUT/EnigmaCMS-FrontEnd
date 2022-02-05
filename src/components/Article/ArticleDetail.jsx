import { Container } from "@material-ui/core";
import { Grid, Card, CardContent,CardMedia, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../../helpers/AxiosInstance";
import Heading from "../Heading/index";
import "./quill.css";

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
      <Heading main={article.name} sub={article.description} />
      <Grid container>
        <Grid item xs={12}>
          <Card style={{ backgroundColor: "#17141d" }}>
            <CardContent>
              <Typography
                variant="body1"
                compoent="p"
                style={{ color: "#fff" }}
              >
                <div
                  className="blog_content ql-editor"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                ></div>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticleDetail;
