import { makeStyles, createStyles} from "@material-ui/core";
import { Theme } from "@mui/material";
export const useStyles = makeStyles((theme:Theme) => createStyles({
  street: {
    width: "100%",
    height: "100px",
    backgroundColor: "#404040",
    position: "absolute",
    top: "67%",
  },

  line: {
    width: "80px",
    height: "2px",
    backgroundColor: "#FFFFFF",

    transform: "translate(-50%, -50%)",
  },
  line2: {
    height: "80px",
    width: "2px",
    backgroundColor: "#FFFFFF",
    transform: "translate(-50%, -50%)",
  },
  lines: {
    display: "flex",
    gap: "35px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    flexShrink: 0,
    flexGrow: 0,
    width: "100%",
  },
  lines2: {
    display: "flex",
    gap: "35px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    flexShrink: 0,
    flexGrow: 0,
    height: "100%",
    paddingTop: "30px",
  },
  people: {
    width: "60px",
    height: "20px",
    backgroundColor: "#FFFFFF",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.up("sm")]: {
      width: "160px",
    },
  },
}));

