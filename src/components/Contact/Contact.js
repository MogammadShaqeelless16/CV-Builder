import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [address, setAddress] = useState('72 Austin Crescent Cape Town');
    const [email, setEmail] = useState('Shaqeelless4@gmail.com');
    const [phone, setPhone] = useState('081 374 6844');

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>
            <div className="contact_container bd-grid">
                <span className="contact_information">
                    <i className="fa-solid fa-location-dot contact_icon"></i>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="contact_input"
                    />
                </span>
                <span className="contact_information">
                        <i className="fa-solid fa-envelope contact_icon"></i>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="contact_input"
                        />
                </span>
                <span className="contact_information">
                    <a href={`tel:${phone}`} className="contact_link">
                        <i className="fa-solid fa-phone contact_icon"></i>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="contact_input"
                        />
                    </a>
                </span>
            </div>
        </section>
    );
}

export default Contact;
