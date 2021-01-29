import React, { useState } from "react";
import {Typography,  Tabs, Tab, withStyles } from "@material-ui/core";
import style from './style.module.css'
import TabPanel from "./sections/TabPanel";

const StyledTabs = withStyles({
  indicator: {
    display:'none',
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

function Team() {
  const [value, setValue] = useState(0);
  const PresentMemberProfiles = [
    {
      id: 0,
      firstname: "aaa",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1005/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 1,
      firstname: "bbb",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1006/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 2,
      firstname: "cccc",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1011/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 3,
      firstname: "ddd",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1008/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 4,
      firstname: "eee",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1009/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 0,
      firstname: "aaa",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1005/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 1,
      firstname: "bbb",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1006/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 2,
      firstname: "cccc",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1011/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 3,
      firstname: "ddd",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1008/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 4,
      firstname: "eee",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1009/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 5,
      firstname: "fff",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1010/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 6,
      firstname: "ggg",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1011/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 0,
      firstname: "aaa",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1005/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 1,
      firstname: "bbb",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1006/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 2,
      firstname: "cccc",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1011/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 3,
      firstname: "ddd",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1008/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
    {
      id: 4,
      firstname: "eee",
      lastname: "sdfas",
      profile_pic_url: "https://picsum.photos/id/1009/200",
      get_year_display: "2nd Year",
      github: "2nd Year",
      facebook: "asdff",
      instagram: "asdfdf",
      linkedin: "asdfdf",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={style.teamRoot}>

      <Typography align="center" variant="h1">
        Meet the Team
      </Typography>
      <div className={style.hr} />

      <div>
        <StyledTabs value={value} onChange={handleChange} className={style.tabsParent} indicator={{display:'none'}} centered>
          <Tab className={style.tab} label="Present Members" />
          <Tab className={style.tab} label="Alumni" />
        </StyledTabs>
      </div>
      <TabPanel profiles={PresentMemberProfiles} value={value} index={0}/>
      <TabPanel profiles={[...PresentMemberProfiles].reverse()} value={value} index={1}/>

    </div>
  );
}

export default Team;
