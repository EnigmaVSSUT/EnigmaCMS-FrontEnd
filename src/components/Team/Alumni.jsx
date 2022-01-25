import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { Axios } from "./../../helpers/AxiosInstance";
import Heading from "../Heading";
import Row from "./Row.jsx";
import {Typography,Button,ButtonGroup,makeStyles} from '@material-ui/core';
import{Link} from 'react-router-dom';

const useStyles = makeStyles({
  btn: {
    backgroundColor: ' #30ef1f',
    textColor:'white',
    marginBottom: "20px",
    '&:hover':{
      backgroundColor: '#28a616',
    }
  }
}
);

const Alumni = () => {
 const [alumni, setalumni] = useState([]);

const classes = useStyles();

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
   
    Axios({
      method: "GET",
      url: `members/member-list?year_of_passing=${year-1}`,
    }).then((res) => {
      setalumni(res.data);
    });
    console.log("STUDENTS:",  alumni);
  }, []);
    return (
        <div>
     <Heading main="Our Team" sub="Meet our team" />
     <Typography align='center'>
     <ButtonGroup  className={classes.btn}>
        <Button><Link  style={{ color: "black", textDecoration: "none" }} to='/team'>Current Team</Link></Button>
        <Button><Link  style={{ color: "black", textDecoration: "none" }} to='/team/alumni'>Alumni Team</Link></Button>
      </ButtonGroup>
      </Typography>
     
      <Row year={alumni} heading="Alumni" />
        </div>
    )
}

export default Alumni
