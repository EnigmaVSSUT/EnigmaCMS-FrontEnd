import React, { useState, useEffect } from "react";
import Heading from "../Heading/index";
import {
  Grid,
  Card,
  CardContent,
  Container,
  Typography,
  Tabs,
  Tab,
  Link,
  IconButton,
} from "@mui/material";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { makeStyles } from "@material-ui/core/styles";
import {  useParams } from "react-router-dom";
import { Axios } from "../../helpers/AxiosInstance";
import { TabContext, TabPanel } from "@material-ui/lab";

const useStyles = makeStyles({
    mainCont:{
        justifyContent:'center',
        alignItems:'center',
    },
  imgContainer: {
    maxWidth: "100%",
    height: "360px",
    marginBottom: "44px",
    display: "flex",
    justifyContent: "center",
    // border: "1px solid red",
  },
  img: {
    maxWidth: "100%",
    height: "100%",
    borderRadius: "8px",
    // border: "1px solid red",
  },
  cardHeading: {
    color: "#35ff1f",
    fontSize: "25px",
    textAlign: "center",
     borderBottom: "1px solid #35ff1f",
    letterSpacing: "2px",
  },
  name: {
    marginBottom: "44px",
  },
  nameCont: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    //   border: "1px solid red",
    padding: "12px",
  },
  nameHeading: {
    color: "#fff",
    fontSize: "18px",
    // border: "1px solid red",
  },
  nameTitle: {
   
    color: "#35ff1f",
    fontSize: "22px",
    marginLeft: "10px",
    //    border: "1px solid red",
    overflow: "hidden",
  },
  bio: {
    color: "#fff",
    fontSize: "18px",
  },
  detailsTitle: {
    color: "#35ff1f",
    //  border: "1px solid red",
    marginRight: "20px",
    fontSize: "18px",
    alignSelf: "center",
  },
  details: {
    color: "#fff",
    fontSize: "22px",
    //  border: "1px solid red",
  },
  detailsCont: {
    display: "flex",
    flexDirection: "row",
    //  border: "1px solid red",
    padding: "10px",
    marginBottom: "10px",
  },
  icon: {
    color: "#35ff1f",
    '&hover': {
        color: "#fff",
    }
  },
  connectIcon: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    // border: "1px solid red",
    
  },
});

const ProfileDetails = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const [member, setMember] = useState({});
  const [value, setValue] = useState("1");
  const year = {
    1: "First Year",
    2: "Second Year",
    3: "Third Year",
    4: "Final Year",
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    Axios({
      method: "GET",
      url: `members/member-detail/${slug}`,
    }).then((res) => {
      setMember(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Heading main="PROFILE" />
      <Container maxWidth="xl">
        <Grid container spacing={3} className={classes.mainCont}>
          <Grid item xs={12} sm={4} lg={3}>
            <div className={classes.imgContainer}>
              <img
                className={classes.img}
                src={member.profile_pic}
                alt="member"
              />
            </div>
            <Card style={{ backgroundColor: "#17141d" }}>
              <CardContent>
                <Typography
                  className={classes.cardHeading}
                  variant=""
                  component="div"
                >
                  CONNECT
                </Typography>
                <div className={classes.connectIcon}>
                 {member.linkedin && <IconButton href={member.linkedin} target="blank">
                    
                    <AiFillLinkedin className={classes.icon} />
                     
                  </IconButton>}
                { member.facebook && <IconButton href={member.facebook} target="blank">
                    < AiFillFacebook className={classes.icon} />
                  </IconButton>}
                  {member.instagram &&<IconButton href={member.instagram} target="blank">
                    <AiFillInstagram className={classes.icon} />
                  </IconButton>}
                 { member.github &&<IconButton href={member.github} target="blank">
                     
                    <AiFillGithub className={classes.icon} />
                  </IconButton>}
                  {member.twitter && <IconButton href={member.twitter} target="blank">
                    <AiFillTwitterCircle className={classes.icon} />
                  </IconButton>}
                  {member.codechef &&<IconButton href={member.codechef} target="blank">
                    <SiCodechef className={classes.icon} />
                  </IconButton>}
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <Card
              className={classes.name}
              style={{ backgroundColor: "#17141d" }}
            >
              <CardContent>
                <div className={classes.nameCont}>
                  <Typography
                    className={classes.nameHeading}
                    variant=""
                    component="div"
                  >
                    Name
                  </Typography>
                  <Typography
                    className={classes.nameTitle}
                    variant=""
                    component="div"
                  >
                    {member.first_name} {member.last_name}
                  </Typography>
                </div>
                <div className={classes.nameCont}>
                  <Typography
                    className={classes.nameHeading}
                    variant=""
                    component="div"
                  >
                    Email
                  </Typography>
                  <Typography
                    className={classes.nameTitle}
                    variant=""
                    component="div"
                  >
                    {member.email}
                  </Typography>
                </div>
              </CardContent>
            </Card>
            <Card style={{ backgroundColor: "#17141d" }}>
              <CardContent>
                <TabContext value={value}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    style={{ color: "#fff" }}
                    TabIndicatorProps={{ style: { background: "#35ff1f" } }}
                  >
                       <Tab
                      value="1"
                      label="Details"
                      style={{ color: "#35ff1f" }}
                    />
                    {member.description && (
                      <Tab value="2" label="Bio" style={{ color: "#35ff1f" }} />
                    )}
                   
                  </Tabs>
                  {member.description && (
                    <TabPanel value="2">
                      <Typography
                        variant=""
                        component="p"
                        className={classes.bio}
                      >
                        {member.description}
                      </Typography>
                    </TabPanel>
                  )}
                  <TabPanel value="1">
                    <div className={classes.detailsCont}>
                      <span className={classes.detailsTitle}>Year: </span>
                      <Typography
                        variant=""
                        component="p"
                        className={classes.details}
                      >
                        {year[member.year]}
                      </Typography>
                    </div>
                    <div className={classes.detailsCont}>
                      <span className={classes.detailsTitle}>Branch: </span>
                      <Typography
                        variant=""
                        component="p"
                        className={classes.details}
                      >
                        {member.branch}
                      </Typography>
                    </div>
                    <div className={classes.detailsCont}>
                      <span className={classes.detailsTitle}>Domain: </span>
                      <Typography
                        variant=""
                        component="p"
                        className={classes.details}
                      >
                        {member.domain}
                      </Typography>
                    </div>
                    <div className={classes.detailsCont}>
                      <span className={classes.detailsTitle}>Skills: </span>
                      <Typography
                        variant=""
                        component="p"
                        className={classes.details}
                      >
                        {member.skills}
                      </Typography>
                    </div>
                  </TabPanel>
                </TabContext>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProfileDetails;
