import React from 'react';

const PetCard = ({ petName, imageUrl }) => {
    return (
        <div className="pet-card">
            <img src={imageUrl} alt={petName} className="pet-image" />
            <h4>{petName}</h4>
        </div>
    );
};

export default PetCard;
