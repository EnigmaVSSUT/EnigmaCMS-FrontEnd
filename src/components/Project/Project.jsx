import { Typography, Box } from "@material-ui/core";
import React, { useEffect } from "react";
import SlideBox from "./components/SlideBox";
import styles from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./swiper.css";

import projects from "./../../_test-data/projects";

function Project(props) {
  const { cardId } = props.match.params;
  useEffect(() => {
    // transform: translate3d(-11900px, 0px, 0px)
    document.querySelectorAll(".swiper-wrapper").forEach(SwWrapper => {
      const str1 = SwWrapper.style.transform.slice(12);
      const currentXtranslate = str1.slice(0, str1.indexOf("px"));

      const card = SwWrapper.querySelector(".swiper-slide");
      const cardWidth = parseInt(card.getBoundingClientRect().width + parseInt(card.style.marginRight.slice(0, 2)));

      setTimeout(() => {
        SwWrapper.style.transform = `translate3d(${currentXtranslate - cardWidth * cardId}px, 0px, 0px)`;
      }, 1000);
    });
  }, [cardId]);

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

export default Project;
