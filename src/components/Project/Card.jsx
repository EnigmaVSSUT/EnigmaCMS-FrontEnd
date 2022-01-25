import React from "react";
import classNames from "classnames";
import { FiGithub } from "react-icons/fi";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>

        <div className={styles.imageWrapper}>
          <img src={project.image} className={styles.image} alt="" />
        </div>

        <div className={styles.gitWrapper}>
          
          <div className={classNames([styles.git, styles.gitMove])}>
            <FiGithub onClick={() => window.open(project.repository_link)}/>
          </div>

        </div>
      </div>

      <div className={styles.textWrapper}>
        <h1 className={styles.text}>{project.name}</h1>
        <p className={styles.text1}>{project.description}</p>
        <p className={styles.text1}>Tech Stack: {project.tech_stack}</p>
        <div className={styles.buttonDiv}>
        <Link to={`projects/${project.slug}`}>
              <button  className={styles.button}>
                   View More
               </button>
        </Link>
        </div>
        
      </div>

    </div>
  );
};

export default Card;