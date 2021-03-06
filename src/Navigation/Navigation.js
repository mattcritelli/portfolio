import React, { useState } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './Navigation.scss';

function Navigation() {
  const [selectedNavItem, setNavItem] = useState("home");
  const [mobileNavOpen, setMobileNav] = useState(false);

  const handleNavItemClick = (e) => {
    const sectionElement = document.getElementById(`${e.target.innerHTML}_section`);
    sectionElement.scrollIntoView({
      behavior: `${mobileNavOpen ? 'auto' : 'smooth'}`
    });    
    setNavItem(e.target.id);

    if(mobileNavOpen) toggleMobileMenu();
  }

  const toggleMobileMenu = () => {
    setMobileNav(!mobileNavOpen);
  }
  
  const navItems = () => {
    const itemList = [
      {id: 1, text: 'home' },
      {id: 2, text: 'about' },
      {id: 3, text: 'skills' },
      {id: 4, text: 'projects' },
      {id: 5, text: 'contact' },
    ];    

    return itemList.map(item => (
      <NavigationItem
        key={item.id}
        text={item.text}
        clickHandler={handleNavItemClick}
        isSelected={selectedNavItem === item.text}
        mobileNavOpen={mobileNavOpen}
      />
    ))
  }

  return (
    <nav className="Navigation">
      <input
        type="checkbox"
        className="Navigation__checkbox"
        id="navi-toggle"
        onClick={toggleMobileMenu}
      />
      <label htmlFor="navi-toggle" className="Navigation__button">
        <span className="Navigation__icon">&nbsp;</span>
      </label>
      <div className="Navigation__brand">{"<Matt Critelli />"}</div>
      <ul className="Navigation__list">
        { navItems() }
      </ul>
    </nav>
  );
}

export default Navigation;
