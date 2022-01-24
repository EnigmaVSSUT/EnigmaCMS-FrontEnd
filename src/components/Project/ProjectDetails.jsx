import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Axios } from "../../helpers/AxiosInstance";
import Heading from "../Heading/index";
import { makeStyles } from "@material-ui/core/styles";
import { FiGithub, FiLink } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";

const useStyles = makeStyles({
  txt: {
    color: "#fff",
    fontSize: "18px",
  },
  poster: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  },
  imgCont: {
    // border: "1px solid red",
    padding: "10px",
  },
  mainCont: {
    // border: "1px solid red",
    padding: "10px",
    margin: "10px",
  },
  cardCont: {
    // border: "1px solid red",
    padding: "10px",
  },
  card: {
    // border: "1px solid red",
    marginTop: "10px",
  },
  span: {
    color: "#35ff1f",
    letterSpacing: "2px",
  },
  buttons: {
    backgroundColor: "#17141d",
    elevation: 5,
    // border: "1px solid red",
    boxShadow: "-1rem 0 3rem #000",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    padding: "10px",
  },
  iconBtn: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn:{
    border: "1px solid #35ff1f",
    borderRadius: "12px",
    color: "white", 
    padding: "5px 10px",
    textTransform: "none",
    '&:hover': {
      background: "#35ff1f",
        color: "#000",
    }
  }
});

const ProjectDetails = () => {
  const cls = useStyles();
  const { slug } = useParams();
  const [project, setProject] = useState([]);
  useEffect(() => {
    Axios({
      method: "GET",
      url: `projects/detail/${slug}`,
    }).then((res) => {
      setProject(res.data);
    });
  }, []);

  return (
    <Container>
      <Heading main={project.name} />
      <Grid
        className={cls.mainCont}
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid className={cls.imgCont} item xs={12} sm={6}>
          <img className={cls.poster} src={project.image} alt="" />
        </Grid>
        <Grid className={cls.cardCont} item xs={12} sm={6}>
          <Card
            className={cls.card}
            elevation={5}
            style={{ backgroundColor: "#17141d" }}
          >
            <CardContent>
              <Typography variant="" className={cls.txt}>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={cls.card}
            elevation={5}
            style={{ backgroundColor: "#17141d" }}
          >
            <CardContent>
              <Typography variant="body1" className={cls.txt}>
                <span className={cls.span}> Project Duration : </span>
                {project.start_date} - {project.end_date}
              </Typography>
            </CardContent>
          </Card>
             <Card
            className={cls.card}
            elevation={5}
            style={{ backgroundColor: "#17141d" }}
            >
            <CardContent className={cls.iconBtn}>
                {project.repository_link != '' && <Button
                className={cls.btn}
                startIcon={<FiGithub />}
                variant="outlined"
                href={project.repository_link}
                >
                Repo link
                </Button>}
                {project.project_link != '' &&  <Button 
                  className={cls.btn}
                startIcon={<FiLink />} 
                variant="outlined"
                    
                href={project.project_link}
                    >
                View Project
                </Button>}
            </CardContent>
            </Card>
         <Card
        className={cls.card}
        elevation={5}
        style={{ backgroundColor: "#17141d" }}
        >
        <CardContent>
            <Typography variant="body1" className={cls.txt}>
            <span className={cls.span}> Tech Stack : </span>
            {project.tech_stack}
            </Typography>
        </CardContent>
        </Card>
          <div className={cls.buttons}>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <Button
                className={cls.btn}
                startIcon={<IoIosArrowBack />}
                variant="outlined"
               
              >
                Go Back
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectDetails;
