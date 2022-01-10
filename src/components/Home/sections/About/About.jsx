import React from "react";
import classes from "./about.module.css";
import about from "./../../../../assets/images/Home/about.svg";

function About() {
  return (
    <div className={classes.container}>
      <div className={classes.common}>
        <h3 className={classes.heading}>About Us</h3>
        <p className={classes.mainContent}>Who we are</p>
        <div className={classes.commonBorder}></div>
      </div>
      <div className={classes.main}>
        <img className={classes.aboutImg} src={about} alt="Enigma People" />
        <div className={classes.content}>
          Enigma is the official coding club of VSSUT. Enigma aims to establish a coding culture in our university by providing a proper platform to the budding tech enthusiasts. Since its inception in 2011, Enigma has taken under its shade more than 250 students and we stand amongst the most active technical clubs in VSSUT. Our aim is to provide students learn technical skills to create design and solve real-life challenges.
        </div>
      </div>
    </div>
  );
}

export default About;
