import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../main_context";
import { BsMoon } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import classes from "../../assets/styles/Navbar.module.scss";

const Navbar = ({ theme }) => {
  const mainTheme = useContext(MainContext);

  const themeSwitch = () => {
    mainTheme.switchTheme();
  };

  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        if (theme) {
          setNavClass(classes.DarkNav);
        } else {
          setNavClass(classes.LightNav);
        }
      } else {
        setNavClass(classes.NavReset);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header className={[classes.Navbar, navClass].join(" ")}>
      <span className={classes.Name}>
        <h3>Sinthooran Ravinathan</h3>
      </span>

      <div className={classes.NavLinks}>
        <Link
          activeClass={classes.ActiveScroll}
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass={classes.ActiveScroll}
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass={classes.ActiveScroll}
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
      </div>

      <div onClick={themeSwitch} className={classes.ThemeIcon}>
        {!theme ? (
          <FaSun style={{ fontSize: "2.25rem" }} />
        ) : (
          <BsMoon style={{ fontSize: "2.25rem" }} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
