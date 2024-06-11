import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Skills from './components/Skills';
// Import other components here
import html2pdf from 'html2pdf.js';
import './App.css';

const App = () => {
    const generatePDF = () => {
        const element = document.getElementById('cv');
        html2pdf().from(element).save();
    };

    return (
        <div id="cv">
            <Header />
            <main className="l-main bd-container">
                <Home />
                <Profile />
                <Skills />
                {/* Add other components here */}
            </main>
            <button onClick={generatePDF}>Download PDF</button>
        </div>
    );
};

export default App;
