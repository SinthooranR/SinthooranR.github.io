import React from "react";
import MyPic from "../../../assets/images/me.png";
import classes from "./AboutMe.module.scss";

const aboutMe = (props) => (
  <div className={classes.AboutMe}>
    <h1>About Me and My Education</h1>
    <img src={MyPic} alt="avatar" />

    <div className={classes.Description}>
      <p>
        Graduated from the University of Ontario Institute of Technology(UOIT)
        as of May 2020 in Computer Science and aspire to work as a Web/Mobile
        Developer
      </p>
      <span>
        <h2>Interests:</h2>
        <ul className={classes.Interests}>
          <li>
            Interested in learning various languages to help experience the
            worlds of Web and Mobile development
          </li>
          <li>
            Making use of various databases such as MongoDB, Postgres and SQLite
          </li>
          <li>Designing Pages meeting the indviduals criteria</li>
        </ul>
      </span>

      <h2>Skills</h2>
      <span className={classes.SkillGrid}>
        <div>
          <ul>
            <h3>Languages</h3>
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS/SASS</li>
            <li>JavaScript/TypeScript</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Frameworks/Libraries</h3>
            <li>VueJS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Express</li>
            <li>Axios</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Tools</h3>
            <li>Android Studio</li>
            <li>Visual Studio</li>
            <li>Git</li>
            <li>IntelliJ</li>
            <li>Node</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Operating Systems</h3>
            <li>Microsoft Windows</li>
            <li>Mac OS</li>
            <li>Linux</li>
          </ul>
        </div>
      </span>
    </div>
  </div>
);

export default aboutMe;
