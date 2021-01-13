import React from "react";
import { Card, Box, Container, makeStyles } from "@material-ui/core";
import useCommonCardStyle from "../style.js";
import './../flip-card.css'

const useStyle = makeStyles(theme => ({
  
  rotate: isSignUp => {
    return {
      transform: !isSignUp ? "translateX(0%)" : "translateX(-50%)",
      transition: "all 500ms cubic-bezier(0.9, 0, 0.33, 1)",
    };
  },
}));

function FlipCard() {
  const cardClass = useCommonCardStyle();
  const classes = useStyle();

  return (
    <div className={`${cardClass.card} container`}>
      <Card className="flip-card head-card">
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className="card-content">
          <h1>Something</h1>
          <h2>acha daalna he</h2>
          <h2>Jo change ho when clicked on Sign/Signup</h2>
        </Box>
      </Card>
      <Card className="flip-card tail-card">
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className="card-content">
          <h1>2Something2</h1>
          <h2>2acha daalna he2</h2>
          <h2>2Jo change ho when clicked on Sign/Signup2</h2>
        </Box>
      </Card>
    </div>
    
  );
}

export default FlipCard;
