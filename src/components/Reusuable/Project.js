import React, { useContext } from "react";
import { MainContext } from "../../main_context";
import classes from "../../assets/styles/Project.module.scss";

const Project = ({ image, title, description, link, deployLink }) => {
  const panelContext = useContext(MainContext);
  let panelColor;
  let buttonColor;

  switch (panelContext.theme) {
    case false:
      panelColor = classes.LightBorder;
      buttonColor = "primary";
      break;

    case true:
      panelColor = classes.DarkBorder;
      buttonColor = "secondary";
      break;

    default:
  }

  return (
    <div className={[classes.Project, panelColor].join(" ")}>
      <div style={{ height: "75%" }}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <span>
        {deployLink && (
          <a href={deployLink} target="_blank" rel="noopener noreferrer">
            <button color={buttonColor}>Demo</button>
          </a>
        )}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button color={buttonColor}>Code</button>
        </a>
      </span>
    </div>
  );
};

export default Project;
