import React from "react";
import classes from "./events.module.css";
const EventCard = ({ upcoming }) => {
  return (
    <div className={`${classes.card} ${upcoming && classes.upcoming}`}>
      <div className={classes.img_container}></div>
      <div className={classes.card_content}>
        <h2 className={classes.title}>LEVEL-UP DSA</h2>
        <h3 className={classes.date}>
          <strong>DATE : </strong>
          10th October 2021
        </h3>
        <p className={classes.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          odio dolorem amet, sunt magnam asperiores exercitationem consequuntur?
          Molestias asperiores rerum doloremque reiciendis. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Reprehenderit modi perferendis
          amet iste reiciendis aliquid fuga corporis, omnis aliquam esse tempora
          dolor vitae, magnam exercitationem nulla voluptas cupiditate tempore
          animi.
        </p>
        <button className={classes.button}>Register Now</button>
      </div>
    </div>
  );
};

export default EventCard;
