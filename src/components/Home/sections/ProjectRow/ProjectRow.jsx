import React, { useState, useEffect } from "react";
import { Axios } from "../../../../helpers/AxiosInstance";
import { Button, makeStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import classes from "./ProjectRow.module.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import Heading from "../../../Heading";

{/*import android from "../../../../assets/ProjectRowIcons/android.svg";
import database from "../../../../assets/ProjectRowIcons/database.svg";
import java from "../../../../assets/ProjectRowIcons/java.svg";
import ml from "../../../../assets/ProjectRowIcons/ml.svg";
import python from "../../../../assets/ProjectRowIcons/python.svg";
import website from "../../../../assets/ProjectRowIcons/website.svg";*/}

const Row = () => {

  const useStyles = makeStyles({
    btn: {
      background: "#11be79",
      top: "50%",
      marginLeft: "10px",
      color: "white",
      borderRadius: "5px",
      "&:hover": {
        background: "#11be79",
        textDecoration: "none",
        color: "#000",
      },
    },
  });
  const cls = useStyles();

  const [projects, setprojects] = useState([]);
  useEffect(() => {
    Axios({
      method: "GET",
      url: "projects/list",
    }).then((res) => {
      setprojects(res.data);
    });
  }, []);

  return (
    <div>
    <Heading main="Our Projects" sub="Our team members regularly work on innovative projects from every aspect of advanced computing. Take a quick look at our recent projects. "/>
    <section className={classes.cardList}>  
    {projects && projects.map((project) => 
        <Card project={project} />
    )}
    <Link style={{textDecoration:'none', width: '100px'}} to='/projects'>
      <Button  className={cls.btn} size="small" variant="outlined" endIcon={<KeyboardArrowRightIcon fontSize='small'/>}>View All</Button>
    </Link>
    </section>
    
    </div>
  );
};

export default Row;
