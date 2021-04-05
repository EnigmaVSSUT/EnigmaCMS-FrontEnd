import React from "react";

import { Button, makeStyles } from "@material-ui/core";
import {LinkedIn, GitHub, Twitter, Facebook} from "@material-ui/icons";
import * as colors from "../colors";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1.3),
    width:265
  },
}));

const OAuthButtons = (props) => {
  const classes = useStyles();

  return (
    <>
      <Button 
        variant="contained" 
        color='primary' 
        size="large" 
        className={classes.button} 
        startIcon={<GitHub />}
        style={{textTransform: 'none', backgroundColor:colors.black}}
      >
        {props.type} with GitHub
      </Button>

      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        className={classes.button} 
        startIcon={<LinkedIn />}
        style={{textTransform: 'none', backgroundColor:colors.blueLinkedIn}}
      >
        {props.type} with LinkedIn
      </Button>

      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        className={classes.button} 
        startIcon={<Twitter />}
        style={{textTransform: 'none', backgroundColor:colors.blueTwitter}}
      >
        {props.type} with Twitter
      </Button>

      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        className={classes.button} 
        startIcon={<Facebook />}
        style={{textTransform: 'none', backgroundColor:colors.blueFacebook}}
      >
        {props.type} with Facebook
      </Button>

    </>
  );
}
export default OAuthButtons;