import React from 'react';
import './Header.scss';

function Header(props) {
  return (
    <header className="Header">
      {props.children}
      <p className="welcome-message">
        Hey there! I'm Matt, a Software Engineer based in Denver.
      </p>
    </header>
  );
}

export default Header;
