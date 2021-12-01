import { Box } from "@material-ui/core";
import React from "react";
import SlideBox from "./components/SlideBox";
import styles from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./swiper.css";
import Heading from "../Heading";

import projects from "./../../_test-data/projects";

function Project(props) {
  const { cardId } = props.match.params;

  const settings = {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
  };

  const slides = [];
  const len = projects.length;
  for (let i = 0; i < len; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <SlideBox project={projects[i]} />
      </SwiperSlide>
    );
  }

  return (
    <div className={styles.projectRoot}>
      <div>
      <Heading main="Projects" sub="Let's have a look at some of our projects!!" />
      </div>
      <Box p={2} className={styles.swiperContainer}>
        <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => cardId && swiper.slideToLoop(parseInt(cardId), 300)}
          {...settings}
        >
          {slides}
        </Swiper>
      </Box>
    </div>
  );
}

export default Project;
