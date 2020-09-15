import React from 'react';
import SkillBoxItem from '../SkillBoxItem/SkillBoxItem'
import './SkillBox.scss';

function SkillBox ({
  boxText,
  clickHandler,
  isSelected,
  itemList,
}) {
  return (
    <div
      className="SkillBox"
      onClick={clickHandler}
    >
      <h3 className="SkillBox__heading">{boxText}</h3>
      <ul className="SkillBox__list">
        {
          itemList.map(item => (
            <SkillBoxItem
              text={item.text}
              icon={item.icon}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default SkillBox;
