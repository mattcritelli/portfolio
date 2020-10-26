import React, { useState } from 'react';
import './Skills.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import SkillBox from './SkillBox/SkillBox';
import jsIcon from '../assets/svg/javascript-icon2.svg';
import reactIcon from '../assets/svg/react-icon.svg';
import reduxIcon from '../assets/svg/redux-icon.svg';
import cssIcon from '../assets/svg/css-icon.svg';
import htmlIcon from '../assets/svg/html-icon.svg';
import apiIcon from '../assets/svg/api-icon.svg';
import nodeIcon from '../assets/svg/node-icon.svg';
import mongoDBIcon from '../assets/svg/mongodb-icon.svg';
import sassIcon from '../assets/svg/sass-icon.svg';
// import rubyRailsIcon from '../assets/svg/ruby-rails-icon.svg';
// import githubIcon from '../assets/svg/github-icon.svg';
// import teamIcon from '../assets/svg/team-icon.svg';
// import clientIcon from '../assets/svg/client-icon.svg';
// import rubyIcon from '../assets/svg/ruby-icon.svg';

function Skills() {
  const [selectedSkillBox, setSkillBox] = useState("front-state");

  const handleClick = (e) => setSkillBox(e.target.id)

  const skillBoxes = () => {
    const boxList = [
      { id: 1,
        boxId: 'front',
        boxText: 'front end',
        stateId: 'front-state',
        skillList: [
          {
            id: 1,
            icon: reactIcon,
            text: 'React (including Router, Hooks, Context API)',
          },
          {
            id: 2,
            icon: reduxIcon,
            text: 'Redux state containers and data-flow architecture',
          },
          {
            id: 3,
            icon: jsIcon,
            text: 'Modern Javascript (ES6+)',
          },
          {
            id: 4,
            icon: cssIcon,
            text: 'CSS3 & Responsive Web Design (i.e. Flexbox and Grid)',
          },
          {
            id: 5,
            icon: htmlIcon,
            text: 'HTML5',
          },
          {
            id: 6,
            icon: sassIcon,
            text: 'Preprocessors & methodologies (i.e. Sass and BEM)',
          },

        ]
      },
      { id: 2,
        boxId: 'full',
        boxText: 'full stack',
        stateId: 'full-state',
        skillList: [
          {
            id: 1,
            icon: nodeIcon,
            text: 'Node.js',
          },
          {
            id: 2,
            icon: apiIcon,
            text: 'Api Integration',
          },
          {
            id: 3,
            icon: mongoDBIcon,
            text: 'MongoDB',
          },
        ]
      }
    ];    

    return boxList.map(box => (
      <SkillBox
        key={box.id}
        boxId={box.boxId}
        stateId={box.stateId}
        boxText={box.boxText}
        clickHandler={handleClick}
        isSelected={selectedSkillBox === box.stateId}
        itemList={box.skillList}
      />
    ));
  };

  return (
    <section className="Skills" id="skills_section">
      <SectionHeader
        topLine="Skills"
        bottomLine=" & Experience"
      />
      <div className="Skills__container">
        { skillBoxes() }
      </div>
    </section>
  );
}

export default Skills;
