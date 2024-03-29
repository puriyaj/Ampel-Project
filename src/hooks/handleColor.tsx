import { useEffect, useState } from "react";
import { traficLightNebenStraße } from "../lib/Data";
import { Color, Lights } from "../lib/types";



const HandleColor = () => {
  const [activeSecSignal, setActiveSecSignal] = useState<Color>("red");
  const lightSec = traficLightNebenStraße.find(
    (lig) => lig.color === activeSecSignal
  ) as Lights;
  useEffect(() => {
    const timerId = setTimeout(() => {
      setActiveSecSignal(lightSec!.next);
    }, lightSec!.wait);

    return () => {
      clearTimeout(timerId);
    };
  }, [lightSec, activeSecSignal]);
  return activeSecSignal;
}

export default HandleColor