import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <article className={classes.card}>
      <header className={classes.header}>
        <a href={props.link}>
          <h2>{props.title}</h2>
        </a>
      </header>

      <div className={classes.author}>
        <div className={classes.avatar}>
          <img src={props.logo} alt="" />
        </div>

        <svg className={classes.halfcircle} viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>

        <div className={classes.authorName}>
          <div className={classes.authorNamePrefix}>Author</div>
          Durgesh N. Birmiwal
        </div>
      </div>
    </article>
  );
};

export default Card;
