import React from "react";
import classes from "./Card.module.css";

const Card = ({project}) => {
  return (
    <article className={classes.card}>
      <header className={classes.header}>
        <h2>{project.name}</h2>

      </header>
      <img src={project.image} alt="" />

      {/*<div className={classes.author}>
        <a className={classes.avatar} href="#">
          <img src={props.logo} />
        </a>

        <svg className={classes.halfcircle} viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>

        <div className={classes.authorName}>
          <div className={classes.authorNamePrefix}>Author</div>
          Durgesh N. Birmiwal
        </div>
        </div>*/}

        <div className={classes.authorName}>
          {project.description}
        </div>
    </article>
  );
};

export default Card;
