import React from 'react';
import './SkillBoxItem.scss';

function SkillBoxItem ({
  text,
  icon
}) {
  return (
    <li className="SkillBoxItem">
      <img
        src={icon}
        alt=""
        className="SkillBoxItem__icon"
      />
      {text}
    </li>
  );
}

export default SkillBoxItem;
