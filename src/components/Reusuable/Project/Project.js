import React, { useContext } from "react";
import { MainContext } from "../../../main_context";
import { GitHub } from "@material-ui/icons";
import classes from "./Project.module.css";

const Project = (props) => {
  const panelContext = useContext(MainContext);
  let panelColor;

  switch (panelContext.theme) {
    case false:
      panelColor = classes.LightBorder;
      break;

    case true:
      panelColor = classes.DarkBorder;
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
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <GitHub />
      </a>
    </div>
  );
};

export default Project;
