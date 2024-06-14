import React, { useState } from 'react';
import './Experience.css';

const Experience = ({ showAddButton }) => {
    const [experiences, setExperiences] = useState([
        {
            title: "Software Developer",
            company: "RED-I",
            location: "Cape Town, Western Cape",
            year: "August 2021 to Present",
            description: "Working on multiple SAAS in the property Space and developing web application."
        },
        {
            title: "Tutoring",
            company: "University of Cape Town (UCT)",
            location: "Cape Town, Western Cape",
            year: "January 2020 to Present",
            description: "I tutor computer science learners on weekends privately. As well as assist at we think code as mentor program."
        },
        {
            title: "SOC Analyst",
            company: "WLV Consulting",
            location: "Cape Town, Western Cape",
            year: "January 2021 to December 2022",
            description: "Cyber security analyst. Checking client mail box and setup spamming filters on sever. Anti virus investigation."
        },
        {
            title: "Web Developer",
            company: "University of Cape Town",
            location: "Cape Town, Western Cape",
            year: "August 2019 to July 2023",
            description: "I assisted the development team in developing programs that would better serve the best interest of the university. Contract."
        },
        {
            title: "Sales Administrator",
            company: "FTA Enterprises",
            location: "Cape Town, Western Cape",
            year: "January 2017 to December 2018",
            description: "Government Tenders."
        }
    ]);

    const addExperience = () => {
        setExperiences([...experiences, { title: "", company: "", location: "", year: "", description: "" }]);
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
                                className="experience_location"
                                placeholder="Location"
                                name="location"
                                value={experience.location}
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
