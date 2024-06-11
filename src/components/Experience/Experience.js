import React, { useState } from 'react';
import './Experience.css';

const Experience = ({ showAddButton }) => {
    const [experiences, setExperiences] = useState([
        {
            title: "Java Developer",
            company: "RED-i PRoeprty Technology",
            year: "July 2021 - present",
            description: "Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity."
        },
        {
            title: "Web Developer",
            company: "University of Cape town",
            year: "April 2021 - June 2023",
            description: "Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity."
        }
    ]);

    const addExperience = () => {
        setExperiences([...experiences, { title: "", company: "", year: "", description: "" }]);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const list = [...experiences];
        list[index][name] = value;
        setExperiences(list);
    };

    return (
        <section className="experience section" id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="experience_container bd-grid">
                {experiences.map((experience, index) => (
                    <div className="experience_content" key={index}>
                        <div className="experience_time">
                            <span className="experience_rounder"></span>
                            {index !== experiences.length - 1 && <span className="experience_line"></span>}
                        </div>
                        <div className="experience_data bd-grid">
                            <input
                                type="text"
                                className="experience_title"
                                placeholder="Title"
                                name="title"
                                value={experience.title}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <input
                                type="text"
                                className="experience_company"
                                placeholder="Company"
                                name="company"
                                value={experience.company}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <input
                                type="text"
                                className="experience_year"
                                placeholder="Year"
                                name="year"
                                value={experience.year}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <textarea
                                className="experience_description"
                                placeholder="Description"
                                name="description"
                                value={experience.description}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            {showAddButton && <button onClick={addExperience}>Add Experience</button>}
        </section>
    );
}

export default Experience;
