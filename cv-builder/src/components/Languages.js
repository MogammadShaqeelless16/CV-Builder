import React, { useState } from 'react';

const Languages = () => {
    const [languages, setLanguages] = useState([
        { name: 'English', level: 90 },
        { name: 'Spanish', level: 70 },
        // Add more languages as needed
    ]);

    const updateLanguageLevel = (index, level) => {
        const newLanguages = [...languages];
        newLanguages[index].level = level;
        setLanguages(newLanguages);
    };

    return (
        <section className="languages" id="languages">
            <h2 className="section-title">Languages</h2>
            <div className="languages_container bd-grid">
                {languages.map((language, index) => (
                    <div key={index} className="languages_content">
                        <h3 className="languages_name">{language.name}</h3>
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
            </div>
        </section>
    );
};

export default Languages;
