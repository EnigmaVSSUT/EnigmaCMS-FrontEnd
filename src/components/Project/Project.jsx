import React, { useState, useEffect } from "react";
import { Axios } from "../../helpers/AxiosInstance"; 
import styles from "./Project.module.css";
import Card from "./Card";
import Heading from "../Heading";

function Project(){

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
    <main className={styles.section}>
      <section className={styles.container}>
      <Heading main="Our Projects" sub="Our team members regularly work on innovative projects from every aspect of advanced computing. Take a quick look at our recent projects. "/>      
        <div className={styles.layout}>
        {projects && projects.map((project) => <Card project={project} />)}
        </div>
      </section>
    </main>
  );
};


export default Project;
