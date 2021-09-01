import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import Resume from "../../assets/Sinthooran_Ravinathan_Resume.pdf";
import classes from "../../assets/styles/Welcome.module.scss";

const Welcome = ({ theme }) => {
  return (
    <div
      className={[
        classes.Welcome,
        `${!theme ? classes.LightBg : classes.DarkBg}`,
      ].join(" ")}
      id="home"
    >
      <h1>Welcome</h1>
      <div>
        <a
          href="mailto: sinthooranr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail style={{ fontSize: "2.25rem" }} />
        </a>
        <a
          href="https://github.com/SinthooranR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub style={{ fontSize: "2.25rem" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/sinthooranravinathan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin style={{ fontSize: "2.25rem" }} />
        </a>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <AiFillFilePdf style={{ fontSize: "2.25rem" }} />
        </a>
      </div>
    </div>
  );
};

export default Welcome;
