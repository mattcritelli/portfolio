/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavigationItem.scss';

function NavigationItem ({
  text,
  clickHandler,
  isSelected,
  mobileNavOpen
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
