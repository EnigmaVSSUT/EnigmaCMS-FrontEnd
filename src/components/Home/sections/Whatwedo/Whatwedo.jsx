import React from "react";
import { Container } from "@material-ui/core";
import classes from "./whatwedo.module.css";
import  {GiCyberEye} from "react-icons/gi";
import { FaMobileAlt,FaGamepad, FaLaptopCode, FaVrCardboard, FaGlobe, FaRegImage, FaBrain } from "react-icons/fa";

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
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaLaptopCode style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "Competitive Programming",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaBrain style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "AI/ML",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaMobileAlt style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "App Devlopment",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaVrCardboard style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "AR/VR",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaRegImage style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "UI/UX",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 7,
      icon: <FaGamepad style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "Game Development",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 8,
      icon: <GiCyberEye style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "Cyber Security",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
  ]);
  return (
    <div className={classes.container}>
      <div className={classes.common}>
        <Container>
        <h3 className={classes.heading}>{header.mainHeader}</h3>
        </Container>
        <p className={classes.mainContent}>{header.mainText}</p>
        <h1 className={classes.mainHeader}>{header.subHeading}</h1>
        <p className={classes.mainContent}>{header.text}</p>
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
