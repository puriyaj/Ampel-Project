import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import AmpelFüß from "./ampel2";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import Ampel from "./ampel";
import { Button } from "@mui/material";
import { useStyles } from "../style/styles";
import { BuildLines, BuildWeg } from "../utils/whiteLine";
import { traficLight, traficLightNebenStraße } from "../lib/Data";
import NebenStraße from "./nebenStraße";

const Street: React.FC = () => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [activeSecSignal, setActiveSecSignal] = useState("red");
  const [activeSignal, setActiveSignal] = useState("green");
  const [click, setClick] = useState(false);
  const [secClick, setSecClick] = useState(false);
  const light = traficLight.find((lig) => lig.color === activeSignal);
  const lightSec = traficLightNebenStraße.find(
    (lig) => lig.color === activeSecSignal
  );
  const [füßColor, setFüßColor] = useState("red");

  const handleClick = () => {
    setClick(true);
    setActiveSignal("green");
  };

  //change the color of main traffic light
  useEffect(() => {
    const timerId = setTimeout(() => {
      setActiveSignal(light!.next);
    }, light!.wait);

    return () => {
      clearTimeout(timerId);
    };
  }, [light, activeSignal]);
  //change the color of small light
  useEffect(() => {
    if (secClick && light!.color != "green") {
      setFüßColor("green");
      setTimeout(() => {
        setSecClick(false);
      }, 5000);
    } else if (secClick && light!.color == "green") {
      setFüßColor("red");
      setTimeout(() => {
        setSecClick(true);
      }, light!.wait);
    } else {
      setFüßColor("red");
    }
    return () => {};
  }, [light, activeSignal, füßColor, secClick]);

  //change the color of secondary traffic light
  useEffect(() => {
    const timerId = setTimeout(() => {
      setActiveSecSignal(lightSec!.next);
    }, lightSec!.wait);

    return () => {
      clearTimeout(timerId);
    };
  }, [lightSec, activeSecSignal]);

  //  add white line if window is big
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setContainerSize({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const classes = useStyles();

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Start
      </Button>

      <NebenStraße
        containerSize={containerSize.height}
        ampColor={click ? activeSecSignal : "red"}
      />
      {/*------ HauptStraße ------*/}
      <div className={classes.street}>
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            right: "52%",
          }}
        >
          <Ampel col={click ? activeSignal : "green"} />
        </div>
        <div
          style={{
            position: "relative",
            top: "50%",
            paddingLeft: "60px",
            paddingRight: "10px",
          }}
        >
          <div className={classes.lines}>
            <BuildLines lineNumber={containerSize.width} />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "15%",
            width: "30px",
          }}
        >
          {/*------- Füßgänger ------ */}
          <Stack spacing={9}>
            <Stack alignItems="center" spacing={3}>
              <AmpelFüß col={secClick ? füßColor : "red"} />
              <Button onClick={() => setSecClick(true)}>
                <AdjustOutlinedIcon color="primary" />
              </Button>
            </Stack>
            <Stack spacing={1}>
              <BuildWeg lineNumber={4} />
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Street;
