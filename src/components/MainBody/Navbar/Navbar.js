import React, { useContext } from "react";
import { MainContext } from "../../../main_context";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import {Link} from "react-scroll";
import classes from "./Navbar.module.scss";

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

      <div>
        <Link activeClass={classes.ActiveScroll} to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
        <Link activeClass={classes.ActiveScroll} to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
        <Link activeClass={classes.ActiveScroll} to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
      </div>

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
