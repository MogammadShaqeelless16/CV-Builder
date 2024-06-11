import React, { useState } from 'react';
import './Languages.css';

const Languages = () => {
    const [languages, setLanguages] = useState([
        { name: 'English', level: 90 },
        { name: 'Afrikaans', level: 70 },
    ]);
    const [newLanguage, setNewLanguage] = useState('');
    const [newLevel, setNewLevel] = useState(0);

    const updateLanguageLevel = (index, level) => {
        const newLanguages = [...languages];
        newLanguages[index].level = level;
        setLanguages(newLanguages);
    };

    const addLanguage = () => {
        if (newLanguage.trim() !== '') {
            setLanguages([...languages, { name: newLanguage, level: newLevel }]);
            setNewLanguage('');
            setNewLevel(0);
        }
    };

    return (
        <section className="languages" id="languages">
            <h2 className="section-title">Languages</h2>
            <div className="languages_container bd-grid">
                {languages.map((language, index) => (
                    <div key={index} className="languages_content">
                        <input
                            type="text"
                            className="languages_name_input"
                            value={language.name}
                            onChange={(e) => {
                                const newLanguages = [...languages];
                                newLanguages[index].name = e.target.value;
                                setLanguages(newLanguages);
                            }}
                        />
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={language.level}
                            onChange={(e) => updateLanguageLevel(index, e.target.value)}
                        />
                        <div className="languages_box">
                            <div
                                className="languages_progress"
                                style={{ width: `${language.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
                <div className="languages_add">
                    <input
                        type="text"
                        placeholder="Language"
                        className="languages_name_input"
                        value={newLanguage}
                        onChange={(e) => setNewLanguage(e.target.value)}
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={newLevel}
                        onChange={(e) => setNewLevel(e.target.value)}
                    />
                    <button onClick={addLanguage} className="languages_add_button">Add Language</button>
                </div>
            </div>
        </section>
    );
};

export default Languages;
