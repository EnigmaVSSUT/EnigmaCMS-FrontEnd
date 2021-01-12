import React from "react";

import { Card, Typography, Button, Box } from "@material-ui/core";
import useStyle from "../style.js";
import OAuthButtons from "./../components/OAuthButtons";

function AuthCard(props) {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
        <Typography></Typography>
        <OAuthButtons />
        <Button>Submit</Button>
      </Box>
    </Card>
  );
}

export default AuthCard;
