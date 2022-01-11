import React from "react";

import { Card, Typography, Box, makeStyles } from "@material-ui/core";
import useCommonCardStyle from "../cardStyle.js";
import OAuthButtons from "./../components/OAuthButtons";

const useStyle = makeStyles(theme => ({
  head: {
    margin: "12px 0 2.5rem 0",
    fontSize: 27,
    fontWeight: 600,
  },
}));

function AuthCard(props) {
  const cardClass = useCommonCardStyle();
  const classes = useStyle();
  return (
    <Card className={cardClass.card}>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Typography variant="h3" className={classes.head}>
          {props.type} to Enigma VSSUT
        </Typography>
        <OAuthButtons type={props.type} />
      </Box>
    </Card>
  );
}

export default AuthCard;
