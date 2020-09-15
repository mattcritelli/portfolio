import React from 'react';
import './NavigationItem.scss';

function NavigationItem ({
  text,
  clickHandler,
  isSelected
}) {
  return (
    <li
      className={`NavigationItem${isSelected ? ' selected' : ''}`}
      onClick={clickHandler}
    >
      <a className="NavigationItem__link">{text}</a>
    </li>
  );
}

export default NavigationItem;
