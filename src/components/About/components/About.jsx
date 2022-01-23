import {
  makeStyles,
  Typography,
  Container,
  Grid,
  Card,
  Paper,
  Divider,
} from "@material-ui/core";
import { CardContent } from "@mui/material";
import React from "react";
import about from "./../../../assets/images/Home/aboutUs.png";

const useStyles = makeStyles({
  abtImg: {
    objectFit: "cover",
    maxWidth: "100%",
  },
  card:{
    padding:'10px',
    // border:'1px solid red',
    margin:'10px 10px',
    backgroundColor: "#17141d",
    // boxShadow: "5px 5px 5px #888888",
  },
  content:{
    color:'#fff',
    textAlign:'justify',
  },
  vision:{
    color:'#35ff1f',
  }
});
const About = () => {
  const classes = useStyles();
  return (
    <Container>
     
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12} sm={6}>
            <img className={classes.abtImg} src={about} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className={classes.card}>
              <CardContent >
              <Typography variant="body1" className={classes.content}>
                In today's rapidly changing environment programming skills are
                essential tools that can be utilized and incorporated into
                various fields and domains. Hence, it becomes absolutely
                essential to equip our minds with such skills. Enigma aims to
                establish a coding culture on our campus. Ever since its
                inception in 2011 , the coding club has taken under its shade
                more than 250 students and we stand amongst the most active
                technical clubs in VSSUT.
              </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent >
              <Typography className={classes.vision} variant="h6">Our Vission</Typography>
                <Typography variant="body1" className={classes.content}>
                  Enigma is for students who are curious problem solvers and
                  responsible team players. Enigma conducts regular informative
                  sessions, events, and workshops to enable attendees to upskill
                  themselves. Our members are currently working on innovative
                  projects from every aspect of advanced computing, and have
                  worked with several corporations so as to educate its
                  participants with modern-day advancements and innovations in
                  technology. We also have a wide and supportive alumni base who
                  are extremely well placed in tech giants around the globe.
                  Participating in programming challenges is a part of our club's
                  daily routine and we provide wide scope to everyone willing to
                  participate in coding contests across the globe.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      
    </Container>
  );
};

export default About;



{/*  */}