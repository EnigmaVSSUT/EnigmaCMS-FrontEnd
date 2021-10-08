import React, { useState } from "react";
import EventCard from "./EventCard";
import classes from "./events.module.css";
import FormModal from "./Form";
function Events() {
  const [open, setOpen] = useState(false);
  const header = {
    mainHeader: "Upcoming Events",
    text: "Elevate your knowledge by registering for our upcoming events",
  };
  return (
    <div>
      <FormModal handeClose={() => setOpen(false)} open={open} />
      <div className={classes.common}>
        <h3 className={classes.heading}>{header.mainHeader}</h3>
        <p className={classes.mainContent}>{header.text}</p>
        <div className={classes.commonBorder}></div>
      </div>
      <div className={classes.upcoming}>
        <EventCard onRegisterClick={() => setOpen(true)} />
      </div>
      <div className={classes.common}>
        <h3 className={classes.heading}>Past Events</h3>
        <p className={classes.mainContent}>Check out our past events</p>
        <div className={classes.commonBorder}></div>
      </div>
      <div className={classes.pastEvents}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default Events;
