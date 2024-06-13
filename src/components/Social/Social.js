import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Social.css';

// Import icons from FontAwesome library
import {
    faGithub,
    faCodepen,
    faLinkedin,
    faFacebook,
    faInstagram,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';

// Object mapping social media names to FontAwesome icons
const socialIcons = {
    Github: faGithub,
    CodePen: faCodepen,
    LinkedIn: faLinkedin,
    Facebook: faFacebook,
    Instagram: faInstagram,
    TikTok: faTiktok,
};

const Social = () => {
    const [socialLinks, setSocialLinks] = useState([
        { id: 1, name: "Github", link: "https://github.com/username" },
        { id: 2, name: "CodePen", link: "https://codepen.io/username" },
        { id: 3, name: "LinkedIn", link: "https://www.linkedin.com/in/username" },
        { id: 4, name: "Facebook", link: "https://www.facebook.com/username" },
        { id: 5, name: "Instagram", link: "https://www.instagram.com/username" },
        { id: 6, name: "TikTok", link: "https://www.tiktok.com/@username" }
    ]);

    const [newLink, setNewLink] = useState({ id: null, name: '', link: '' });
    const [showAddLink, setShowAddLink] = useState(false);

    // Functions to update social links
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewLink((prevLink) => ({ ...prevLink, [name]: value }));
    };

    const addOrUpdateLink = () => {
        if (newLink.name.trim() !== '' && newLink.link.trim() !== '') {
            if (newLink.id) {
                const updatedLinks = socialLinks.map((link) =>
                    link.id === newLink.id ? { ...newLink } : link
                );
                setSocialLinks(updatedLinks);
            } else {
                const newId = socialLinks.length > 0 ? socialLinks[socialLinks.length - 1].id + 1 : 1;
                setSocialLinks([...socialLinks, { ...newLink, id: newId }]);
            }
            setNewLink({ id: null, name: '', link: '' });
            setShowAddLink(false);
        }
    };

    const editLink = (link) => {
        setNewLink({ ...link });
        setShowAddLink(true);
    };

    const deleteLink = (id) => {
        const updatedLinks = socialLinks.filter((link) => link.id !== id);
        setSocialLinks(updatedLinks);
    };

    return (
        <section className="social section">
            <h2 className="section-title">Social</h2>

            <div className="social_container bd-grid">
                {socialLinks.map((link) => (
                    <div key={link.id} className="social_link">
                        <div className="icon-container-social">
                            <FontAwesomeIcon
                                icon={socialIcons[link.name]}
                                className="social_icon"
                            />
                        </div>
                        <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social_name"
                        >
                            {link.name}
                        </a>
                        <div className="social_actions">
                            <FontAwesomeIcon
                                icon={faEdit}
                                className="edit-icon"
                                onClick={() => editLink(link)}
                            />
                            <FontAwesomeIcon
                                icon={faTrash}
                                className="delete-icon"
                                onClick={() => deleteLink(link.id)}
                            />
                        </div>
                    </div>
                ))}
                <div className="social_link">
                    {!showAddLink && (
                        <button className="add-link-button" onClick={() => setShowAddLink(true)}>
                            <FontAwesomeIcon icon={faPlus} className="add-icon" />
                            Add Social Link
                        </button>
                    )}
                    {showAddLink && (
                        <div className="add-link-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Social Platform"
                                value={newLink.name}
                                onChange={handleInputChange}
                                className="link-input"
                                required
                            />
                            <input
                                type="url"
                                name="link"
                                placeholder="Link"
                                value={newLink.link}
                                onChange={handleInputChange}
                                className="link-input"
                                required
                            />
                            <button onClick={addOrUpdateLink} className="save-button">
                                {newLink.id ? 'Update Link' : 'Add Link'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Social;
