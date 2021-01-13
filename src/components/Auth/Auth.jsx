import React, { useState } from "react";

// import Navbar from "../Navbar/navbar";
import { Box, Container, Hidden, makeStyles } from "@material-ui/core";
import AuthCard from "./sections/AuthCard";
import FlipBox from "./sections/FlipBox";
import SectionSelector from "./sections/SectionSelector";
import * as colors from "./../../colors";

const useStyle = makeStyles(theme => ({
  body: {
    backgroundColor: colors.body.backgound,
    height: "100vh",
    minWidth:'100%',
    color: colors.body.foregroundActives,
  },
  mainContainer: {
    overflow: "hidden",
  },
  movingBox: isSignUp => {
    return {
      transform: !isSignUp ? "translateX(0%)" : "translateX(-50%)",
      transition: "all 500ms cubic-bezier(0.9, 0, 0.33, 1)",
    };
  },
  [theme.breakpoints.down("xs")]: {
    movingBox: isSignUp => {
      return {
        transform: !isSignUp ? "translateX(20px)" : "translateX(-100%)",
        transition: "all 500ms cubic-bezier(0.9, 0, 0.33, 1)",
      };
    },
    
  },
}));

function Auth() {

  const [isSignUp, changeSection] = useState(true);

  const handleChangeSection = () => {
    changeSection(!isSignUp);
  };

  const classes = useStyle(isSignUp);

  return (
    <Container className={classes.body}>
      {/* <Navbar/> */}
      <SectionSelector handleChangeSection={handleChangeSection} />
      <Box className={classes.mainContainer}>
        <Box display="flex" alignContent="flex-start" className={classes.movingBox}>
          <AuthCard type="Sign up" />
          <Hidden xsDown>
            <FlipBox />
          </Hidden>
          <AuthCard type="Sign in" />
        </Box>
      </Box>
      {/* <Footer/> */}
    </Container>
  );
}

export default Auth;
