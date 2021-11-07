import ProfileCard from "./ProfileCard";
import classes from "./style.module.css";
const Row = ({ year, heading }) => {
  return (
    <>
      {year.length > 0 ? (
        <>
          <h3 className={classes.heading}>{heading}</h3>
          <div className={classes.row}>
            {year.map((member) => (
              <ProfileCard details={member} />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Row;
