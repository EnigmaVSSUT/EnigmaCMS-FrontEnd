import classes from "./style.module.css";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
const ProfileCard = ({ details }) => {
  return (
    <div className={classes.card}>
      <img className={classes.profile_pic} src={details.profile_pic} alt="" />
      <span className={classes.name}>
        {details.first_name}
        <br />
        {details.last_name}
      </span>
      <h5 className={classes.domain}>{details.domain}</h5>
      <div className={classes.social}>
        <a href={details.linkedin}>
          <AiFillLinkedin className={classes.icon} />
        </a>
        <a href={details.facebook}>
          <AiFillFacebook className={classes.icon} />
        </a>
        <a href={details.instagram}>
          <AiFillInstagram className={classes.icon} />
        </a>
        <a href={details.github}>
          <AiFillGithub className={classes.icon} />
        </a>
        <a href={details.twitter}>
          <AiFillTwitterCircle className={classes.icon} />
        </a>
        <a href={details.geeksforgeeks}>{/* <SiGeeksforgeeks /> */}</a>
        <a href={details.codechef}>
          <SiCodechef className={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
