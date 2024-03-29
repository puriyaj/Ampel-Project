import { Color } from "../lib/types"
import { useStyles } from "../style/styles"
import { BuildLinesVertical } from "../utils/whiteLine"
import Ampel3 from "./ampel3"

const NebenStraße=({containerSize,ampColor}:{containerSize:number,ampColor:Color}) => {
  const classes = useStyles()

  
return (
  <>
   <div
        style={{
          width: "100px",
          height: "100%",
          backgroundColor: "#404040",
          position: "absolute",
          left: "50%",
        }}
      >
        
        <div className={classes.lines2}>
          <BuildLinesVertical lineNumber={containerSize} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "67%",
            left: "100%",
          }}
        >
          <Ampel3 col={ampColor} />
        </div>
      </div>
  </>
)
}

export default NebenStraße