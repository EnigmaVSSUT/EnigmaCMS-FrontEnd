import React from "react";
import classes from "./ProjectRow.module.css";
import Card from "./Card";

import android from "../../../../assets/ProjectRowIcons/android.svg";
import database from "../../../../assets/ProjectRowIcons/database.svg";
import java from "../../../../assets/ProjectRowIcons/java.svg";
import ml from "../../../../assets/ProjectRowIcons/ml.svg";
import python from "../../../../assets/ProjectRowIcons/python.svg";
import website from "../../../../assets/ProjectRowIcons/website.svg";

import projectsData from "./../../../../_test-data/projects";

const Row = () => {
  const getLogo = field => {
    return (
      (field === "Web Development" && website) ||
      (field === "Machine Learning" && ml) ||
      (field === "Java" && java) ||
      (field === "Python" && python) ||
      (field === "Backend" && database) ||
      (field === "Android" && android)
    );
  };

  return (
    <section className={classes.projectSection}>
      <div className={classes.common}>
        <h3 className={classes.heading}>Our Projects</h3>
        <p className={classes.mainContent}>These are some of our cool Projects.</p>
        <div className={classes.commonBorder}></div>
      </div>
      <div className={classes.cardList}>
        {projectsData.map(projectObj => {
          return <Card
            logo={getLogo(projectObj.field)}
            title={projectObj.projectName}
            link={`/project/#${projectObj.id}`}
            team={projectObj.team}
          />;
        })}
      </div>
    </section>
  );
};

export default Row;

//website
//java
//android
//database
//ml
//python
