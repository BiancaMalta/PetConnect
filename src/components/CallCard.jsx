import React from 'react';

const CallCard = ({ title, description }) => {
    return (
        <div className="call-card">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default CallCard;
