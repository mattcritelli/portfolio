import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './App.scss';

function App() {
  return (
    <div className="App" id="home">
      <Header>
        <Navigation />
      </Header>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
