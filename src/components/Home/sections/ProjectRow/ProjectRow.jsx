import React from "react";
import classes from "./ProjectRow.module.css";
import Card from "./Card";
import Heading from "../../../Heading";

import android from "../../../../assets/ProjectRowIcons/android.svg";
import database from "../../../../assets/ProjectRowIcons/database.svg";
import java from "../../../../assets/ProjectRowIcons/java.svg";
import ml from "../../../../assets/ProjectRowIcons/ml.svg";
import python from "../../../../assets/ProjectRowIcons/python.svg";
import website from "../../../../assets/ProjectRowIcons/website.svg";

const Row = () => {
  return (
    <div>
    <Heading main="Our Projects" sub="Our team members regularly work on innovative projects from every aspect of advanced computing. Take a quick look at our recent projects. "/>
    {/* <h1 >Our Projects</h1>
    <p >Our team members regularly work on innovative projects from every aspect of advanced computing. Take a quick look at our recent projects. </p> */}
    <section className={classes.cardList}>
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={java} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={java} title={"React Animating Rows"} />
      <Card logo={database} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={database} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={website} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={website} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
    </section>
    </div>
  );
};

export default Row;
