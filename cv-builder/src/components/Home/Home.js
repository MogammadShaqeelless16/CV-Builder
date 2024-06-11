import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [firstName, setFirstName] = useState('Shaqeel');
    const [lastName, setLastName] = useState('Less');
    const [profession, setProfession] = useState('Analyst developer');
    const [profileImg, setProfileImg] = useState('/assets/shaqeel.png'); // Updated profileImg state with the path to the default profile picture

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProfileImg(URL.createObjectURL(file));
    };

    return (
        <section className="home" id="home">
            <div className="home_container section bd-grid">
                <input type="file" id="profile-img-upload" style={{ display: 'none' }} accept="image/*" onChange={handleImageUpload} />
                <img src={profileImg} alt="Profile" className="home_img" onClick={() => document.getElementById('profile-img-upload').click()} />
                <div className="home_info">
                    <h1 className="home_title">
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="home_input" />
                        <b><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="home_input" /></b>
                    </h1>
                    <h3 className="home_profession">
                        <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} className="home_input" />
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Home;
