import React, { useState } from 'react';

const Social = () => {
    const [socialLinks, setSocialLinks] = useState([
        { name: "Github", link: "https://github.com/username" },
        { name: "CodePen", link: "https://codepen.io/username" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/username" }
    ]);

    const updateLink = (index, key, value) => {
        const updatedLinks = socialLinks.map((link, i) => 
            i === index ? { ...link, [key]: value } : link
        );
        setSocialLinks(updatedLinks);
    };

    return (
        <section className="social section">
            <h2 className="section-title">Social</h2>

            <div className="social_container bd-grid">
                {socialLinks.map((link, index) => (
                    <div key={index} className="social_link">
                        <input 
                            type="text" 
                            className="social_input" 
                            value={link.name} 
                            onChange={(e) => updateLink(index, 'name', e.target.value)} 
                        />
                        <input 
                            type="text" 
                            className="social_input" 
                            value={link.link} 
                            onChange={(e) => updateLink(index, 'link', e.target.value)} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Social;
