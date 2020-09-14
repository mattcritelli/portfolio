import React from 'react';
import './Header.scss';

function Header(props) {
  return (
    <header className="Header">
      {props.children}
      <div className="welcome-message">
        Hey there! I'm Matt, a Software Engineer based in Denver.
      </div>
    </header>
  );
}

export default Header;