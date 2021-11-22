import { useRef } from "react";
import ProfileCard from "./ProfileCard";
import classes from "./style.module.css";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Row = ({ year, heading }) => {
  const row = useRef(null);
  const scroll = (scrollOffset) => {
    row.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      {year.length > 0 ? (
        <div className={classes.wrapper}>
          <h3 className={classes.heading}>{heading}</h3>
          <div className={classes.scrollKeys}>
            <AiFillLeftCircle
              size={25}
              className={classes.icons}
              onClick={() => scroll(-300)}
            />
            <AiFillRightCircle
              size={25}
              className={classes.icons}
              onClick={() => scroll(300)}
            />
          </div>
          <div ref={row} className={classes.row}>
            {year.map((member) => (
              <ProfileCard details={member} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Row;
