import React, { useState } from "react";

// import Navbar from "../Navbar/navbar";
import { Box, Container, Hidden, makeStyles } from "@material-ui/core";
import AuthCard from "./sections/AuthCard";
import FlipBox from "../FlipBox/FlipBox";
import SectionSelector from "./sections/SectionSelector";
import * as colors from "./../../colors";

const useStyle = makeStyles(theme => ({
  body: {
    backgroundColor: colors.body.backgound,
    height: "100vh",
    minWidth: "100%",
    color: colors.body.foregroundActives,
  },
  mainContainer: {
    overflow: "hidden",
  },
  hr: {
    margin: '1px 10px',
    width: 'calc(100% - 20px)',
    display: "block",
    height: 1,
    border: 0,
    borderTop: `3px solid ${colors.darkSecondary}`,
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
  const [isFlipped, flipIt] = useState(false);

  const handleChangeSection = () => {
    changeSection(!isSignUp);
  };

  const handleFlipBoxFlip= () => {
    flipIt(!isFlipped)
  };

  const classes = useStyle(isSignUp);

  return (
    <Container className={classes.body}>
      {/* <Navbar/> */}

      <SectionSelector 
        handleChangeSection={handleChangeSection} 
        handleFlipBoxFlip={handleFlipBoxFlip} 
      />
      <hr className={classes.hr} />

      <Box className={classes.mainContainer}>
        <Box display="flex" alignContent="flex-start" className={classes.movingBox}>
          <AuthCard type="Sign up" />
          <Hidden xsDown>
            <FlipBox
              frontContent={<h1>Component1 passed through props</h1>}
              backContent={<h1>Component2 passed through props</h1>}
              isFlipped={isFlipped}
            />
          </Hidden>
          <AuthCard type="Sign in" />
        </Box>
      </Box>
      {/* <Footer/> */}
    </Container>
  );
}

export default Auth;
