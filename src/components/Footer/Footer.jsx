import React from "react";
import Column from "./components/Columns";
import classes from "./footer.module.css";
import Social from "../Social/SocialMedia";
const Footer = () => {
  const url1 = "tel:+91 7978924503"
  const url2 = "mailto:enigma.vssut@gmail.com"
  const elements = {
    "About Us": {
      "Objective": "/objective",
      "Our Chapters":"/colab",
      "Our Members": "/team",
      "Projects": "/projects",
      "Events": "/events",
    },

    "Contact us": {
      "+91 7978924503":`${url1}`,
      "enigma.vssut@gmail.com":`${url2}`,
      "Location": "/contact",
      "Message Us": "/contact",
    },
  };

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          {Object.keys(elements).map(title => {
            return <Column key={title} title={title} links={elements[title]}/>;
          })}
          <div className={classes.social}>
            <h4 className={classes.heading}>follow us</h4>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
