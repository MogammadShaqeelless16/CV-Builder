import React, { useState } from 'react';
import './Education.css';

const Education = () => {
    const [education, setEducation] = useState([
        { degree: 'B.Sc Computer Science', institution: 'University of XYZ', year: 2018 },
    ]);

    const [newEducation, setNewEducation] = useState({ degree: '', institution: '', year: '' });
    const [showAddEducation, setShowAddEducation] = useState(false);

    const updateEducation = (index, key, value) => {
        const updatedEducation = education.map((edu, i) =>
            i === index ? { ...edu, [key]: value } : edu
        );
        setEducation(updatedEducation);
    };

    const handleNewEducationChange = (e) => {
        const { name, value } = e.target;
        setNewEducation((prevEducation) => ({ ...prevEducation, [name]: value }));
    };

    const addNewEducation = () => {
        if (newEducation.degree && newEducation.institution && newEducation.year) {
            setEducation([...education, newEducation]);
            setNewEducation({ degree: '', institution: '', year: '' });
            setShowAddEducation(false);
        }
    };

    return (
        <section className="education">
            <h2>Education</h2>
            <div className="education_container">
                {education.map((edu, index) => (

                    <div key={index} className="education_content">
                        <input
                            type="text"
                            className="education_degree"
                            value={edu.degree}
                            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                        />
                        <input
                            type="text"
                            className="education_input"
                            value={edu.institution}
                            onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                        />
                        <input
                            type="number"
                            className="education_year"
                            value={edu.year}
                            onChange={(e) => updateEducation(index, 'year', e.target.value)}
                        />
                    </div>
                ))}
                {showAddEducation && (
                    <div className="education_content">
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
                    </div>
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
