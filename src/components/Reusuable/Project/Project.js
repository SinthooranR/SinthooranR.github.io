import React, { useContext, useState } from "react";
import { MainContext } from "../../../main_context";
import classes from "./Project.module.css";

const Project = (props) => {
  const [panel, setPanel] = useState(false);
  const panelContext = useContext(MainContext);

  const panelSwitcher = (event) => {
    setPanel((panel) => !panel);
    event.preventDefault();
  };

  let panelColor;
  let buttonColor;
  let githubColor;

  switch (panelContext.theme) {
    case false:
      panelColor = classes.LightBorder;
      buttonColor = classes.Light;
      githubColor = classes.GitLight;
      break;

    case true:
      panelColor = classes.DarkBorder;
      buttonColor = classes.Dark;
      githubColor = classes.GitDark;
      break;

    default:
  }

  let panelDisplay;

  if (!panel) {
    panelDisplay = (
      <div className={classes.Transition}>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
      </div>
    );
  } else {
    panelDisplay = (
      <div className={classes.Transition}>
        <div style={{ height: "60%" }}>
          <h1 style={{ marginBottom: "20%" }}>Libraries Used</h1>
          <p style={{ marginBottom: "25%" }}>{props.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={[classes.Project, panelColor].join(" ")}>
      {panelDisplay}
      <div>
        <button onClick={panelSwitcher} className={buttonColor}>
          {!panel ? "Libraries" : "Return"}
        </button>
        <button className={githubColor}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Visit Github
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
