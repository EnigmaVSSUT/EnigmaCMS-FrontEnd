import React from "react";
import classes from "./Row.module.css";
import Card from "./Card";

import android from "../../assets/ProjextRowIcons/android.svg";
import database from "../../assets/ProjextRowIcons/database.svg";
import java from "../../assets/ProjextRowIcons/java.svg";
import ml from "../../assets/ProjextRowIcons/ml.svg";
import python from "../../assets/ProjextRowIcons/python.svg";
import website from "../../assets/ProjextRowIcons/website.svg";

const Row = () => {
  return (
    <section className={classes.cardList}>

      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={java} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={database} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={database} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={java} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={database} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={database} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />

    </section>
  );
};

export default Row;
