import React from 'react';

const RequestCard = ({ title, details }) => {
    return (
        <div className="request-card">
            <h4>{title}</h4>
            <p>{details}</p>
        </div>
    );
};

export default RequestCard;
