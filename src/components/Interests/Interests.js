import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faCode, faBook, faHeart } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Interests = () => {
    const [interests, setInterests] = useState([
        { id: 1, name: 'Coding', icon: faCode },
        { id: 2, name: 'Reading', icon: faBook },
    ]);
    const [newInterest, setNewInterest] = useState('');

    const updateInterest = (index, value) => {
        const updatedInterests = interests.map((interest) =>
            interest.id === index ? { ...interest, name: value } : interest
        );
        setInterests(updatedInterests);
    };

    const addInterest = () => {
        if (newInterest.trim() !== '') {
            const newId = interests.length > 0 ? interests[interests.length - 1].id + 1 : 1;
            const newInterestObj = { id: newId, name: newInterest, icon: faHeart }; // Default icon is 'heart'
            setInterests([...interests, newInterestObj]);
            setNewInterest('');
        }
    };

    const removeInterest = (index) => {
        const updatedInterests = interests.filter((interest) => interest.id !== index);
        setInterests(updatedInterests);
    };

    return (
        <section className="interests">
            <h2>Interests</h2>
            <div className="interests_container">
                {interests.map((interest) => (
                    <div key={interest.id} className="interests_content">
                        <input
                            type="text"
                            value={interest.name}
                            onChange={(e) => updateInterest(interest.id, e.target.value)}
                            className="interest-input"
                        />
                        <FontAwesomeIcon icon={interest.icon} />
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="remove-icon"
                            onClick={() => removeInterest(interest.id)}
                        />
                    </div>
                ))}
                <div className="interests_content new-interest">
                    <input
                        type="text"
                        placeholder="Add new interest"
                        value={newInterest}
                        onChange={(e) => setNewInterest(e.target.value)}
                        className="interest-input"
                    />
                    <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={addInterest} />
                </div>
            </div>
        </section>
    );
};

export default Interests;
