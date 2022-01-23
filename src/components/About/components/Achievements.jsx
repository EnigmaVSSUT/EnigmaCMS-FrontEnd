import React, { useState } from "react";
import { Grid, ListItemText, List, Divider } from "@mui/material";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import Collapse from "@mui/material/Collapse";


import {
  SendIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@material-ui/icons";

const useStyles = makeStyles({
  headerText: {
    color: "white",
  },
  main: {
    // border: '1px solid red',
    padding: "10px",
  },
  items: {
    // border: '1px solid red',
    padding: "10px",
    justifyContent: "space-around",
  },
  listHead: {
    color: "white",
  }
});

const Achievements = () => {
  const classes = useStyles();
  const [open, setOpen] = useState({
    id1: true,
    id2: true,
    id3: true,
    id4: true,
    id5: true,
  });
  const achievements = [
    {
      id: 1,
      year: "Achievement 2020",
      list: [
        { title: "Credit Suisse GCC global ranks 6, 9, 22, 24, 49. " },
        { title: "ICPC regionals 2020." },
        {
          title:
            "Started specific communities and chapters i.e. GDSC VSSUT, Codechef VSSUT Chapter, Hackrearth VSSUT.",
        },
        {
          title:
            "Club Alumni are placed at companies like Google, Amazon, Red Hat, and Flipkart.",
        },
        {
          title:
            "HWI, 11 students under 300 nationwide out of 120k participants.",
        },
      ],
    },
    {
      id: 2,
      year: "Achievement 2019",
      list: [
        {
          title:
            "Runners up in Smart India Hackathon 2019, by Multiple Finalists.",
        },
        { title: "Multiple Qualifications in ACM-ICPC 2019." },
        {
          title:
            "Multiple participation and qualifications in Google Code Jam 2019",
        },
        { title: "Runners up GenHex hackathon 2019" },
        {
          title:
            "Third and Fifth positions in CodeBattles, organized by HackerEarth.",
        },
      ],
    },
    {
      id: 3,
      year: "Achievement 2018",
      list: [
        {
          title:
            "International finalist MoveHack: A global mobility Hackathon organized by NITI Aayog and the Government of India.",
        },
        { title: "Runners Up at ESSPL TechCamp Hackathon" },
        { title: "Finalist at Smart BIt Hackathon at Bhubaneswar 2018" },
        { title: "Runners up Hack in the North 2.0 IIIT Allahabad" },
      ],
    },
    {
      id: 4,
      year: "Achievement 2017",
      list: [
        { title: "CodeChamp Runners up, conducted by Infosys Bhubaneswar." },
        {
          title:
            "Fourth position in Hack in the North conducted by IIIT Allahabad.",
        },
      ],
    },
    {
      id: 5,
      year: "Past Achievements",
      list: [
        { title: "Runners Up in Uber Scale It." },
        { title: "Semifinalists in E summit IIT Bombay Eureka." },
        { title: "Finalist in L&T techgium." },
        {
          title:
            "Global rank 83 in September Mega cook-off organised by CodeChef",
        },
        { title: "Mentors and participants in Google Code In." },
      ],
    },
  ];

  return (
    <Grid container className={classes.main}>
      <Grid item xs={12}>
        <Typography variant="body1" className={classes.headerText}>
          We believe that our work and ethics should speak for themselves as
          much as our accolades in the field of technology. With hard work,
          dedication and the brilliance of the existing members and alumni of
          the club, we have managed to put the coding club on the national map.
        </Typography>
      </Grid>

      <Grid
        item
        container
        spacing={3}
        direction="row"
        className={classes.items}
      >
        {achievements.map((item) => {
          const handleClick = () => {
            setOpen({ ...open, [item.id]: !open[item.id] });
          };
          return (
            <Grid item key={item.id}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "#17141d",
                  elevation: 5,
                }}
                component="nav"
              >
                <ListItemButton onClick={handleClick}>
                  <ListItemText className={classes.listHead} primary={item.year} />
                  {open[item.id] ? <ExpandLess className={classes.listHead}/> : <ExpandMore className={classes.listHead}/>}
                </ListItemButton>
                <Collapse in={open[item.id]} timeout="auto" unmountOnExit>
                  {item.list.map((subitem) => (
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText className={classes.listHead} primary={subitem.title} />
                      </ListItemButton>
                      <Divider />
                    </List>
                  ))}
                </Collapse>
              </List>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Achievements;
