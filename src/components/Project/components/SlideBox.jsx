import { Typography, IconButton, makeStyles, SvgIcon, Fab, Button } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./../Project.module.css";
import { Link, FlipCameraAndroid } from "@material-ui/icons";
import { ReactComponent as RepoIcon } from './../../../assets/icons/repo.svg';

import FlipBox from "../../FlipBox/FlipBox";

const useStyles = makeStyles({
  linkWrap: {
    width: "100%",
    borderRadius: "100px",
    padding: "10px",
    transform: "translateY(-13px) translateZ(2px) scale(0.945)",
    textAlign: "center",
  },
  icon: {
    marginRight: 10,
    "&:hover": {
      color: "#35ff1f",
      backgroundColor: "#4b52533b",
    },
  },
  repoLink: {
    color: "#000",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  button: {
    color: "#bdbdff",
    textTransform: "none",
    marginBottom: 5,
    "&:hover": {
      color: "#6377e8",
      backgroundColor: "#4b52533b",
    },
  },
});

function Head(props) {
  const classes = useStyles();
  const { projectImage, projectName, shortDescription, projectLink, repoLink } = props.content;
  return (
    <div className={styles.face}>
      <div className={styles.innerFront}>
        <Typography className={styles.projectName} variant="h4">
          {projectName}
        </Typography>
        <img src={projectImage} className={styles.projectImage} alt="Project Preview" />

        <Fab variant="extended" className={classes.linkWrap} onClick={() => window.open(repoLink)}>
          <SvgIcon component={RepoIcon} className={classes.icon} />
          <a href={repoLink} className={classes.repoLink}>
            GitHub Repo Link
          </a>
        </Fab>

        <div className={styles.rise3D}>
          <Typography variant="body1">
            {shortDescription} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur, sed dolores
            numquam odit hic magni?
          </Typography>
          <div className={styles.cardFooter}>
            <Button color="primary" className={classes.button} startIcon={<Link />} href={projectLink}>
              Have a look on the Project!
            </Button>

            <IconButton color="primary" className={classes.icon} onClick={() => props.handleFlipBoxFlip()}>
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
        <Typography className={styles.projectName} variant="h4">
          {projectName}
        </Typography>
        <div className={[styles.rise3D, styles.tailContent].join(" ")}>
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
  const {
    id,
    projectName,
    shortDescription,
    projectImage,
    repoLink,
    longDescription,
    team,
    projectLink,
  } = props.project || "";

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
        frontBackground="#001e28"
        rearContent={
          <Tail
            content={{ projectName, longDescription, team }}
            flipIt={flipIt}
            handleFlipBoxFlip={handleFlipBoxFlip}
          />
        }
        rearBackground="#001e28"
        isFlipped={isFlipped}
      />
    </div>
  );
}

export default SlideBox;
