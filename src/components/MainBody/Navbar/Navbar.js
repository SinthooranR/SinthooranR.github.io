import React, { useContext } from "react";
import { Email, GitHub, LinkedIn, PictureAsPdfSharp } from "@material-ui/icons";
import Resume from "../../../assets/Sinthooran_Ravinathan_Resume.pdf";
import { MainContext } from "../../../main_context";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const mainTheme = useContext(MainContext);

  const themeSwitch = (event) => {
    mainTheme.switchTheme();
    event.preventDefault();
  };

  let navTheme;

  switch (mainTheme.theme) {
    case false:
      navTheme = classes.LightNav;
      break;
    case true:
      navTheme = classes.DarkNav;
      break;
    default:
  }

  return (
    <header className={[classes.Navbar, navTheme].join(" ")}>
      <span className={classes.Name}>
        <h3>Sinthooran Ravinathan</h3>
      </span>

      <nav>
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
      </nav>
      <div onClick={themeSwitch} className={classes.ThemeIcon}>
        {!mainTheme.theme ? (
          <WbSunnyIcon fontSize="large" />
        ) : (
          <NightsStayIcon fontSize="large" />
        )}
      </div>
    </header>
  );
};

export default Navbar;
