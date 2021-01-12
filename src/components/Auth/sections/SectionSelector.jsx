import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import SelectorButton from "./../components/SelectorButton";

const useStyle = makeStyles(theme => ({
  flexBox:  {
    flexGrow: 10,
    flexShrink: 0,
    flexBasis: 'auto',
    height:55
  },
}));

const SectionSelector = (props) => {

  const classes = useStyle();

  const [active, setActive] = useState(false);
  
  const changeActive= () => {
    setActive(!active)
    props.handleChangeSection()
  }
  return (
    <Box display="flex" justifyContent="space-between" className={classes.flexBox}>

      <SelectorButton 
        text={"Sign Up"} 
        active={active}
        onClick={changeActive}
      />
      <SelectorButton
        text={"Sign In"} 
        active={!active}
        onClick={changeActive}
      />

    </Box>
  );
};

export default SectionSelector;
