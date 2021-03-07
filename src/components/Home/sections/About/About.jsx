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
          Enigma-The Coding Club is the place to take that interest in technology and turn it into a productive skill.
          We aim to reach each and every student passionate about programming and guide them through their coding
          adventure. Enigma is for everyone regardless of their branch or current level of knowledge. We believe
          learning is more fun and efficient when we work a team. Enigma is for students who are curious problem
          solvers, responsible and team players. Our team consists of highly efficient members who regularly work on
          innovative projects from every aspect of advanced computing. For a programmer, challenges are a part of their
          lives daily routine.Enigma appreciates this habit by providing unlimited scope to participate in coding
          challenges held across the country. Since 2011,Enigma has over 200 students and mentors dedicated to establish
          coding culture in VSSUT.We also have a wide and supportive alumni base which are extremely well placed in tech
          giants around the globe and are ever present in the workings of the club.
        </div>
      </div>
    </div>
  );
}

export default About;
