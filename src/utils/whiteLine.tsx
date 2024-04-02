
import { MyLine, MyLine2, MyPeople } from "../style/styles";


export const BuildLines = ({lineNumber}:{lineNumber: number}) => {

  const lines = [];
  let num = Math.round(lineNumber / 100);
  if (num % 2 !== 0) num--;
  while (1 < num) {
    lines.push(<MyLine key={num}  />);
    num--;
  }

  return lines;
};

export const BuildLinesVertical = ({lineNumber}: {lineNumber:number}) => {

  const lines = [];
  let num = Math.round(lineNumber / 100);
  while (1 < num) {
    lines.push(<MyLine2 key={num}  />);
    num--;
  }

  return lines;
};

export const BuildWeg = ({lineNumber}: {lineNumber:number}) => {

  const pep = [];

  while (1 < lineNumber) {
    pep.push(<MyPeople key={lineNumber}  />);
    lineNumber--;
  }

  return pep;
};
