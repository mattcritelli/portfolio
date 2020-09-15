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
      id={text}
      onClick={clickHandler}
    >
      {text}
    </li>
  );
}

export default NavigationItem;
