import React, { useState, useEffect } from "react";
import { Axios } from "../../../../helpers/AxiosInstance";
import classes from "./ProjectRow.module.css";
import Card from "./Card";
import Heading from "../../../Heading";

{/*import android from "../../../../assets/ProjectRowIcons/android.svg";
import database from "../../../../assets/ProjectRowIcons/database.svg";
import java from "../../../../assets/ProjectRowIcons/java.svg";
import ml from "../../../../assets/ProjectRowIcons/ml.svg";
import python from "../../../../assets/ProjectRowIcons/python.svg";
import website from "../../../../assets/ProjectRowIcons/website.svg";*/}

const Row = () => {

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
    </section>
    </div>
  );
};

export default Row;
