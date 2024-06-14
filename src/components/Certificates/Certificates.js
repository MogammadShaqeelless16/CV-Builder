import React, { useState } from 'react';
import './Certificate.css';

const Certificate = () => {
    const [certificates, setCertificates] = useState([
        { year: "December 2017 to Present", title: "NQF System Developer Level 5" },
        { year: "December 2019 to Present", title: "NQF Interactive Media Level 5" },
        { year: "September 2015 to Present", title: "City of Cape Town Junior City Council" },
        { year: "May 2019 to Present", title: "Cyber Security and Ethical Hacking" },
        { year: "April 2018 to Present", title: "Business Management N4" },
        { year: "September 2019 to Present", title: "Senior Content Management" },
        { year: "August 2020 to Present", title: "UCT Staff Training NQF Level 6 Business Analysts" },
        { year: "January 2020 to Present", title: "NQF Level 6 Software Development" },
        { year: "March 2024 to Present", title: "Microsoft Power BI" },
        { year: "March 2024 to Present", title: "Microsoft Learn Paths Course" }
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
                                className="certificate_title"
                                placeholder="Title"
                                name="title"
                                value={certificate.title}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <input
                                type="text"
                                className="certificate_year"
                                placeholder="Year"
                                name="year"
                                value={certificate.year}
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
