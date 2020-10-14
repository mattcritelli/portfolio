import React from 'react';
import './Projects.scss';
import ProjectBox from './ProjectBox/ProjectBox';
import SectionHeader from '../SectionHeader/SectionHeader';

const Projects = () => (
  <section className="Projects" id="projects_section">
    <SectionHeader
      topLine="Work"
      bottomLine="Examples"
    />
    <div className="Projects__text-container">
      <p className="Projects__text">
        During my 2+ years at Bimaire I have been involved at all stages
        of the SDLC for several different applications. Being involved
        throughout the development process has given me valuable insight
        into how customer requirements impact design and architectural
        decisions.
      </p>
      <p className="Projects__text">
        Being part of a small and scrappy dev team necessitated that I
        take control of my learning path and advancement in different
        languages and development skill sets.
      </p>
      <p className="Projects__text">
        While I am unable to show screenshots or link directly to these
        projects due to an employer agreement, below are some highlights
        of projects I have worked on as well as my contributions.
      </p>
    </div>
    <div className="Projects__container">
      <ProjectBox />
    </div>
  </section>
);

export default Projects;