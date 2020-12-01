import React, { useContext } from "react";
import { MainContext } from "../../../main_context";
import classes from "./Welcome.module.css";

const Welcome = (props) => {
  const mainTheme = useContext(MainContext);

  let bgTheme;

  switch (mainTheme.theme) {
    case false:
      bgTheme = classes.LightBg;
      break;
    case true:
      bgTheme = classes.DarkBg;
      break;
    default:
  }

  return (
    <div className={[classes.Welcome, bgTheme].join(" ")}>
      <h1>Welcome</h1>
    </div>
  );
};

export default Welcome;
