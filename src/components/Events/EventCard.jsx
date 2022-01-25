import React from "react";
import { Link } from "react-router-dom";
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
           <Link to={`events/${event.slug}`}>
              <button  className={classes.button}>
                   View More
               </button>
            </Link>
            
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
