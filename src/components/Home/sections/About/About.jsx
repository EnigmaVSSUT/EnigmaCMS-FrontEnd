import React from "react";
import { Button, makeStyles, Container } from "@material-ui/core";
import classes from "./about.module.css";
import about from "./../../../../assets/images/Home/aboutUs.png";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { Card, Grid, CardContent, Typography } from "@mui/material";

const useStyles = makeStyles({
  btn: {
    background: "#11be79",
    color: "white",
    borderRadius: "5px",
    "&:hover": {
      background: "#11be79",
      textDecoration: "none",
      color: "#000",
    },
  },
  text:{
    color:'#fff',
  },

  btnCard:{
    display:'flex',
  
    justifyContent:'center',
  },
  mainGrid:{
    justifyContent:'center',
    alignItems:'center',
  }
});

function About() {
  const cls = useStyles();
  return (
    <Container>
      <div className={classes.common}>
        <h3 className={classes.heading}>About Us</h3>
        <p className={classes.mainContent}>
          Enigma is the official coding club of VSSUT. Enigma aims to establish
          a coding culture in our university by providing a proper platform to
          the budding tech enthusiasts. Since its inception in 2011, Enigma has
          taken under its shade more than 250 students and we stand amongst the
          most active technical clubs in VSSUT. Our aim is to provide students
          learn technical skills to create design and solve real-life
          challenges.
        </p>
        <div className={classes.commonBorder}></div>
      </div>
      <Grid container spacing={3} className={cls.mainGrid}>
        <Grid item xs={12} sm={6}>
          <img className={classes.aboutImg} src={about} alt="Enigma People" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card style={{backgroundColor:'transparent'}}>
            <CardContent>
              <Typography className={cls.text} variant="">
                Enigma is the official coding Club of VSSUT that emphasizes on
                developing a strong technology enriched culture in the
                University where students get plethora of opportunities to
                experiment, learn and empower themselves by exploiting
                technology for betterment. We at Enigma believe that Technology
                holds infinite potential to transform the way we perceive things
                thus opening avenues to create a new unseen world. Our team
                Enigma consists of dedicated tech enthusiasts who persevere day
                in and out to plan, strategise and shape new projects keeping
                tech at the forefront, finding out advanced and efficient
                solutions to the prevalent issues in the society, nation and
                world. The team since time inception has been working hard to
                improvise the programming skills amongst the college students
                giving them enough exposure towards participating in coding
                contests, Hackathons and other tech events. The rich knowledge
                sharing enivironment at Enigma boosts both personal as well as
                proffessional development of students.
              </Typography>
            </CardContent>
          </Card>
          <Card className={cls.btnCard} style={{backgroundColor:'transparent'}}>
            <CardContent>
              <Link style={{textDecoration:'none'}} to='/aboutus'>
                  <Button  className={cls.btn} size="small" variant="outlined" endIcon={<KeyboardArrowRightIcon fontSize='small'/>}>View More</Button>
               </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;

// <div className={classes.container}>
//     <Container>
//   <div className={classes.common}>
//     <h3 className={classes.heading}>About Us</h3>
//     <p className={classes.mainContent}>Enigma is the official coding club of VSSUT. Enigma aims to establish a coding culture in our university by providing a proper platform to the budding tech enthusiasts. Since its inception in 2011, Enigma has taken under its shade more than 250 students and we stand amongst the most active technical clubs in VSSUT. Our aim is to provide students learn technical skills to create design and solve real-life challenges.</p>

//     <div className={classes.commonBorder}></div>
//   </div>
//   <div className={classes.main}>
//
// //       <div className={classes.content}>
//      Enigma is the official coding Club of VSSUT that emphasizes on developing a strong technology enriched culture
//      in the University where students get plethora of opportunities to experiment, learn and empower themselves by
//       exploiting technology for betterment.
//      We at Enigma believe that Technology holds infinite potential to transform the way we perceive things thus opening
//      avenues to create a new unseen world.
//       Our team Enigma consists of dedicated tech enthusiasts who persevere day in and out to plan, strategise and shape new
//      projects keeping tech at the forefront, finding out advanced and efficient solutions to the prevalent issues in the
//       society, nation and world.
//      The team since time inception has been working hard to improvise the programming skills amongst the college students
//      giving them enough exposure towards participating in coding contests, Hackathons and other tech events.
//      The rich knowledge sharing enivironment at Enigma boosts both personal as well as proffessional development of students.
//    </div>
//    

//   </div>
//   </Container>
// </div>
