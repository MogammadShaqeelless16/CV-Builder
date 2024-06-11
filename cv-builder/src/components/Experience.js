import React from 'react';

function Experience() {
  return (
    <section className="experience section">
      <h2 className="section-title">Experience</h2>
      <div className="experience_container bd-grid">
        <div className="experience_content">
          <div className="experience_time">
            <span className="experience_rounder"></span>
            <span className="experience_line"></span>
          </div>
          <div className="experience_data bd-grid">
            <h3 className="experience_title">Web Developer</h3>
            <span className="experience_company">XYZ Company</span>
            <span className="experience_year">2020 - Present</span>
            <p className="experience_description">
              Responsible for developing and maintaining the company website...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
