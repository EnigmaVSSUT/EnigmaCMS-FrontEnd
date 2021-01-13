import React from "react";
import {makeStyles } from "@material-ui/core";
import useCommonCardStyle from "../style.js";
import "./../flip-box.css";

const useStyle = makeStyles(theme => ({
  rotate: isSignUp => {
    return {
      transform: !isSignUp ? "translateX(0%)" : "translateX(-50%)",
      transition: "all 500ms cubic-bezier(0.9, 0, 0.33, 1)",
    };
  },
}));

function FlipBox() {
  const cardClass = useCommonCardStyle();
  // const classes = useStyle();

  return (
    <div className={`${cardClass.card} container `}>
      <div className="flip-box">
        <div
          className="flip-box-front text-center"
          style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?road")' }}
        >
          <div className="inner">
            <img src={"https://picsum.photos/100"} className="flip-box-img invert-color" />
            <span>some icon</span>
            <h2>Some header: </h2>
            <p>Some paragraph</p>
            <ul>
              <li>Ye Ye Wo WO</li>
              <li>Wagera Wagera</li>
              <li>Ye hua wo hua</li>
              <li>bas itna hi</li>
            </ul>
          </div>
        </div>

        <div
          className="flip-box-back text-center"
          style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?water")' }}
        >
          <div className="inner">
            <h2>Some header: </h2>
            <p>Some paragraph</p>
            <ul>
              <li>Ye Ye Wo WO</li>
              <li>Wagera Wagera</li>
              <li>Ye hua wo hua</li>
              <li>bas itna hi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipBox;
