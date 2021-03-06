import React from 'react';
import './Projects.scss';
import ProjectBox from './ProjectBox/ProjectBox';
import SectionHeader from '../SectionHeader/SectionHeader';

const Projects = () => (
  <section className="Projects" id="projects_section">
    <SectionHeader
      topLine="Work"
      bottomLine=" Experience"
    />
    <div className="Projects__text-container">
      <p className="Projects__text">
        During my 2+ years at Bimaire I have been involved at all stages
        of the SDLC for several different applications. Contributing
        throughout the development process has given me valuable insight
        into how customer requirements impact design and architectural
        decisions.
      </p>
      <p className="Projects__text">
        As part of a small and scrappy dev team, it was necessary to
        take control of my learning path, and I have invested in advancing across
        different languages and development skill sets.
      </p>
      <p className="Projects__text">
        While I am unable to show screenshots or link directly to current
        projects due to an employer agreement, I have included below a brief description of
        the projects I have managed or been heavily involved in. I would love
        the opportunity to discuss these projects in greater detail.
      </p>
    </div>
    <div className="Projects__container">
      <ProjectBox />
    </div>
  </section>
);

export default Projects;