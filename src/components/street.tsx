import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import AmpelFüß from "./ampel2";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import { Button } from "@mui/material";
import { BuildWeg } from "../utils/whiteLine";
import { traficLight } from "../lib/Data";
import NebenStraße from "./nebenStraße";
import type { Color, Lights } from "../lib/types";
import HandleResize from "../hooks/handleResize";
import HauptStraße from "./hauptStraße";
import { MyStreet } from "../style/styles";

const Street: React.FC = () => {
  const [activeSignal, setActiveSignal] = useState<Color>("red");
  const [activeSecSignal, setActiveSecSignal] = useState<Color>("green");

  const [click, setClick] = useState<boolean>(false);
  const [secClick, setSecClick] = useState<boolean>(false);
  const light = traficLight.find((lig) => lig.color === activeSignal) as Lights;
  const [füßColor, setFüßColor] = useState<Color>("red");

  const handleClick = () => {
    setClick(true);
  };

  useEffect(() => {
    if (activeSignal === "green") {
      setActiveSecSignal("red");
    }

    if (activeSignal === "yellow") {
      setActiveSecSignal("pink");
    }

    if (activeSignal === "red") {
      setActiveSecSignal("green");
    }

    if (activeSignal === "pink") {
      setActiveSecSignal("yellow");
    }

    return () => {};
  }, [light, activeSignal]);

  //change the color of main traffic light
  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setActiveSignal(light!.next);
      }, light!.wait);
    }

    return () => {};
  }, [light, activeSignal, click]);
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

  const { containerSize } = HandleResize();

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Start
      </Button>

      <NebenStraße
        containerSize={containerSize.height}
        ampColor={click ? activeSignal : "red"}
      />
      {/*------ HauptStraße ------*/}
      <MyStreet>
        <HauptStraße col={click ? activeSecSignal : "green"} />

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
      </MyStreet>
    </>
  );
};

export default Street;
