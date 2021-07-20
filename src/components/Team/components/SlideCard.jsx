import { Typography, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import style from "./../style.module.css";
import { LinkedIn, GitHub, Facebook, Instagram } from "@material-ui/icons";
import logo from "./../../../assets/logos/logo.jpg";

const useStyles = makeStyles({
  iconButton: {
    "& > span": {
      zIndex: -1,
    },
  },
});

function Profile(props) {
  const {
    id,
    firstname,
    lastname,
    profile_pic_url,
    get_year_display,
    github,
    facebook,
    instagram,
    linkedin,
  } = props.profile || "";

  const styles = useStyles();
  return (
    <div key={id!==undefined ? id : -1} className={props.classes}>
      {props.profile !== null ? (
        <>
          <img className={style.profileImage} alt="avatar" src={profile_pic_url} />

          <div className={style.content}>
            <div className={style.info}>
              <Typography gutterBottom variant="h6">
                {`${firstname} ${lastname}`}
              </Typography>
              <Typography variant="body2" component="p">
                {get_year_display}
              </Typography>
            </div>
            <div className={style.links}>
              <IconButton className={styles.iconButton} onClick={() => window.open(github)}>
                <GitHub />
              </IconButton>
              <IconButton className={styles.iconButton} onClick={() => window.open(linkedin)}>
                <LinkedIn />
              </IconButton>
              <IconButton className={styles.iconButton} onClick={() => window.open(facebook)}>
                <Facebook />
              </IconButton>
              <IconButton className={styles.iconButton} onClick={() => window.open(instagram)}>
                <Instagram />
              </IconButton>
            </div>
          </div>
        </>
      ) : (
        <img
          className={style.profileImage}
          alt="avatar"
          style={{ objectFit: "contain", background: "black" }}
          src={logo}
        />
      )}
    </div>
  );
}

function SlideCard(props) {
  const { profile1, profile2 } = props;
  return (
    <div className={style.slideCard}>
      <Profile classes={style.profileCard} profile={profile1} />
      {profile2 != null ? (
        <Profile classes={[style.profileCard2, style.profileCard].join(" ")} profile={profile2} />
      ) : (
        <Profile classes={[style.profileCard2, style.profileCard].join(" ")} profile={null} />
      )}
    </div>
  );
}

export default SlideCard;
