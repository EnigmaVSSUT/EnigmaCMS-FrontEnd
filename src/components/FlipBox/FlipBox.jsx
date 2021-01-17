import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import useCommonCardStyle from "../Auth/style.js";
import "./flip-box.css";

const useStyle = makeStyles(theme => ({
  tint: {
    borderRadius:25,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    background:
      "linear-gradient(to right,rgba(0, 0, 0, 0.7) 0%,#ffffff00 50%,rgba(0, 0, 0, 0.7) 100%),linear-gradient(to bottom,rgba(0, 0, 0, 0.7) 0%,#ffffff00 50%,rgba(0, 0, 0, 0.7) 100%)",
  },
  rotate: isSignUp => {
    return {
      transform: !isSignUp ? "translateX(0%)" : "translateX(-50%)",
      transition: "all 2000ms cubic-bezier(0.9, 0, 0.33, 1)",
    };
  },
}));

function FlipBox(props) {
  const cardClass = useCommonCardStyle();
  const classes = useStyle();
  
  useEffect(() => {
    if (props.isFlipped) {
      document.querySelector(".flip-box").classList.remove("flip-box-flip");
    } else {
      document.querySelector(".flip-box").classList.add("flip-box-flip");
    }
  });
  return (
    <div className={`${cardClass.card} container `}>
      <div className="flip-box">
        <div
          className="flip-box-front text-center"
          style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?river")' }}
        >
          <div className={classes.tint}></div>
          <div className="inner">{props.frontContent}</div>
        </div>

        <div
          className="flip-box-back text-center"
          style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?water")' }}
        >
          <div className={`${classes.tint}`}></div>
          <div className="inner">{props.backContent}</div>
        </div>
      </div>
    </div>
  );
}

export default FlipBox;
