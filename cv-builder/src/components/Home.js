import React, { useState } from 'react';
import '../styles.css'; 
const Home = () => {
    const [name, setName] = useState("LEA GALLIER");
    const [profession, setProfession] = useState("Analyst developer");
    const [location, setLocation] = useState("Port-Jérôme sur Seine - France");
    const [email, setEmail] = useState("leagallier.lag@gmail.com");
    const [phone, setPhone] = useState("06.11.45.11.65");

    return (
        <section className="home" id="home">
            <div className="home_container section bd-grid">
                <div className="home_data bd-grid">
                    <img src="assets/pictures/profile.png" alt="Icon picture" className="home_img" id="home-img" />
                    <input 
                        type="text" 
                        className="home_title" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        className="home_profession" 
                        value={profession} 
                        onChange={(e) => setProfession(e.target.value)} 
                    />
                    <div>
                        <button id="download-button" className="home_button-movil">Download</button>
                    </div>
                </div>
                <div className="home_address bd-grid">
                    <input 
                        type="text" 
                        className="home_information" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        className="home_link home_information" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        className="home_link home_information" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                </div>
            </div>
            <i className="fa-solid fa-moon change-theme" title="Theme" id="theme-button"></i>
            <i className="fa-solid fa-download generate-pdf" title="Generate PDF" id="resume-button"></i>
        </section>
    );
};

export default Home;
