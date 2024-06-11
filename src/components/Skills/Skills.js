import React, { useState } from 'react';
import './Skills.css';
import { FaPlus } from 'react-icons/fa';

const Skills = () => {
    const [skills, setSkills] = useState([
        { name: 'CSS', level: 85 },
        { name: 'Git', level: 75 },
        { name: 'HTML', level: 95 },
        { name: 'JavaScript', level: 80 },
        { name: 'MySQL', level: 70 },
    ]);

    const [newSkill, setNewSkill] = useState({ name: '', level: 0 });
    const [showAddSkill, setShowAddSkill] = useState(false);

    const updateSkillLevel = (index, level) => {
        const newSkills = [...skills];
        newSkills[index].level = level;
        setSkills(newSkills);
    };

    const updateSkillName = (index, name) => {
        const newSkills = [...skills];
        newSkills[index].name = name;
        setSkills(newSkills);
    };

    const handleNewSkillChange = (e) => {
        const { name, value } = e.target;
        setNewSkill((prevSkill) => ({ ...prevSkill, [name]: value }));
    };

    const addNewSkill = (e) => {
        e.preventDefault();
        if (newSkill.name && newSkill.level >= 0 && newSkill.level <= 100) {
            setSkills((prevSkills) => [...prevSkills, newSkill]);
            setNewSkill({ name: '', level: 0 });
            setShowAddSkill(false);
        }
    };

    return (
        <section className="skills" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills_container">
                <div className="skills_content bd-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skills_name">
                            <input
                                type="text"
                                value={skill.name}
                                onChange={(e) => updateSkillName(index, e.target.value)}
                                className="skills_input-text"
                            />
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
                    {showAddSkill && (
                        <div className="skills_name">
                            <input
                                type="text"
                                name="name"
                                placeholder="Skill Name"
                                value={newSkill.name}
                                onChange={handleNewSkillChange}
                                className="skills_input-text"
                                required
                            />
                            <input
                                type="number"
                                name="level"
                                placeholder="Skill Level"
                                value={newSkill.level}
                                onChange={handleNewSkillChange}
                                min="0"
                                max="100"
                                className="skills_input-number"
                                required
                            />
                        </div>
                    )}
                </div>
                <button onClick={() => setShowAddSkill(true)} className="add-skill-button">
                    <FaPlus className="plus-icon" />
                    Add Skill
                </button>
                {showAddSkill && (
                    <button onClick={addNewSkill} className="save-skill-button">Save Skill</button>
                )}
            </div>
        </section>
    );
};

export default Skills;
