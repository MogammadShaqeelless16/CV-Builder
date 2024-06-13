import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([
        { id: 1, name: 'CSS', years: 3, proficiency: 80 },
        { id: 2, name: 'Git', years: 2, proficiency: 70 },
        { id: 3, name: 'HTML', years: 4, proficiency: 90 },
        { id: 4, name: 'JavaScript', years: 3, proficiency: 85 },
        { id: 5, name: 'MySQL', years: 2, proficiency: 75 },
    ]);

    const [newSkill, setNewSkill] = useState({ id: null, name: '', years: 0, proficiency: 0 });
    const [showAddSkill, setShowAddSkill] = useState(false);

    const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

    // Functions to update skills
    const handleNewSkillChange = (e) => {
        const { name, value } = e.target;
        setNewSkill((prevSkill) => ({ ...prevSkill, [name]: value }));
    };

    const addNewSkill = () => {
        if (newSkill.name.trim() !== '' && newSkill.years > 0 && newSkill.proficiency > 0) {
            if (newSkill.id) {
                const updatedSkills = skills.map((skill) =>
                    skill.id === newSkill.id ? { ...newSkill } : skill
                );
                setSkills(updatedSkills);
            } else {
                const newId = skills.length > 0 ? skills[skills.length - 1].id + 1 : 1;
                setSkills([...skills, { ...newSkill, id: newId }]);
            }
            setNewSkill({ id: null, name: '', years: 0, proficiency: 0 });
            setShowAddSkill(false);
        }
    };

    const editSkill = (skill) => {
        setNewSkill({ ...skill });
        setShowAddSkill(true);
    };

    return (
        <section className="skills" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills_container">
                <ul className="skills_list">
                    {skills.map((skill, index) => (
                        <li key={skill.id} className="skill_item">
                            <div className="skill_info">
                                <span className="skill_name">{skill.name}</span>
                                <span className="skill_years">{skill.years} years</span>
                            </div>
                            <div className="skill_progress">
                                <div className="progress_bar" style={{ width: `${skill.proficiency}%`, backgroundColor: getSkillColor(skill.proficiency) }}>
                                    <span className="progress_label">{skillLevels[Math.floor(skill.proficiency / 25)]}</span>
                                </div>
                            </div>
                            <div className="skill_actions">
                                <button className="edit_button" onClick={() => editSkill(skill)}>
                                    <i className="fas fa-edit"></i> Edit
                                </button>
                            </div>
                            {showAddSkill && newSkill.id === skill.id && (
                                <div className="edit_skill_form">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Skill Name"
                                        value={newSkill.name}
                                        onChange={handleNewSkillChange}
                                        className="skill_input"
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="years"
                                        placeholder="Years"
                                        value={newSkill.years}
                                        onChange={handleNewSkillChange}
                                        className="skill_input"
                                        min="1"
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="proficiency"
                                        placeholder="Proficiency (%)"
                                        value={newSkill.proficiency}
                                        onChange={handleNewSkillChange}
                                        className="skill_input"
                                        min="1"
                                        max="100"
                                        required
                                    />
                                    <button onClick={addNewSkill} className="save_button">
                                        {newSkill.id ? 'Update Skill' : 'Save Skill'}
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                {!showAddSkill && (
                    <button onClick={() => setShowAddSkill(true)} className="add_skill_button">
                        Add Skill
                    </button>
                )}
            </div>
        </section>
    );
};

// Function to determine color based on proficiency level
const getSkillColor = (proficiency) => {
    if (proficiency <= 25) {
        return '#28a745'; // Green for Beginner
    } else if (proficiency <= 50) {
        return '#ffc107'; // Yellow for Intermediate
    } else if (proficiency <= 75) {
        return '#fd7e14'; // Orange for Advanced
    } else {
        return '#007bff'; // Blue for Expert
    }
};

export default Skills;
