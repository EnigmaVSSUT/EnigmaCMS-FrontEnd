import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { Axios } from "./../../helpers/AxiosInstance";
import Heading from "../Heading";
import Row from "./Row.jsx";
import AdministrationCard from "./AdministrationCard";
import AdmRow from "./Adm_row";
import {Typography,ButtonGroup,makeStyles,Button} from '@material-ui/core';
import{Link,} from 'react-router-dom';

const useStyles = makeStyles({
  btn: {
    backgroundColor: ' #30ef1f',
    textColor:'white',
    marginBottom: "20px",
    '&:hover':{
      backgroundColor: '#28a616',
    }
  },
  link:{
    textDecoration: 'none',
    textColor:'#ffffff'
  }
}
);

function Team() {
  const [first, setfirst] = useState([]);
  const [second, setsecond] = useState([]);
  const [third, setthird] = useState([]);
  const [final, setfinal] = useState([]);
  const [alumni, setalumni] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    Axios({
      method: "GET",
      url: `members/member-list?year_of_passing=${year + 1}`,
    }).then((res) => {
      setfinal(res.data);
    });
    Axios({
      method: "GET",
      url: `members/member-list?year_of_passing=${year + 2}`,
    }).then((res) => {
      setthird(res.data);
    });
    Axios({
      method: "GET",
      url: `members/member-list?year_of_passing=${year + 3}`,
    }).then((res) => {
      setsecond(res.data);
    });
    Axios({
      method: "GET",
      url: `members/member-list?year_of_passing=${year + 4}`,
    }).then((res) => {
      console.log(res.data);
      setfirst(res.data);
    });
    Axios({
      method: "GET",
      url: `members/member-list?year_of_passing=${year}`,
    }).then((res) => {
      setalumni(res.data);
    });
    console.log("STUDENTS:", first, second, third, final, alumni);
  }, []);
  return (
    <div>
      <Heading main="Our Team" sub="Meet our team" />
      <Typography align='center'>
     <ButtonGroup  className={classes.btn}>
        <Button><Link className={classes.link} to='/team'>Current Team</Link></Button>
        <Button><Link className={classes.link} to='/team/alumni'>Alumni Team</Link></Button>
      </ButtonGroup>
      </Typography>
      <AdmRow />
      <Row year={final} heading="Final Year" />
      <Row year={third} heading="Pre-Final Year" />
      <Row year={second} heading="Second Year" />
      <Row year={first} heading="First Year" />
    
    </div>
  );
}

export default Team;
