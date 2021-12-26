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

const Alumin = () => {
 const [alumnai, setalumnai] = useState([]);

const classes = useStyles();

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
   
    Axios({
      method: "GET",
      url: `members/member-list?year_of_passing=${year}`,
    }).then((res) => {
      setalumnai(res.data);
    });
    console.log("STUDENTS:",  alumnai);
  }, []);
    return (
        <div>
     <Heading main="Our Team" sub="Meet our team" />
     <Typography align='center'>
     <ButtonGroup  className={classes.btn}>
        <Button><Link to='/team'>Current Team</Link></Button>
        <Button><Link to='/team/alumnai'>Alumnai Team</Link></Button>
      </ButtonGroup>
      </Typography>
     
      <Row year={alumnai} heading="Alumnai" />
        </div>
    )
}

export default Alumin
