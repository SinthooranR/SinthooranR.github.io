import React, { useState } from "react";
import Navbar from "./components/MainBody/Navbar/Navbar";
import Welcome from "./components/MainBody/Welcome/Welcome";
import AboutMe from "./components/MainBody/AboutMe/AboutMe";
import Projects from "./components/MainBody/Projects/Projects";
import { MainContext } from "./main_context";
import classes from "./App.module.scss";

function App() {
  const [theme, setTheme] = useState(false);
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
  };

  return (
    <MainContext.Provider value={{ theme: theme, switchTheme: themeSwitcher }}>
      <div className={[classes.App, currentTheme].join(" ")}>
        <Navbar />
        <Welcome />
        <AboutMe />
        <Projects />
      </div>
    </MainContext.Provider>
  );
}

export default App;
