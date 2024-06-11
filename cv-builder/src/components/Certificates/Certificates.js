// Certificate.js

import React, { useState } from 'react';
import './Certificate.css';

const Certificate = () => {
    const [certificates, setCertificates] = useState([
        { year: "2023", title: "Masters in Computer Science" }
    ]);

    const addCertificate = () => {
        setCertificates([...certificates, { year: "", title: "" }]);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const list = [...certificates];
        list[index][name] = value;
        setCertificates(list);
    };

    return (
        <section className="certificate section" id="certificates">
            <h2 className="section-title">Certificates</h2>
            <div className="certificate_container bd-grid">
                {certificates.map((certificate, index) => (
                    <div className="certificate_content" key={index}>
                        <div className="certificate_item">
                            <span className="certificate_rounder"></span>
                        </div>
                        <div className="certificate_data bd-grid">
                            <input
                                type="text"
                                className="certificate_year"
                                placeholder="Year"
                                name="year"
                                value={certificate.year}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <input
                                type="text"
                                className="certificate_title"
                                placeholder="Title"
                                name="title"
                                value={certificate.title}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={addCertificate}>Add Certificate</button>
        </section>
    );
}

export default Certificate;
