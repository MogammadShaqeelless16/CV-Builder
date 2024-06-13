import React, { useState } from 'react';
import './Languages.css';

const Languages = () => {
    const [languages, setLanguages] = useState([
        { id: 1, name: 'English', years: 'Fluent', proficiency: 90 },
        { id: 2, name: 'Afrikaans', years: 'Intermediate', proficiency: 70 },
    ]);

    const [newLanguage, setNewLanguage] = useState({ name: '', years: '', proficiency: 0 });
    const [showAddLanguage, setShowAddLanguage] = useState(false);

    const proficiencyLevels = [
        { label: 'Beginner', max: 25, color: '#28a745' },
        { label: 'Intermediate', max: 50, color: '#ffc107' },
        { label: 'Advanced', max: 75, color: '#fd7e14' },
        { label: 'Fluent/Native', max: 100, color: '#007bff' },
    ];


    const handleNewLanguageChange = (e) => {
        const { name, value } = e.target;
        setNewLanguage((prevLanguage) => ({ ...prevLanguage, [name]: value }));
    };

    const addNewLanguage = () => {
        if (newLanguage.name.trim() !== '' && newLanguage.proficiency > 0) {
            const newId = languages.length > 0 ? languages[languages.length - 1].id + 1 : 1;
            const languageToAdd = { ...newLanguage, id: newId, years: getProficiencyLabel(newLanguage.proficiency) };
            setLanguages([...languages, languageToAdd]);
            setNewLanguage({ name: '', years: '', proficiency: 0 });
            setShowAddLanguage(false);
        }
    };

    const deleteLanguage = (id) => {
        const updatedLanguages = languages.filter((language) => language.id !== id);
        setLanguages(updatedLanguages);
    };

    const editLanguage = (language) => {
        setNewLanguage({ ...language });
        setShowAddLanguage(true);
    };

    // Function to determine proficiency label based on level
    const getProficiencyLabel = (proficiency) => {
        for (let i = proficiencyLevels.length - 1; i >= 0; i--) {
            if (proficiency <= proficiencyLevels[i].max) {
                return proficiencyLevels[i].label;
            }
        }
        return ''; // Default label if no match
    };

    // Function to determine color based on proficiency level
    const getLanguageColor = (proficiency) => {
        for (let i = proficiencyLevels.length - 1; i >= 0; i--) {
            if (proficiency <= proficiencyLevels[i].max) {
                return proficiencyLevels[i].color;
            }
        }
        return '#007bff'; // Default color if no match
    };

    return (
        <section className="languages" id="languages">
            <h2 className="section-title">Languages</h2>
            <div className="languages_container">
                <ul className="languages_list">
                    {languages.map((language, index) => (
                        <li key={language.id} className="language_item">
                            <div className="language_info">
                                <span className="language_name">{language.name}</span>
                                <span className="language_years">{language.years}</span>
                            </div>
                            <div className="language_progress">
                                <div className="progress_bar" style={{ width: `${language.proficiency}%`, backgroundColor: getLanguageColor(language.proficiency) }}>
                                    <span className="progress_label">{getProficiencyLabel(language.proficiency)}</span>
                                </div>
                            </div>
                            <div className="language_actions">
                                <button className="edit_button" onClick={() => editLanguage(language)}>
                                    <i className="fas fa-edit"></i> Edit
                                </button>
                                <button className="delete_button" onClick={() => deleteLanguage(language.id)}>
                                    <i className="fas fa-trash-alt"></i> Delete
                                </button>
                            </div>
                            {showAddLanguage && newLanguage.id === language.id && (
                                <div className="edit_language_form">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Language Name"
                                        value={newLanguage.name}
                                        onChange={handleNewLanguageChange}
                                        className="language_input"
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="proficiency"
                                        placeholder="Proficiency (%)"
                                        value={newLanguage.proficiency}
                                        onChange={handleNewLanguageChange}
                                        className="language_input"
                                        min="1"
                                        max="100"
                                        required
                                    />
                                    <button onClick={addNewLanguage} className="save_button">
                                        {newLanguage.id ? 'Update Language' : 'Save Language'}
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                {!showAddLanguage && (
                    <button onClick={() => setShowAddLanguage(true)} className="add_language_button">
                        Add Language
                    </button>
                )}
            </div>
        </section>
    );
};


export default Languages;
