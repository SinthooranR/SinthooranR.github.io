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
      <h2>
        Welcome, Scroll down for more, or use the Navigation above and check out
        the external links
      </h2>
    </div>
  );
};

export default Welcome;
