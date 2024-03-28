import { Paper } from "@material-ui/core";
import {useStyles} from "../style/styles";

export const BuildLines = ({lineNumber}:{lineNumber: number}) => {
  const classes = useStyles()
  const lines = [];
  let num = Math.round(lineNumber / 100);
  if (num % 2 !== 0) num--;
  while (1 < num) {
    lines.push(<Paper key={num} className={classes.line} />);
    num--;
  }

  return lines;
};

export const BuildLinesVertical = ({lineNumber}: {lineNumber:number}) => {
  const classes = useStyles()
  const lines = [];
  let num = Math.round(lineNumber / 100);
  while (1 < num) {
    lines.push(<Paper key={num} className={classes.line2} />);
    num--;
  }

  return lines;
};

export const BuildWeg = ({lineNumber}: {lineNumber:number}) => {
  const classes = useStyles()
  const pep = [];

  while (1 < lineNumber) {
    pep.push(<Paper key={lineNumber} className={classes.people} />);
    lineNumber--;
  }

  return pep;
};
