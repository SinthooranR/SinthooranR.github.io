import React, { useContext } from "react";
import { MainContext } from "../../../main_context";
import { Email, GitHub, LinkedIn, PictureAsPdfSharp } from "@material-ui/icons";
import Resume from "../../../assets/Sinthooran_Ravinathan_Resume.pdf";
import classes from "./Welcome.module.scss";

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
    <div className={[classes.Welcome, bgTheme].join(" ")} id="home">
      <h1>Welcome</h1>
      <div>
        <a
          href="mailto: sinthooranr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email fontSize="large" />
        </a>
        <a
          href="https://github.com/SinthooranR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/sinthooranravinathan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn fontSize="large" />
        </a>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <PictureAsPdfSharp fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Welcome;
