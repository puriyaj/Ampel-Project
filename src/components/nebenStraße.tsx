import { Color } from "../lib/types"
import { MyLines2 } from "../style/styles"
import { BuildLinesVertical } from "../utils/whiteLine"
import Ampel3 from "./ampel3"

const NebenStraße=({containerSize,ampColor}:{containerSize:number,ampColor:Color}) => {
  

  
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
        
        <MyLines2>
          <BuildLinesVertical lineNumber={containerSize} />
        </MyLines2>
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