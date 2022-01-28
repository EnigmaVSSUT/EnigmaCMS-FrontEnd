import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import classes from "./events.module.css";
import FormModal from "./Form";
import { Axios } from "../../helpers/AxiosInstance";
function Events() {
  const [open, setOpen] = useState(false);
  const [upComing, setUpComing] = useState([]);
  const [current, setCurrent] = useState([]);
  const [past, setPast] = useState([]);
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
    }
]
  return (
    <div>
      <FormModal handeClose={() => setOpen(false)} open={open} />
      <div className={classes.common}>
        <h3 className={classes.heading}>{header[0].mainHeader}</h3>
        <p className={classes.mainContent}>{header[0].text}</p>
        <div className={classes.commonBorder}></div>
      </div>
      <div className={classes.upcoming}>
      {upComing && upComing.map((event) => <EventCard event={event} />)}
      </div>
      <div className={classes.common}>
        <h3 className={classes.heading}>{header[1].mainHeader}</h3>
        <p className={classes.mainContent}>{header[1].text}</p>
        <div className={classes.commonBorder}></div>
      </div>
      <div className={classes.upcoming}>
      {current && current.map((event) => <EventCard event={event} />)}
      </div>

      {past && 
      <> 
      <div className={classes.common}>
        <h3 className={classes.heading}>{header[2].mainHeader}</h3>
        <p className={classes.mainContent}>{header[2].text}</p>
        <div className={classes.commonBorder}></div>
      </div>
      <div className={classes.upcoming}>
       {past.map((event) => <EventCard event={event} />)}
      </div>
      </>
      }

    </div>
  );
}

export default Events;
