import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Languages from './components/Languages';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Profile from './components/Profile/Profile';
import Education from './components/Education/Education';
import Interests from './components/Interests';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main className="l-main bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume_left">
                        <Home />
                        <Profile />
                        <Skills />
                        <Languages />
                    </div>
                    <div className="resume_right">
                    <Experience />
                        <Certificates />
                        <Education />
                        <Interests />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
