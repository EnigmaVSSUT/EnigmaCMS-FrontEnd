import { Typography, Box } from "@material-ui/core";
import React from 'react'
import SlideBox from "./components/SlideBox";
import styles from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./swiper.css";

import projects from "./../../_test-data/projects";

function Project(props) {

  // const currentIndex = props.id;

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
      <Typography align="center" variant="h1" className={styles.heading}>
        Projects
      </Typography>
      <div className={styles.hr} />
      <Box p={2} className={styles.swiperContainer}>
        <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
          {...settings}
        >
          {slides}
        </Swiper>
      </Box>
    </div>
  );
}

export default Project
