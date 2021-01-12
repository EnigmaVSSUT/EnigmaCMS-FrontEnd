import React from "react";
import { Card } from "@material-ui/core";
import useStyle from "./../style.js";


function Description() {
  const classes = useStyle();
  return (
    <Card  className={classes.card}>
      <h1>Description</h1>
    </Card>
  );
}

export default Description;
