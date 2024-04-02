import HandleResize from "../hooks/handleResize"
import { Color } from "../lib/types"
import { MyLines } from "../style/styles"
import { BuildLines } from "../utils/whiteLine"
import Ampel from "./ampel"

const HauptStraße = ({col}:{col:Color}) => {
const {containerSize} = HandleResize()
return (
  <>
  <div
          style={{
            position: "absolute",
            bottom: "100%",
            right: "52%",
          }}
        >
          <Ampel col={col} />
        </div>
        <div
          style={{
            position: "relative",
            top: "50%",
            paddingLeft: "60px",
            paddingRight: "10px",
          }}
        >
          <MyLines>
            <BuildLines lineNumber={containerSize.width} />
          </MyLines>
        </div>
  </>
)
}

export default HauptStraße