import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header>
        <Navigation />
      </Header>
      <section className="about-me">

      </section>
    </div>
  );
}

export default App;
