import { makeStyles, Button } from "@material-ui/core";
import React from "react";
import * as colors from "../colors";

const useStyle = makeStyles(theme => ({
  selectorButton: props => {
    return {
      margin: "10px 10px 0px",
      borderRadius: props.active ? "4px 4px 0 0" : "10px",
      color: props.active ? colors.button.foregroundActive : colors.button.foregroundInactive,
      backgroundColor: props.active && colors.button.backgound,
      borderBottom: props.active ? `3px solid ${colors.green}` : 0,
      flexBasis: props.active ? "70%" : "25%",
      transition: "all 500ms cubic-bezier(0.9, 0, 0.33, 1)",
      "&:hover": {
        backgroundColor: colors.button.backgound,
      },
      outline:'none !important'
    };
  },
}));

const SelectorButton = props => {
  const classes = useStyle(props);

  return (
    <Button color="primary" className={classes.selectorButton} onClick={props.onClick}>
      {props.text}
    </Button>
  );
};

export default SelectorButton;
