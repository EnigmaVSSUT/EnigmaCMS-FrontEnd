import React from "react";
import classes from "./socialMedia.module.css";
const socialMedia = () => {
  return (
    <div>
      <div className={classes.socialLinks}>
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-github"></i>
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
