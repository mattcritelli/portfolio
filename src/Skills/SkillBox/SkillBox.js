import React from 'react';
import SkillBoxItem from '../SkillBoxItem/SkillBoxItem'
import './SkillBox.scss';

function SkillBox ({
  stateId,
  boxText,
  clickHandler,
  isSelected,
  itemList,
}) {
  return (
    <div
      id={stateId}
      className="SkillBox"
      onClick={(e) => clickHandler(e)}
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
