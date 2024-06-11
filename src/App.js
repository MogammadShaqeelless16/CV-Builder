import React, { useState, useEffect } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Languages from './components/Languages/Languages';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Profile from './components/Profile/Profile';
import Education from './components/Education/Education';
import Interests from './components/Interests';
import Contact from './components/Contact/Contact';
import Social from './components/Social/Social';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const App = () => {
    const [showAddExperienceButton, setShowAddExperienceButton] = useState(true);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);

    const generatePDF = () => {
        const input = document.getElementById('area-cv');
        html2canvas(input, { scrollY: -window.scrollY })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('resume.pdf');
            });
        setShowAddExperienceButton(false);
    };

    const shareContent = async () => {
        const shareData = {
            title: 'Check out my resume!',
            text: 'Here is my resume. Have a look!',
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                console.log('Content shared successfully');
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard');
            }
        } catch (err) {
            console.error('Error sharing content: ', err);
        }
    };
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className="App">
            <main className="l-main bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume_left">
                        <Home />
                        <Contact />
                        <Profile />
                        <Social />
                        <Skills />
                        <Languages />
                    </div>
                    <div className="resume_right">
                        <Experience showAddButton={showAddExperienceButton} />
                        <Certificates />
                        <Education />
                        <Interests />
                    </div>
                </div>
            </main>
            <div className="icons_container">
                <i
                    className="fa-solid fa-download generate-pdf"
                    title="Generate PDF"
                    onClick={generatePDF}
                ></i>
                <i
                    className="fa-solid fa-share share-content"
                    title="Share Content"
                    onClick={shareContent}
                ></i>
                <i
                    className={`fa-solid ${isDarkTheme ? 'fa-moon' : 'fa-sun'}`}
                    title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                    onClick={toggleTheme}
                ></i>
            </div>
        </div>
    );
};

export default App;
