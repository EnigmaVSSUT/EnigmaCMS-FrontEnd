import React, { useState } from "react";
import {Typography,  Tabs, Tab, withStyles } from "@material-ui/core";
import style from './style.module.css'
import TabPanel from "./sections/TabPanel";

import PresentMemberProfiles from "./../../_test-data/profiles";

const StyledTabs = withStyles({
  indicator: {
    display:'none',
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

function Team() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={style.teamRoot}>
      <Typography align="center" variant="h1">
        Meet the Team
      </Typography>
      <div className={style.hr} />

      <div className={style.teamSection}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          className={style.tabsParent}
          indicator={{ display: "none" }}
          centered
        >
          <Tab className={style.tab} label="Present Members" />
          <Tab className={style.tab} label="Alumni" />
        </StyledTabs>
      </div>
      <TabPanel profiles={PresentMemberProfiles} value={value} index={0} />
      <TabPanel profiles={[...PresentMemberProfiles].reverse()} value={value} index={1} />
    </div>
  );
}

export default Team;
