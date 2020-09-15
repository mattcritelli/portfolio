import React, { useState } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './Navigation.scss';

function Navigation() {
  const [selectedNavItem, setNavItem] = useState("home");

  const handleClick = (e) => {
    e.preventDefault();

    const sectionElement = document.getElementById(`${e.target.innerHTML}`);
    sectionElement.scrollIntoView({ behavior: "smooth" });
    setNavItem(e.target.id);
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
        clickHandler={handleClick}
        isSelected={selectedNavItem === item.text}
      />
    ))
  }

  return (
    <nav className="Navigation">
      <div className="Navigation__brand">Matt Critelli</div>
      <ul className="Navigation__list">
        { navItems() }
      </ul>
    </nav>
  );
}

export default Navigation;
