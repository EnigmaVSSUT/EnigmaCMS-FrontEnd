import React from "react";
import {Button,makeStyles} from "@material-ui/core";
import classes from "./about.module.css";
import about from "./../../../../assets/images/Home/about.svg";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  btn: {
    background: "#1fbe0e",
    color: "white",
    marginTop: "20px",
    padding: "5px 10px",
    borderRadius: "5px",
    '&:hover': {
      background: "#1c8a10",
      textDecoration: "none",
    }
    
  },
  link:{
    textDecoration: "none",
  }
  
})

function About() {
  const cls = useStyles();
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
          Enigma is the official coding Club of VSSUT that emphasizes on developing a strong technology enriched culture
          in the University where students get plethora of opportunities to experiment, learn and empower themselves by 
          exploiting technology for betterment. 
          We at Enigma believe that Technology holds infinite potential to transform the way we perceive things thus opening 
          avenues to create a new unseen world.
          Our team Enigma consists of dedicated tech enthusiasts who persevere day in and out to plan, strategise and shape new
          projects keeping tech at the forefront, finding out advanced and efficient solutions to the prevalent issues in the 
          society, nation and world.
          The team since time inception has been working hard to improvise the programming skills amongst the college students
          giving them enough exposure towards participating in coding contests, Hackathons and other tech events.
          The rich knowledge sharing enivironment at Enigma boosts both personal as well as proffessional development of students.
        </div>
        <Link className={cls.link} to='/aboutus'><Button  className={cls.btn} size="small" variant="outlined" endIcon={<KeyboardArrowRightIcon fontSize='small'/>}>Know More</Button></Link>
        
      </div>
    </div>
  );
}

export default About;
