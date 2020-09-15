import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import './App.scss';

function App() {
  return (
    <div className="App" id="home">
      <Header>
        <Navigation />
      </Header>
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
