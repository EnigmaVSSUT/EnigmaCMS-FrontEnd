import classes from "./heading.module.css";
const Heading = ({ main, sub }) => {
  return (
    <div className={classes.common}>
      <h3 className={classes.heading}>{main}</h3>
      <p className={classes.mainContent}>{sub}</p>
      <div className={classes.commonBorder}></div>
    </div>
  );
};

export default Heading;
