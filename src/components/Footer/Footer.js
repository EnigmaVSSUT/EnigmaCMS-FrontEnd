import React from "react";
import Column from "./Columns";
import classes from "./footer.module.css";
import Social from "./SocialMedia";
const footer = () => {
  const elements = {
    "About Us": {
      "about us": "#",
      "lorem ipsum": "#",
      "lorem ipsum": "#",
      lorem: "#",
    },

    "Contact us": {
      "about us": "#",
      "lorem ipsum": "#",
      "lorem ipsum": "#",
      lorem: "#",
    },

    Links: {
      "about us": "#",
      "lorem ipsum": "#",
      "lorem ipsum": "#",
      lorem: "#",
    },
  };

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          {Object.keys(elements).map((title) => {
            return <Column key={title} title={title} links={elements[title]} />;
          })}
          <Social />
        </div>
      </div>
    </div>
  );
};

export default footer;
