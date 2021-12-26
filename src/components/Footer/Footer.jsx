import React from "react";
import Column from "./components/Columns";
import classes from "./footer.module.css";
import Social from "../Social/SocialMedia";

const Footer = () => {
  
  const elements = {
    "About Us": {
      "about us": "#",
      "lorem ipsum": "#",
      "lorem ipsumm": "#",
      lorem: "#",
    },

    "Contact us": {
      "about us": "#",
      "lorem ipsum": "#",
      "lorem ipsumm": "#",
      lorem: "#",
    },

    Links: {
      "about us": "#",
      "lorem ipsum": "#",
      "lorem ipsumm": "#",
      lorem: "#",
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
