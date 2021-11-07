import React from "react";
import classes from "./events.module.css";
const EventCard = ({ onRegisterClick, event }) => {
  return (
    <>
      {event && (
        <div className={`${classes.card}`}>
          {/* <div className={classes.img_container}> */}
          <img className={classes.poster} src={event.poster} alt="" />
          {/* </div> */}

          <div className={classes.card_content}>
            <h3 className={classes.title}>{event.name}</h3>
            <h3 className={classes.date}>
              <strong>DATE : </strong>
              {event.start_date}
            </h3>
            <p className={classes.content}>{event.description}</p>
            <button onClick={onRegisterClick} className={classes.button}>
              Register Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
