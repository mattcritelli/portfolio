import React from 'react';
import './NavigationItem.scss';

function NavigationItem ({
  text,
  clickHandler,
  isSelected,
  mobileNavOpen,
  delay
}) {
  return (
    <li
      className={`
        NavigationItem
        ${isSelected ? ' selected' : ''}
        ${mobileNavOpen ? ' open' : ''}
      `}
      onClick={clickHandler}
    >
      <a className="NavigationItem__link" id={text}>{text}</a>
    </li>
  );
}

export default NavigationItem;
