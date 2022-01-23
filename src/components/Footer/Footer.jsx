import React from "react";
import Column from "./components/Columns";
import classes from "./footer.module.css";
import Social from "../Social/SocialMedia";

const Footer = () => {
  
  const elements = {
    "About Us": {
      "Objective": "/objective",
      "Our Chapters":"/colab",
      "Our Members": "/team",
      "Projects": "/projects",
      "Events": "/events",
    },

    "Contact us": {
      "Location": "/contact",
      "Message Us": "/contact",
    },
  };

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          {Object.keys(elements).map(title => {
            return <Column key={title} title={title} links={elements[title]} />;
          })}
          <div>
            <h4 className={classes.heading}>follow us</h4>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
