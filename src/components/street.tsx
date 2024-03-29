import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import AmpelFüß from "./ampel2";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import { Button } from "@mui/material";
import { useStyles } from "../style/styles";
import { BuildWeg } from "../utils/whiteLine";
import { traficLight } from "../lib/Data";
import NebenStraße from "./nebenStraße";
import type { Color, Lights } from "../lib/types";
import HandleResize from "../hooks/handleResize";
import HandleColor from "../hooks/handleColor";
import HauptStraße from "./hauptStraße";

const Street: React.FC = () => {
  const [activeSignal, setActiveSignal] = useState<Color>("green");
  const [click, setClick] = useState<boolean>(false);
  const [secClick, setSecClick] = useState<boolean>(false);
  const light = traficLight.find((lig) => lig.color === activeSignal) as Lights;
  const [füßColor, setFüßColor] = useState<Color>("red");

  const handleClick = () => {
    setClick(true);
    
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

  const classes = useStyles();
  const { containerSize } = HandleResize();
  const activeSecSignal = HandleColor();
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
        <HauptStraße col={click ? activeSignal : "green"} />

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
