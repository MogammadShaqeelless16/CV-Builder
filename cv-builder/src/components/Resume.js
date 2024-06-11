import React from 'react';
import Home from './Home';
import Profile from './Profile';
import Skills from './Skills';
import Languages from './Languages';
import Experience from './Experience';
import Certificates from './Certificates';
import Education from './Education';
import Interests from './Interests';

function Resume() {
  return (
    <div className="resume">
      <Home />
      <Profile />
      <Education />
      <Experience />
      <Certificates />
      <Skills />
      <Languages />
      <Interests />
    </div>
  );
}

export default Resume;
