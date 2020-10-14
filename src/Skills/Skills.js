import React, { useState } from 'react';
import './Skills.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import SkillBox from './SkillBox/SkillBox';
import jsIcon from '../assets/svg/javascript-icon2.svg';
import reactIcon from '../assets/svg/react-icon.svg';
import cssIcon from '../assets/svg/css-icon.svg';
import htmlIcon from '../assets/svg/html-icon.svg';
import apiIcon from '../assets/svg/api-icon.svg';
// import rubyIcon from '../assets/svg/ruby-icon.svg';
import nodeIcon from '../assets/svg/node-icon.svg';
import mongoDBIcon from '../assets/svg/mongodb-icon.svg';
import rubyRailsIcon from '../assets/svg/ruby-rails-icon.svg';
import githubIcon from '../assets/svg/github-icon.svg';
import clientIcon from '../assets/svg/client-icon.svg';
import sassIcon from '../assets/svg/sass-icon.svg';
import teamIcon from '../assets/svg/team-icon.svg';

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
            icon: jsIcon,
            text: 'Modern Javascript (ES6+)',
          },
          {
            id: 3,
            icon: cssIcon,
            text: 'CSS3 & Responsive Web Design (including Flexbox and Grid)',
          },
          {
            id: 4,
            icon: htmlIcon,
            text: 'HTML5',
          },
          {
            id: 5,
            icon: sassIcon,
            text: 'Preprocessors & methodologies (i.e. BEM)',
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
          {
            id: 4,
            icon: rubyRailsIcon,
            text: 'Ruby on Rails',
          },
          {
            id: 5,
            icon: githubIcon,
            text: 'Github & Version Control',
          },
        ]
      },
      { id: 3,
        boxId: 'soft',
        boxText: 'soft skills',
        stateId: 'soft-state',
        skillList: [
          {
            id: 1,
            icon: teamIcon,
            text: 'Team management',
          },
          {
            id: 2,
            icon: clientIcon,
            text: 'Client management',
          },
        ]
      },
      // { id: 4,
      //   boxId: 'soft',
      //   boxText: 'soft skills',
      //   stateId: 'soft-state',
      //   skillList: [
      //     {
      //       id: 1,
      //       icon: teamIcon,
      //       text: 'Team management',
      //     },
      //     {
      //       id: 2,
      //       icon: clientIcon,
      //       text: 'Client management',
      //     },
      //   ]
      // },
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
