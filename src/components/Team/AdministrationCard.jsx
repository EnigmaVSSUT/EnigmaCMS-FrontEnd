import classes from "./style.module.css";
import React from "react";

const AdministrationCard = ({ name, designation, image }) => {
  return (
    <div className={classes.adminCard}>
      <img className={classes.adProfile_pic} src={image} alt="" />
      <h4 className={classes.adName}>{name}</h4>
      <h5 className={classes.adDesgnation}>{designation}</h5>
    </div>
  );
};

export default AdministrationCard;
