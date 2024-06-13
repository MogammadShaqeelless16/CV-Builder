import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Social.css';

const Social = () => {
    const [socialLinks, setSocialLinks] = useState([
        { name: "Github", link: "https://github.com/username", icon: faGithub },
        { name: "CodePen", link: "https://codepen.io/username", icon: faCodepen },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/username", icon: faLinkedin }
    ]);

    const [newLink, setNewLink] = useState({ name: '', icon: null });

    const updateLink = (index, key, value) => {
        const updatedLinks = socialLinks.map((link, i) =>
            i === index ? { ...link, [key]: value } : link
        );
        setSocialLinks(updatedLinks);
    };

    const handleIconChange = (index, file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const updatedLinks = socialLinks.map((link, i) =>
                i === index ? { ...link, iconUrl: e.target.result, icon: null } : link
            );
            setSocialLinks(updatedLinks);
        };
        reader.readAsDataURL(file);
    };

    const addSocialLink = () => {
        if (newLink.name.trim() !== '') {
            setSocialLinks([...socialLinks, { ...newLink, icon: defaultIcons[newLink.name] }]);
            setNewLink({ name: '', icon: null });
        }
    };

    const defaultIcons = {
        Github: faGithub,
        CodePen: faCodepen,
        LinkedIn: faLinkedin,
        // Add more social platforms as needed
    };

    const handleNameClick = (index) => {
        const link = prompt(`Enter link for ${socialLinks[index].name}:`, socialLinks[index].link);
        if (link !== null) {
            updateLink(index, 'link', link.trim());
        }
    };

    return (
        <section className="social section">
            <h2 className="section-title">Social</h2>

            <div className="social_container bd-grid">
                {socialLinks.map((link, index) => (
                    <div key={index} className="social_link">
                        <div className="icon-container">
                            {link.iconUrl ? (
                                <img
                                    src={link.iconUrl}
                                    alt={link.name}
                                    className="social_icon"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={link.icon || defaultIcons[link.name]}
                                    className="default-icon"
                                />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleIconChange(index, e.target.files[0])}
                                className="icon-upload"
                            />
                        </div>
                        <span
                            className="social_name"
                            onClick={() => handleNameClick(index)}
                        >
                            {link.name}
                        </span>
                    </div>
                ))}
                <div className="social_link">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={addSocialLink} />
                    </div>
                    <span className="add-text" onClick={addSocialLink}>Add Social Link</span>
                </div>
            </div>
        </section>
    );
};

export default Social;
