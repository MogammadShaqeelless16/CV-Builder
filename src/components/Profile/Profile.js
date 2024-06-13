import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [description, setDescription] = useState("Tech enthusiast with a passion for continuous learning. Experienced in web migration, software development, and technical support roles at institutions like the University of Cape Town and Red-i. Proficient in Python, JavaScript, and Java, with certifications in networking and cloud computing. Eager to contribute innovative solutions and grow with dynamic teams.");

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
