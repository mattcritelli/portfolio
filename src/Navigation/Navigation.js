import React from 'react';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation__brand">Matt Critelli</div>
      <ul className="Navigation__list">
        <li className="Navigation__item">Home</li>
        <li className="Navigation__item">About Me</li>
        <li className="Navigation__item">Skills</li>
        <li className="Navigation__item">Projects</li>
        <li className="Navigation__item">Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;