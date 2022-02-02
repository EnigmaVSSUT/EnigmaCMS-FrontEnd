import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import classes from "./events.module.css";
// import FormModal from "./Form";
import { Axios } from "../../helpers/AxiosInstance";
import { Box, Tab, Tabs, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
//import { Typography } from "@mui/material";
// import { TabPanel } from "@material-ui/lab";
function Events() {
  //const [open, setOpen] = useState(false);
  const [upComing, setUpComing] = useState([]);
  const [current, setCurrent] = useState([]);
  const [past, setPast] = useState([]);
  const [value, setValue] = useState("upcoming");
  useEffect(() => {
    Axios({
      method: "GET",
      url: "events/list/?type=upcoming",
    }).then((res) => {
      setUpComing(res.data);
    });
    Axios({
      method: "GET",
      url: "events/list/?type=current",
    }).then((res) => {
      setCurrent(res.data);
    });
    Axios({
      method: "GET",
      url: "events/list/?type=past",
    }).then((res) => {
      setPast(res.data);
    });
  }, []);

  const header = [
    {
      mainHeader: "Upcoming Events",
      text: "Elevate your knowledge by registering for our upcoming events",
    },
    {
      mainHeader: "Current Events",
      text: "Our Ongoing evnets are here to help you",
    },
    {
      mainHeader: "Past Events",
      text: "Check out our past events",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#35ff1f",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/*tabs -container*/}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ bgcolor: "background" }}>
            <Tabs value={value} onChange={handleChange} centered>
              {/* <Tab label="Item One" /> */}
              <Tab sx={{ margin: 1 }} value="upcoming" label="Upcoming" />
              <Tab sx={{ margin: 1 }} value="current" label="Current" />
              <Tab sx={{ margin: 1 }} value="past" label="Past" />
            </Tabs>
          </Box>
          <div hidden={value !== "upcoming"}>
            <div align="center" className={classes.upcoming}>
              <p align="center" className={classes.mainContent}>
                {header[0].text}
              </p>
              <div className={classes.commonBorder}></div>
              {upComing && upComing.map((event) => <EventCard event={event} />)}
            </div>
          </div>
          <div hidden={value !== "current"}>
            <div align="center" className={classes.upcoming}>
              <p align="center" className={classes.mainContent}>
                {header[1].text}
              </p>
              <div className={classes.commonBorder}></div>
              {current && current.map((event) => <EventCard event={event} />)}
            </div>
          </div>
          <div hidden={value !== "past"}>
            <div align="center" className={classes.upcoming}>
              <p align="center" className={classes.mainContent}>
                {header[2].text}
              </p>
              <div className={classes.commonBorder}></div>
              {past && past.map((event) => <EventCard event={event} />)}
            </div>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Events;
