import { Box } from "@material-ui/core";
import React from "react";
import style from "./../style.module.css";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SlideCard from "./../components/SlideCard";

function TabPanel(props) {
  const { profiles, value, index } = props;
  const slides = [];
  const len = profiles.length;
  for (let i = 0; i < len + 1; i=i+2) {
    let profile1 = profiles[i]
    let profile2 = profiles[i+1];
    slides.push(
      <SlideCard 
        profile1={profile1} 
        profile2={profile2 ? profile2 : null}
        style={{transform:`translateX(-${190*i}px)`}} 
      />
    )
  }

  return (
    <div hidden={value !== index} id={`tabpanel-${index}`} className={style.tabPanel}>
      {value === index && (
        <Box p={2} className={style.swiperContainer}>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
          >
            {slides}
          </Swiper>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
