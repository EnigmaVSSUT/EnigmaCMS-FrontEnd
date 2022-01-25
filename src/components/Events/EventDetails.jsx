import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Axios } from "../../helpers/AxiosInstance";
import { Container, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import classes from "./events.module.css";
import Heading from "../Heading/index";
import RegistrationForm from './RegistrationForm'
import { styled } from "@mui/system";

const useStyles = makeStyles({
  txt: {
    color: "#fff",
    fontSize: "18px",
  },
  poster: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  },
  imgCont: {
    // border: "1px solid red",
    padding: "10px",
  },
  mainCont: {
    // border: "1px solid red",
    padding: "10px",
    margin: "10px",
  },
  cardCont: {
    // border: "1px solid red",
    padding: "10px",
  },
  card: {
    // border: "1px solid red",
    marginTop: "10px",
   
  },
  span: {
    color: "#35ff1f",
    letterSpacing: "2px",
  },
  buttons:{
    backgroundColor: "#17141d",
    elevation: 5,
    // border: "1px solid red",  
    boxShadow: '-1rem 0 3rem #000',
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    padding: "10px",
  }
});

const EventDetails = () => {
  const cls = useStyles();
  const { slug } = useParams();
  const [event, setEvent] = useState({});
  const [form, setForm] = useState(false)
  const handleClose = () => {
    setForm(false)
  }
  const handleOpen = () => {
    setForm(true)
  }

  useEffect(() => {
    // Axios({
    //   method: "GET",
    //   url: 'events/list/'
    // }).then((res) => {
    //   setEvent(res.data[id-1]);
    // });
    Axios({
      method: "GET",
      url:`events/detail/${slug}`
    }).then((res) => {
      setEvent(res.data);
     
    });
    // console.log(slug)
  }, []);


  const StyledButton = styled(Button)({
    backgroundColor: 'transparent',
    borderColor: '#35ff1f',
    color: '#fff',
    borderRadius: 12,
    '&:hover': {
      backgroundColor: '#35ff1f',
      color: '#000',
      borderColor: '#35ff1f'
    }
  })

  return (
    <Container>
      <Heading main={event.name} />
      <Grid
        className={cls.mainCont}
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid className={cls.imgCont} item xs={12} sm={6}>
          <img className={cls.poster} src={event.poster} alt="" />
        </Grid>
        <Grid className={cls.cardCont} item xs={12} sm={6}>
          <Card
            className={cls.card}
            elevation={5}
            style={{ backgroundColor: "#17141d" }}
          >
            <CardContent>
              <Typography variant="" className={cls.txt}>
                {event.description}
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={cls.card}
            elevation={5}
            style={{ backgroundColor: "#17141d" }}
          >
            <CardContent>
              <Typography variant="body1" className={cls.txt}>
                <span className={cls.span}> Event Duration : </span>
                {event.start_date} - {event.end_date}
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={cls.card}
            elevation={5}
            style={{ backgroundColor: "#17141d" }}
          >
            <CardContent>
              <Typography variant="body1" className={cls.txt}>
                <span className={cls.span}> Registration Duration : </span>
                {event.registration_start_date} - {event.registration_end_date}
              </Typography>
            </CardContent>
          </Card>
          <div className={cls.buttons}>
            <StyledButton variant='outlined' onClick={handleOpen}>Registrations Closed</StyledButton>
            <Link to="/events">
              <StyledButton variant='outlined'>Go back</StyledButton>
            </Link>
          </div>
        </Grid>
      </Grid>
      <RegistrationForm open={form} event={event} handleClose={handleClose} />
    </Container>
  );
};

export default EventDetails;
