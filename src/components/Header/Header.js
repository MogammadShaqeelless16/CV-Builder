import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Header.css'; // Import the CSS file

const Header = ({ setShowAddExperienceButton }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [showIcons, setShowIcons] = useState(false);

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

    const printResume = () => {
        window.print();
    };

    const saveResume = () => {
        const resumeData = {
            // Collect your resume data here
        };
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        alert('Resume saved');
    };

    const resetResume = () => {
        if (window.confirm('Are you sure you want to reset your resume? This action cannot be undone.')) {
            // Reset your resume state here
            setShowAddExperienceButton(true);
        }
    };

    const previewResume = () => {
        const input = document.getElementById('area-cv');
        html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const previewWindow = window.open('', '_blank');
            previewWindow.document.write('<img src="' + imgData + '" />');
        });
    };

    const showHelp = () => {
        alert('Here is how to use the app...');
    };

    return (
        <div>
            <div className={`fab-container ${showIcons ? 'open' : ''}`} onClick={() => setShowIcons(!showIcons)}>
                <i className="fa-solid fa-plus fab-icon"></i>
            </div>
            <div className={`icons_container ${showIcons ? 'show' : ''}`}>
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
                <i
                    className="fa-solid fa-print print-resume"
                    title="Print Resume"
                    onClick={printResume}
                ></i>
                <i
                    className="fa-solid fa-save save-resume"
                    title="Save Resume"
                    onClick={saveResume}
                ></i>
                <i
                    className="fa-solid fa-undo reset-resume"
                    title="Reset Resume"
                    onClick={resetResume}
                ></i>
                <i
                    className="fa-solid fa-eye preview-resume"
                    title="Preview Resume"
                    onClick={previewResume}
                ></i>
                <i
                    className="fa-solid fa-question-circle help-content"
                    title="Help"
                    onClick={showHelp}
                ></i>
            </div>
        </div>
    );
};

export default Header;
