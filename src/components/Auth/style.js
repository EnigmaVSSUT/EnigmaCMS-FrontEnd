import { makeStyles } from "@material-ui/core";
import * as colors from "./../../colors";

const useStyle = makeStyles(theme => ({
  card: {
    backgroundColor: colors.card.backgound,
    color: colors.body.foregroundActive,
    minHeight: "50vh",
    minWidth: "calc(50% - 20px)",
    margin:10,
  },
}));

export default useStyle