import React, { useContext } from "react";
import { MainContext } from "../../../main_context";
import { GitHub } from "@material-ui/icons";
import classes from "./Project.module.css";

const Project = (props) => {
  const panelContext = useContext(MainContext);
  let panelColor;
  let githubColor;

  switch (panelContext.theme) {
    case false:
      panelColor = classes.LightBorder;
      githubColor = classes.GitLight;
      break;

    case true:
      panelColor = classes.DarkBorder;
      githubColor = classes.GitDark;
      break;

    default:
  }

  return (
    <div className={[classes.Project, panelColor].join(" ")}>
      <div style={{ height: "75%" }}>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className={githubColor}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <GitHub />
        </a>
      </div>
    </div>
  );
};

export default Project;
