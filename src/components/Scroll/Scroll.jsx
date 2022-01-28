import { useState, useEffect } from "react";

import Fab from "@mui/material/Fab";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import classes from "./scroll.module.css";

function Scroll() {
  const [isScrollVisible, setScrollVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setScrollVisible(true);
    } else {
      setScrollVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }

  // listen for scroll event
  useEffect(() => {

    console.log('Register Scroll Event');

    window.addEventListener("scroll", (e) => {
      toggleVisibility();
    });
  }, []);

  return (
    <>
      {isScrollVisible && (
        <Fab color="primary" aria-label="add" className={classes.scrollBtn} onClick={() => scrollToTop()}>
          <ArrowUpward />
        </Fab>
      )}
    </>
  );
}

export default Scroll;
