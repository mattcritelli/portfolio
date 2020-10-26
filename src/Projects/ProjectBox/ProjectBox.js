import React from 'react';
// import ProjectBoxItem from '../ProjectBoxItem/ProjectBoxItem'
import './ProjectBox.scss';

function ProjectBox () {
  return (
    <>
      <div className="ProjectBox">
        <div className="ProjectBox__heading">
          Interactive Floor Plan
        </div>
        <div className="ProjectBox__detail-container">
          <p className="ProjectBox__detail">Primary technologies are React, Redux, responsive CSS (Flexbox, Grid, and Modules), and WebSockets.</p>
          <p className="ProjectBox__detail">Customer-facing application that allows users to customize a home. As users change options, the floor plan updates and reflects the customers' selections.</p>
          <p className="ProjectBox__detail">Developed a process to normalize data coming in from external client APIs to allow component reusuablity and seamless functionality across clients with different data organization.</p>
          <p className="ProjectBox__detail">Managed the transition of the application from React state management to the implementation of Redux.</p>
        </div>
      </div>
      <div className="ProjectBox">
        <div className="ProjectBox__heading">
          Client/Customer Portals
        </div>
        <div className="ProjectBox__detail-container">
          <p className="ProjectBox__detail">Primary technologies are React, React Router, React 360, and responsive CSS (Flexbox, Grid, and Modules).</p>
          <p className="ProjectBox__detail">Portals to help customers manage the pre/post-home purchase process.</p>
          <p className="ProjectBox__detail">Pre-purchase portals allow customers to create accounts, customize and save homes to their profile, print overviews to a PDF, as well as walk-through their customized homes.</p>
          <p className="ProjectBox__detail">Post-purchase portals and dashboards provide customers with real-time progress updates, timelines, and photos of their custom home builds.</p>
        </div>
      </div>
    </>
  );
}

export default ProjectBox;
