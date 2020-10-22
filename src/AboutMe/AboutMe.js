import React from 'react';
import './AboutMe.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import myPhoto from '../assets/images/matt-photo.jpg'

function AboutMe() {
  return (
    <section className="AboutMe" id="about_section">
      <SectionHeader
        topLine="My"
        bottomLine=" Story"
      />
      <div className="AboutMe__container">
        <img src={myPhoto} alt="" className="AboutMe__image"/>
        <div className="AboutMe__text-outer-container">
          <div className="AboutMe__text-inner-container">
            <p className="AboutMe__text">
              I'm an experienced front-end developer with a passion for working in the space where people and code intersect. The main technologies I use everyday are JavaScript, React, Redux, HTML5, and CSS3. While my most recent experience is focused on these specific client-side technologies, I am excited for opportunities where I can continue to grow on the front-end or broaden my skill-set across the stack.
            </p>
            <p className="AboutMe__text">
              Prior to my life as a software developer, I worked as a media planner at some of the top ad agencies in New York City. During that time I developed a lot of skills which have resulted in me being a better developer today.
            </p>
            <p className="AboutMe__text">
              As a manager, I was responsible for setting priorities and deadlines and maintaining constant communication with our internal and external teams and departments. Being the primary client contact at the agency, I needed to understand how to communicate our internal technical decisions and deliberations to non-technical stakeholders.
            </p>
            <p className="AboutMe__text">
              While I thoroughly enjoyed the more technical and analytical side of that career, I felt it was missing the creative component which I find deeply rewarding in software engineering.
            </p>
            <p className="AboutMe__text">
              After my time living and working in Manhattan, I decided to trade the Big Apple for the Rocky Mountains. When I'm not building something cool, you can find me somewhere outside or flipping through some Lonely Planet books planning my next trip. I love traveling, scuba diving, hiking, snowboarding, and dabbling in foreign languages.
            </p> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;