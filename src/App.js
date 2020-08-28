import React, { Component } from 'react';
import './App.css';
import Navbar from './components/MainBody/Navbar/Navbar';
import Welcome from './components/MainBody/Welcome/Welcome';
import AboutMe from './components/MainBody/AboutMe/AboutMe';
import Projects from './components/MainBody/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome />
        <hr />
        <AboutMe />
        <Projects />
      </div>
    );
  }
}

export default App;
