import React, { useState } from "react";
import Navbar from "./components/MainBody/Navbar";
import Welcome from "./components/MainBody/Welcome";
import AboutMe from "./components/MainBody/AboutMe";
import Projects from "./components/MainBody/Projects";
import { MainContext } from "./main_context";
import classes from "./App.module.scss";

function App() {
  const [theme, setTheme] = useState(true);
  let currentTheme;

  switch (theme) {
    case false:
      currentTheme = classes.Light;
      break;
    case true:
      currentTheme = classes.Dark;
      break;
    default:
  }

  const themeSwitcher = () => {
    setTheme((theme) => !theme);
    window.scrollTo({ top: window.pageYOffset - 1, behavior: "smooth" });
  };

  return (
    <MainContext.Provider value={{ theme: theme, switchTheme: themeSwitcher }}>
      <div className={[classes.App, currentTheme].join(" ")}>
        <Navbar theme={theme} />
        <Welcome theme={theme} />
        <AboutMe theme={theme} />
        <Projects theme={theme} />
      </div>
    </MainContext.Provider>
  );
}

export default App;
