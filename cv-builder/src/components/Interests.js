import React, { useState } from 'react';

const Interests = () => {
    const [interests, setInterests] = useState([
        { name: 'Coding' },
        { name: 'Reading' },
    ]);

    const updateInterest = (index, value) => {
        const updatedInterests = interests.map((interest, i) =>
            i === index ? { ...interest, name: value } : interest
        );
        setInterests(updatedInterests);
    };

    return (
        <section className="interests">
            <h2>Interests</h2>
            <div className="interests_container">
                {interests.map((interest, index) => (
                    <div key={index} className="interests_content">
                        <input
                            type="text"
                            value={interest.name}
                            onChange={(e) => updateInterest(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Interests;