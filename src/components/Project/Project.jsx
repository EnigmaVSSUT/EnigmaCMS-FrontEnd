import { Typography, Box } from "@material-ui/core";
import React from 'react'
import SlideBox from "./components/SlideBox";
import styles from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./swiper.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);



function Project(props) {

  // const currentIndex = props.id;
  const projects = [
    {
      id: 0,
      projectName: "aaa",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1005/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 1,
      projectName: "bbb",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1006/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 2,
      projectName: "cccc",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1011/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 3,
      projectName: "ddd",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1008/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 4,
      projectName: "eee",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1009/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 5,
      projectName: "aaa",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1005/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 6,
      projectName: "bbb",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1006/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 7,
      projectName: "cccc",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1011/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 8,
      projectName: "ddd",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1008/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 9,
      projectName: "eee",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1009/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 10,
      projectName: "fff",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1010/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 11,
      projectName: "ggg",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1011/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 12,
      projectName: "aaa",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1005/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 13,
      projectName: "bbb",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1006/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 14,
      projectName: "cccc",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1011/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 15,
      projectName: "ddd",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1008/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
    {
      id: 16,
      projectName: "eee",
      shortDescription: "sdfas",
      projectImage: "https://picsum.photos/id/1009/200",
      //get_year_display: "2nd Year",
      repoLink: "2nd Year",
      longDescription: "asdff",
      team: 'the team behind this project was mentored by ABC / This project is done by ABC',
      projectLink: "asdfdf",
    },
  ];

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
