import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([
        { name: 'CSS', level: 85 },
        { name: 'Git', level: 75 },
        { name: 'HTML', level: 95 },
        { name: 'JavaScript', level: 80 },
        { name: 'MySQL', level: 70 },
    ]);

    const updateSkillLevel = (index, level) => {
        const newSkills = [...skills];
        newSkills[index].level = level;
        setSkills(newSkills);
    };

    return (
        <section className="skills" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills_container">
                <div className="skills_content bd-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skills_name">
                            <span className="skills_text">{skill.name}</span>
                            <div className="skills_box">
                                <span className="skills_progress" style={{ width: `${skill.level}%` }}></span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={skill.level}
                                onChange={(e) => updateSkillLevel(index, e.target.value)}
                                className="skills_input-range"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
