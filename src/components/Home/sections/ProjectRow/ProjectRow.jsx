import React from "react";
import classes from "./ProjectRow.module.css";
import Card from "./Card";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import android from "../../../../assets/ProjectRowIcons/android.svg";
import database from "../../../../assets/ProjectRowIcons/database.svg";
import java from "../../../../assets/ProjectRowIcons/java.svg";
import ml from "../../../../assets/ProjectRowIcons/ml.svg";
import python from "../../../../assets/ProjectRowIcons/python.svg";
import website from "../../../../assets/ProjectRowIcons/website.svg";

import projectsData from "./../../../../_test-data/projects";

const Row = () => {
  const settings = {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0,
  };

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

  const slides = [];
  const len = projectsData.length;
  for (let i = 0; i < len; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <Card
          key={projectsData[i].id}
          id={projectsData[i].id + 1}
          logo={getLogo(projectsData[i].field)}
          title={projectsData[i].projectName}
          link={`/project/${projectsData[i].id}`}
          team={projectsData[i].team}
        />
      </SwiperSlide>
    );
  }

  return (
    <section className={classes.projectSection}>
      <div className={classes.common}>
        <h3 className={classes.heading}>Our Projects</h3>
        <p className={classes.mainContent}>
          Enigma is a storehouse of ideas and innovation where every member is indulged is creating a technology for the
          betterment of society. Have a look at some of those projects!!
        </p>
        <div className={classes.commonBorder}></div>
      </div>
      <div className={classes.cardList + " project-row-slider"}>
        <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log("swiper")}
          {...settings}
        >
          {slides}
        </Swiper>
      </div>
    </section>
  );
};

export default Row;
