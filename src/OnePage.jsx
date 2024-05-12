import { useState } from "react";
import MainContent from "./onePageComponents/MainContent";
import Navbar from "./onePageComponents/Navbar";

export default function OnePage() {
  const [lightMode, setLightMode] = useState(false);

  function toggleFunction() {
    // console.log("good");
    setLightMode((prevMode) => !prevMode);
  }

  return (
    <div>
      <Navbar lightMode={lightMode} toggleFunction={toggleFunction} />
      <MainContent lightMode={lightMode} />
    </div>
  );
}
