import React, { useState, useEffect } from 'react';
import './Home.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Home = () => {
    const [firstName, setFirstName] = useState('Shaqeel Less');
    const [profession, setProfession] = useState('Analyst developer');
    const [profileImg, setProfileImg] = useState('/assets/shaqeel.png'); // Updated profileImg state with the path to the default profile picture
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProfileImg(URL.createObjectURL(file));
    };

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const generatePDF = () => {
        const input = document.getElementById('resume-content');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('resume.pdf');
            });
    };

    return (
        <section className="home" id="home">
            <div className="icons_container">
                <i
                    className="fa-solid fa-moon change-theme"
                    title="Theme"
                    id="theme-button"
                    onClick={toggleTheme}
                ></i>
                <i
                    className="fa-solid fa-download generate-pdf"
                    title="Generate PDF"
                    id="resume-button"
                    onClick={generatePDF}
                ></i>
            </div>
            <div className="home_container section bd-grid" id="resume-content">
                <input
                    type="file"
                    id="profile-img-upload"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                <img
                    src={profileImg}
                    alt="Profile"
                    className="home_img"
                    onClick={() => document.getElementById('profile-img-upload').click()}
                />
            </div>
            <div className="home_info">
                <h1 className="home_title">
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="home_input"
                    />
                </h1>
                <h3 className="home_profession">
                    <input
                        type="text"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        className="home_input"
                    />
                </h3>
            </div>
        </section>
    );
};

export default Home;
