import React from "react";
import Project from "../../Reusuable/Project/Project";
import projectList from "../../../ProjectList.json";
import classes from "./Projects.module.css";

const projects = (props) => {
  return (
    <div>
      <h1>Projects</h1>
      <div className={classes.Projects}>
        {projectList.map((proj, key) => (
          <Project
            key={key}
            image={proj.image}
            title={proj.title}
            description={proj.description}
            link={proj.link}
          />
        ))}
      </div>
    </div>
  );
};

export default projects;
