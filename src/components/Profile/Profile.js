import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [description, setDescription] = useState("I'm actually a student in computer science at the University of Le Havre Normandie. This year is my last year of master's degree in computer science at the university. But this year I also joined the IES Ingénierie team by becoming an analyst developer in work-study training.");

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    return (
        <section className="profile section" id="profile">
            <h2 className="section-title">Profile</h2>
            <textarea
                className="profile_description"
                value={description}
                onChange={handleDescriptionChange}
            />
        </section>
    );
}

export default Profile;
