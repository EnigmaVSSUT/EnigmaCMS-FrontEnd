import React from "react";

import classes from "./whatwedo.module.css";
import  {GiCyberEye} from "react-icons/gi";
import { FaMobileAlt,FaGamepad, FaLaptopCode, FaVrCardboard, FaGlobe, FaRegImage, FaBrain } from "react-icons/fa";
import { Container } from "@mui/material";

export default function Whatwedo() {
  const [header] = React.useState({
    mainHeader: "What We Do",
    mainText:"We regularly conduct workshops and tech-sessions to help students get started with coding.Our team regularly works on projects from various domains. Every year,our team members participate and achieve qualifications in hackathons and international programming contests such as ICPC,Google Code Jam and many more.",
    text: "These are the domains we work on.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGlobe style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "Web Development",
      text: "Web development refers to the creation, and maintenance of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.",
    },
    {
      id: 2,
      icon: <FaLaptopCode style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "Competitive Programming",
      text: "Competitive programming is solving well-defined problems by writing computer programs under specified limits and conditions as per the problem.",
    },
    {
      id: 3,
      icon: <FaBrain style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "AI/ML",
      text: "Artificial intelligence (AI) is the intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans and Machine learning (ML) is the study of computer algorithms that can improve automatically through experience and by the use of data.",
    },
    {
      id: 4,
      icon: <FaMobileAlt style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "App Devlopment",
      text: "App Development is the process in which developers create an application to be used on smartphones, tablets and other mobile devices.",
    },
    {
      id: 5,
      icon: <FaVrCardboard style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "AR/VR",
      text: "Augmented Reality/Virtual Reality is a method by which we can alter our real world by adding some digital elements to it. ",
    },
    {
      id: 6,
      icon: <FaRegImage style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "UI/UX",
      text: "The User Interface or UI is the graphical layout of an application consisting of buttons,images , text and anything that the user interacts with and UX or User Experience is the experience of the user while dealing with the UI elements.",
    },
    {
      id: 7,
      icon: <FaGamepad style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "Game Development",
      text: "Game Development is the overall process of creating a video game by using components such as Story, Characters, Audio, Art, Lighting, etc.",
    },
    {
      id: 8,
      icon: <GiCyberEye style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "Cyber Security",
      text: "Cyber Security is the practice of protecting computers, mobile devices, Servers, electronic Systems, networks, and data from malicious attacks.",
    },
  ]);
  return (
    <div className={classes.container}>
      <div className={classes.common}>
        <Container>
        <h3 className={classes.heading}>{header.mainHeader}</h3>
        <p className={classes.mainContent}>{header.mainText}</p>
        <h1 className={classes.mainHeader}>{header.subHeading}</h1>
        <p className={classes.mainContent}>{header.text}</p>
        </Container>
        <div className={classes.commonBorder}></div>
      </div>

      <div className={classes.card__wrapper}>
        {state.map(info => (
          <div key={info.id} className={classes.services__box}>
            {info.icon}
            <div className={classes.services__boxheader}>{info.heading}</div>
            <div className={classes.services__boxheader} style={{ fontFamily: "sans-serif", fontSize: 14 }}>
              {info.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
