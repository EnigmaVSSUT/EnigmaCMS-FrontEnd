import { Typography, IconButton, makeStyles, Button } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./../Project.module.css";
import { FlipCameraAndroid } from "@material-ui/icons";
import { FaGithub } from 'react-icons/fa';
import FlipBox from "../../FlipBox/FlipBox";

const useStyles = makeStyles({
  linkWrap: {
    width: "100%",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "20px",
    border: "3px solid #35ff1f",
    transform: "translateY(-13px) translateZ(2px) scale(0.945)",
    textAlign: "center",
    backgroundColor: "#100E17",
  },
  icon: {
    marginRight: 10,
    color: "#35ff1f",
    "&:hover": {
      backgroundColor: "#4b52533b",
    },
  },
  repoLink: {
    color: "#35ff1f",
    "&:hover": {
      color: "#35ff1f",
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  button: {
    color: "#35ff1f",
    textTransform: "none",
    marginBottom: 5,
    "&:hover": {
      color: "#35ff1f",
      backgroundColor:"#35ffif",
    },
  },
});

function Head(props) {
  const classes = useStyles();
  const { projectImage, projectName, shortDescription, projectLink, repoLink } = props.content;
  return (
    <div className={styles.face}>
      <div className={styles.innerFront}>
        <img src={projectImage} className={styles.projectImage} alt="Project Preview" />

        <button className={classes.linkWrap} onClick={() => window.open(projectLink)}>
          
          <a className={classes.repoLink}>
          {projectName}
          </a>
        </button>

        <div className={navigator.userAgent.indexOf("Mozilla") !== -1 ? styles.rise3DFireFox : styles.rise3D}>
          <Typography variant="body1">
            {shortDescription} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur, sed dolores
            numquam odit hic magni?
          </Typography>
          <div className={styles.cardFooter}>
            {projectLink && (
              <Button color="primary" className={classes.button} startIcon={<FaGithub />} href={repoLink}>
              GitHub Repo Link
              </Button>
            )}
            <IconButton color="primary" style={{marginLeft: repoLink || 'auto'}} className={classes.icon} onClick={() => props.handleFlipBoxFlip()}>
              <FlipCameraAndroid />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tail(props) {
  const classes = useStyles();
  const { projectName, longDescription, team } = props.content;
  return (
    <div className={styles.face}>
      <div className={styles.innerBack}>
        <div
          className={[
            navigator.userAgent.indexOf("Mozilla") !== -1 ? styles.rise3DFireFox : styles.rise3D,
            styles.tailContent,
          ].join(" ")}
        >
          <Typography variant="body1" className={styles.longDescription}>
            A{longDescription} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur, sed dolores
            numquam odit hic magni Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias ipsam voluptate
            at. Eaque natus tempora sed consequatur, totam odit blanditiis iure, animi voluptatibus error a placeat,
            dicta perspiciatis fugit.
          </Typography>

          <div className={styles.cardFooter2}>
            <Typography className={styles.team} variant="h6">
              {team}
            </Typography>
            <div className={styles.iconContainer}>
              <IconButton color="primary" className={classes.icon} onClick={() => props.handleFlipBoxFlip()}>
                <FlipCameraAndroid />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideBox(props) {
  const [isFlipped, flipIt] = useState(false);
  const handleFlipBoxFlip = () => {
    flipIt(!isFlipped);
  };
  const { id, projectName, shortDescription, projectImage, repoLink, longDescription, team, projectLink } =
    props.project || "";

  return (
    <div id={id} className={props.classes}>
      <FlipBox
        key={id}
        frontContent={
          <Head
            content={{ projectImage, projectName, shortDescription, projectLink, repoLink }}
            flipIt={flipIt}
            handleFlipBoxFlip={handleFlipBoxFlip}
          />
        }
        frontBackground="#FFC0CB"
        rearContent={
          <Tail
            content={{ longDescription, team }}
            flipIt={flipIt}
            handleFlipBoxFlip={handleFlipBoxFlip}
          />
        }
        rearBackground="#FFC0CB"
        isFlipped={isFlipped}
      />
    </div>
  );
}

export default SlideBox;
