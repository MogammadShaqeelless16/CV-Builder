import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faTimes,
    faHeart,
    faCode,
    faBook,
    faHiking,
    faGamepad,
    faMusic,
    faFutbol,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import './Interests.css';

const defaultIcons = {
    coding: faCode,
    reading: faBook,
    hiking: faHiking,
    game: faGamepad,
    music: faMusic,
    rugby: faFutbol,
    innovation: faLightbulb,
};

const defaultIconUrls = {
    coding: 'default-coding.png',
    reading: 'default-reading.png',
    hiking: 'default-hiking.png',
    game: 'default-interest.png',
    music: 'default-interest.png',
    rugby: 'default-interest.png',
    innovation: 'default-interest.png',
};

const defaultInterests = [
    { id: 1, name: 'Coding', icon: defaultIcons.coding, iconUrl: defaultIconUrls.coding },
    { id: 2, name: 'Reading', icon: defaultIcons.reading, iconUrl: defaultIconUrls.reading },
    { id: 3, name: 'Hiking', icon: defaultIcons.hiking, iconUrl: defaultIconUrls.hiking },
    { id: 4, name: 'Gaming', icon: defaultIcons.game, iconUrl: defaultIconUrls.game },
    { id: 5, name: 'Music', icon: defaultIcons.music, iconUrl: defaultIconUrls.music },
    { id: 6, name: 'Rugby', icon: defaultIcons.rugby, iconUrl: defaultIconUrls.rugby },
    { id: 7, name: 'Innovation', icon: defaultIcons.innovation, iconUrl: defaultIconUrls.innovation },
];

const Interests = () => {
    const [interests, setInterests] = useState(defaultInterests);
    const [newInterest, setNewInterest] = useState({ name: '', icon: faHeart, iconUrl: 'default-interest.png' });
    const [showAddInterestFields, setShowAddInterestFields] = useState(false);

    const updateInterest = (index, value) => {
        const updatedInterests = interests.map((interest) =>
            interest.id === index ? { ...interest, name: value } : interest
        );
        setInterests(updatedInterests);
    };

    const handleIconChange = (index, file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const updatedInterests = interests.map((interest) =>
                interest.id === index ? { ...interest, iconUrl: e.target.result, icon: null } : interest
            );
            setInterests(updatedInterests);
        };
        reader.readAsDataURL(file);
    };

    const handleNewIconChange = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setNewInterest({ ...newInterest, iconUrl: e.target.result, icon: null });
        };
        reader.readAsDataURL(file);
    };

    const addInterest = () => {
        if (newInterest.name.trim() !== '') {
            const newId = interests.length > 0 ? interests[interests.length - 1].id + 1 : 1;
            const newInterestObj = { ...newInterest, id: newId };
            setInterests([...interests, newInterestObj]);
            setNewInterest({ name: '', icon: faHeart, iconUrl: 'default-interest.png' });
            setShowAddInterestFields(false); // Hide the add interest fields after adding
        }
    };

    const removeInterest = (id) => {
        const updatedInterests = interests.filter((interest) => interest.id !== id);
        setInterests(updatedInterests);
    };

    const handleIconClick = (index) => {
        // Programmatically trigger input file click
        const fileInput = document.getElementById(`icon-upload-${index}`);
        if (fileInput) {
            fileInput.click();
        }
    };

    return (
        <section className="interests">
            <h2 className="section-title">Interests</h2>
            <div className="interests_container">
                {interests.map((interest) => (
                    <div key={interest.id} className="interests_content">
                        <input
                            type="text"
                            value={interest.name}
                            onChange={(e) => updateInterest(interest.id, e.target.value)}
                            className="interest-input"
                        />
                        <div className="icon-container">
                            {interest.iconUrl && !interest.icon ? (
                                <img
                                    src={interest.iconUrl}
                                    alt={interest.name}
                                    className="icon-image"
                                    onClick={() => handleIconClick(interest.id)}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={interest.icon || faHeart}
                                    className="default-icon"
                                    onClick={() => handleIconClick(interest.id)}
                                />
                            )}
                            <input
                                type="file"
                                id={`icon-upload-${interest.id}`}
                                accept="image/*"
                                onChange={(e) => handleIconChange(interest.id, e.target.files[0])}
                                className="icon-upload"
                            />
                        </div>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="remove-icon"
                            onClick={() => removeInterest(interest.id)}
                        />
                    </div>
                ))}
                {showAddInterestFields && (
                    <div className="interests_content new-interest">
                        <input
                            type="text"
                            placeholder="Add new interest"
                            value={newInterest.name}
                            onChange={(e) => setNewInterest({ ...newInterest, name: e.target.value })}
                            className="interest-input"
                        />
                        <div className="icon-container">
                            {newInterest.iconUrl && !newInterest.icon ? (
                                <img
                                    src={newInterest.iconUrl}
                                    alt="New interest"
                                    className="icon-image"
                                    onClick={() => handleIconClick('new')}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={newInterest.icon || faHeart}
                                    className="default-icon"
                                    onClick={() => handleIconClick('new')}
                                />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleNewIconChange(e.target.files[0])}
                                className="icon-upload"
                            />
                        </div>
                        <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={addInterest} />
                    </div>
                )}
            </div>
            {!showAddInterestFields && (
                <button className="add-interest-btn" onClick={() => setShowAddInterestFields(true)}>
                    Add Interest
                </button>
            )}
            {showAddInterestFields && (
                <button className="save-interests-btn" onClick={addInterest}>
                    Save
                </button>
            )}
        </section>
    );
};

export default Interests;
