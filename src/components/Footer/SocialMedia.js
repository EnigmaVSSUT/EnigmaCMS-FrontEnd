import React from "react";
import classes from "./socialMedia.module.css";
const socialMedia = () => {
  return (
    <div>
      <h4 className={classes.heading}>follow us</h4>
      <div className={classes.socialLinks}>
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default socialMedia;
