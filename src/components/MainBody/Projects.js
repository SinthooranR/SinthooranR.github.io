import React from "react";
import Project from "../Reusuable/Project";
import projectList from "../../ProjectList.json";
import classes from "../../assets/styles/Projects.module.scss";

const projects = () => {
  return (
    <div id="projects">
      <div className={classes.ProjectsPage}>
        <h1>Projects</h1>
        <div className={classes.Projects}>
          {projectList.map((proj, key) => (
            <Project key={key} {...proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
