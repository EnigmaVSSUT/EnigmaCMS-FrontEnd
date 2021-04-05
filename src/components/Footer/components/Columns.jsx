import React from "react";
import classes from "./column.module.css";
const columns = (props) => {
  // Object.keys(props.links).map((link) => console.log(props.links[link]));
  return (
    <div className={classes.column}>
      <h4>{props.title}</h4>
      <ul className={classes.links}>
        {Object.keys(props.links).map(link => (
          <li key={link}>
            <a href={props.links[link]}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default columns;
