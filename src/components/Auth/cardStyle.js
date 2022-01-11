import { makeStyles } from "@material-ui/core";
import * as colors from "./colors";

const useStyle = makeStyles(theme => ({
  card: {
    borderRadius:25,
    backgroundColor: colors.card.backgound,
    color: colors.body.foregroundActive,
    minHeight: "50vh",
    minWidth: "calc(50% - 20px)",
    [theme.breakpoints.down('xs')]:{
      minWidth: "94%",
      // transform: 'translateX(calc(-30px))'
    },
    margin:10,
    padding:'14vh 0 8vh 0',
    overflow:'hidden'
  },
}));

export default useStyle;