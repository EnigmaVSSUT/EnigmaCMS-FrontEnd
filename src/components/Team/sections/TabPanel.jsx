import { Box } from "@material-ui/core";
import React from "react";
import style from "./../style.module.css";
import SlideCard from "./../components/SlideCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./../swiper.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

function TabPanel(props) {
  const settings = {
    loop:true,
    slidesPerView: "auto",
    spaceBetween: 10,
    autoplay:{
      delay:3000,
    }
  };

  const { profiles, value, index } = props;
  const slides = [];
  const len = profiles.length;
  for (let i = 0; i < len + 1; i = i + 2) {
    let profile1 = profiles[i];
    let profile2 = profiles[i + 1];
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <SlideCard profile1={profile1} profile2={profile2 ? profile2 : null} />
      </SwiperSlide>
    );
  }

  return (
    <div hidden={value !== index} id={`tabpanel-${index}`} className={style.tabPanel}>
      {value === index && (
        <Box p={2} className={style.swiperContainer}>
          <Swiper
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
            {...settings}
          >
            {slides}
          </Swiper>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
