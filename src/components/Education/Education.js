import React, { useState } from 'react';
import './Education.css';

const Education = () => {
    const [education, setEducation] = useState([
        { id: 1, degree: 'Business Analysis NQF 6', institution: 'On the Ball College', year: 2022 },
        { id: 2, degree: 'Multi Media Software Development', institution: 'University of Western Cape', year: 2021 },
        { id: 3, degree: 'System Developer', institution: 'Damelin', year: 2018 },
        { id: 4, degree: 'National Certificate: Interactive Media Design', institution: '2KO', year: 2019 },
    ]);

    const [newEducation, setNewEducation] = useState({ degree: '', institution: '', year: '' });
    const [showAddEducation, setShowAddEducation] = useState(false);

    const updateEducation = (id, key, value) => {
        const updatedEducation = education.map(edu =>
            edu.id === id ? { ...edu, [key]: value } : edu
        );
        setEducation(updatedEducation);
    };

    const handleNewEducationChange = (e) => {
        const { name, value } = e.target;
        setNewEducation(prevEducation => ({ ...prevEducation, [name]: value }));
    };

    const addNewEducation = () => {
        if (newEducation.degree && newEducation.institution && newEducation.year) {
            const newId = education.length > 0 ? education[education.length - 1].id + 1 : 1;
            const newEducationObj = { id: newId, ...newEducation };
            setEducation([...education, newEducationObj]);
            setNewEducation({ degree: '', institution: '', year: '' });
            setShowAddEducation(false);
        }
    };

    return (
        <section className="education">
            <h2 className="section-title">Education</h2>
            <div className="education_container">
                {education.map(edu => (
                    <ul key={edu.id} className="education_list">
                        <li className="education_content">
                            <input
                                type="text"
                                className="education_degree"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                            />
                            <input
                                type="text"
                                className="education_input"
                                value={edu.institution}
                                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                            />
                            <input
                                type="number"
                                className="education_year"
                                value={edu.year}
                                onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                            />
                        </li>
                    </ul>
                ))}
                {showAddEducation && (
                    <ul className="education_list">
                        <li className="education_content">
                            <input
                                type="text"
                                name="degree"
                                className="education_input"
                                placeholder="Degree"
                                value={newEducation.degree}
                                onChange={handleNewEducationChange}
                            />
                            <input
                                type="text"
                                name="institution"
                                className="education_input"
                                placeholder="Institution"
                                value={newEducation.institution}
                                onChange={handleNewEducationChange}
                            />
                            <input
                                type="number"
                                name="year"
                                className="education_input"
                                placeholder="Year"
                                value={newEducation.year}
                                onChange={handleNewEducationChange}
                            />
                        </li>
                    </ul>
                )}
            </div>
            <button onClick={() => setShowAddEducation(true)}>Add Education</button>
            {showAddEducation && (
                <button onClick={addNewEducation}>Save Education</button>
            )}
        </section>
    );
};

export default Education;
