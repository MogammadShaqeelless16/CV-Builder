import React, { useState } from 'react';
import '../styles.css'; 
const Skills = () => {
    const [skills, setSkills] = useState([
        { name: "CSS", level: 85 },
        { name: "Git", level: 75 },
        { name: "HTML", level: 95 },
        { name: "Javascript", level: 80 },
        { name: "MySQL", level: 70 }
    ]);

    const updateSkill = (index, key, value) => {
        const updatedSkills = skills.map((skill, i) => 
            i === index ? { ...skill, [key]: value } : skill
        );
        setSkills(updatedSkills);
    };

    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills_container">
                {skills.map((skill, index) => (
                    <div key={index} className="skills_content bd-grid">
                        <input 
                            type="text" 
                            className="skills_text" 
                            value={skill.name} 
                            onChange={(e) => updateSkill(index, 'name', e.target.value)} 
                        />
                        <div className="skills_box">
                            <input 
                                type="range" 
                                className="skills_progress" 
                                value={skill.level} 
                                onChange={(e) => updateSkill(index, 'level', e.target.value)} 
                                max="100"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
