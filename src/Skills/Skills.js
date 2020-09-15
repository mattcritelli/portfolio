import React from 'react';
import './Skills.scss';
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
import teamIcon from '../assets/svg/team-icon.svg';

function Skills() {
  return (
    <section className="Skills">
      <h2 className="Skills__section-heading">
        <span>Skills</span>
        <span>& Experience</span>
      </h2>
      <div className="Skills__container">
        <div className="Skills__box">
          <h3 className="Skills__box-heading">Front end</h3>
          <ul className="Skills__list">
            <li className="Skills__item">
              <img src={reactIcon} alt="" className="Skills__icon"/>
              React
            </li>
            <li className="Skills__item">
              <img src={jsIcon} alt="" className="Skills__icon"/>
              Modern Javascript (ES6+)
            </li>
            <li className="Skills__item">
              <img src={cssIcon} alt="" className="Skills__icon"/>
              CSS3
            </li>
            <li className="Skills__item">
              <img src={htmlIcon} alt="" className="Skills__icon"/> 
              HTML5
            </li>
          </ul>
        </div>
        <div className="Skills__box">
          <h3 className="Skills__box-heading">Full Stack</h3>
          <ul className="Skills__list">
            <li className="Skills__item">
              <img src={nodeIcon} alt="" className="Skills__icon"/>
              Node.js
            </li>
            <li className="Skills__item">
              <img src={apiIcon} alt="" className="Skills__icon"/>
              Api Integration
            </li>
            <li className="Skills__item">
              <img src={mongoDBIcon} alt="" className="Skills__icon"/>
              MongoDB
            </li>
            <li className="Skills__item">
              <img src={rubyRailsIcon} alt="" className="Skills__icon"/>
              Ruby on Rails
            </li>
            <li className="Skills__item">
              <img src={githubIcon} alt="" className="Skills__icon"/>
              Github & Version Control
            </li>
          </ul>
        </div>
        <div className="Skills__box">
          <h3 className="Skills__box-heading">Soft Skills</h3>
          <ul className="Skills__list">
            <li className="Skills__item">
              <img src={teamIcon} alt="" className="Skills__icon"/>
              Team management
            </li>
            <li className="Skills__item">
              <img src={clientIcon} alt="" className="Skills__icon"/>
              Client facing/relationships
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;