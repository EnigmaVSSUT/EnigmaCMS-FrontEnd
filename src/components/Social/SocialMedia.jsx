import React from "react";
import classes from "./socialMedia.module.css";
const SocialMedia = () => {
  return (
    <>
      
      <div className={classes.socialLinks}>
        <a href="https://www.facebook.com/enigma.vssut/">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://github.com/EnigmaVSSUT">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/enigma_vssut/">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/enigma-vssut/">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
