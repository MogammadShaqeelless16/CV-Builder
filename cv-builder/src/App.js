import React from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header/Header';
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

const App = () => {
    return (
        <div className="App">
            <Header />
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
