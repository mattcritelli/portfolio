import React from 'react';
import './AboutMe.scss';
import myPhoto from '../assets/images/matt-photo.jpg'

function AboutMe() {
  return (
    <section className="AboutMe" id="about">
      <h2 className="AboutMe__section-heading">
        <span>My</span>
        <span>Story</span>
      </h2>
      <div className="AboutMe__container">
        <img src={myPhoto} alt="" className="AboutMe__image"/>
        <div className="AboutMe__text-outer-container">
          <div className="AboutMe__text-inner-container">
            <p className="AboutMe__text">
              I'm a full-stack software developer based in the Mile High City. While back-end development is what originally drew me to the crazy world of coding, I've developed a huge appreciation for the front-end. I love working in the space where people and code intersect.
            </p>
            <p className="AboutMe__text">
              I am comfortable working with a variety of different technologies including Ruby/Rails, PostgreSQL, mongoDB, NodeJS, Express, Javascript, jQuery, HTML5, CSS3. My current goal is to learn React inside and out over the next few months.
            </p>
            <p className="AboutMe__text">
              After 10 years of living and working in Manhattan, I decided to trade the Big Apple for the Rocky Mountains. When I'm not trying to build something cool, you'll probably find me somewhere outside or flipping through some Lonely Planet books planning my next trip. I love traveling, scuba diving, hiking, snowboarding, and fishing.
            </p> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;