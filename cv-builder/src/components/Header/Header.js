import React from 'react';

const Header = () => {
    return (
        <header className="l-header">
            <nav className="nav">
                <h1 className="nav_title">CV Generator</h1>
                <div className="nav_buttons">
                    <button className="change-theme">Change Theme</button>
                    <button className="generate-pdf">Generate PDF</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
