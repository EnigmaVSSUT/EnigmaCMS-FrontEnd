import React, { useEffect } from "react";
// import { makeStyles } from "@material-ui/core";
import useCommonCardStyle from "../Auth/cardStyle.js";
import style from "./flipBox.module.css";

// const useStyle = makeStyles(theme => ({
//   tint: {
//     borderRadius: 25,
//     height: "100%",
//     width: "100%",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     background:
//       "linear-gradient(to right,rgba(0, 0, 0, 0.7) 0%,#ffffff00 50%,rgba(0, 0, 0, 0.7) 100%),linear-gradient(to bottom,rgba(0, 0, 0, 0.7) 0%,#ffffff00 50%,rgba(0, 0, 0, 0.7) 100%)",
//   },
// }));

let flipBoxClasses = [style.flipBox];

function FlipBox(props) {
  const cardClass = useCommonCardStyle();
  // const classes = useStyle();

  useEffect(() => {
    console.log('useEffect')
    let index = flipBoxClasses.indexOf(style.flipBoxFlip);
    if (props.isFlipped) {
      if (index !== -1) flipBoxClasses.splice(index, 1);
    } else {
      if (index === -1) flipBoxClasses.push(style.flipBoxFlip);
    }
  }, [props.isFlipped]);
  return (
    <div className={[cardClass.card, style.container].join(" ")}>
      <div className={flipBoxClasses.join(" ")}>
        <div
          className={style.flipBoxFront}
          style={{ backgroundImage: props.frontBackground}}
        >
          {/* <div className={classes.tint}></div> */}
          <div className={style.inner}>{props.frontContent}</div>
          <div className={style.heading}>{props.frontHeading}</div>
        </div>

        <div
          className={style.flipBoxBack}
          style={{ backgroundImage: props.rearBackground }}
        >
          {/* <div className={classes.tint}></div> */}
          <div className={style.inner}>{props.rearContent}</div>
          <div className={style.heading}>{props.rearHeading}</div>
        </div>
      </div>
    </div>
  );
}

export default FlipBox;
