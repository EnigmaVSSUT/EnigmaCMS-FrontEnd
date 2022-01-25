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
      minWidth: "100%",
      transform: 'translateX(calc(-28px))'
    },
    marginLeft:10,
    marginRight:5,
    marginTop:5,
    marginBottom:0,
    padding:'16vh 0 15vh 0',
    overflow:'hidden'
  },
}));

export default useStyle;