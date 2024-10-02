import React from 'react';
import '../styles/App.css'; 
import PetCard from '../components/PetCard';

const Adotar = () => {
    return (
        <div className="page-background">
            <h1>Adoção de Pets</h1>
            <div className="pets-grid">
                <PetCard petName="Pet 1" imageUrl="/imagens/pet1.jpg" />
                <PetCard petName="Pet 2" imageUrl="/imagens/pet2.jpg" />
                {/* Adicione mais PetCards conforme necessário */}
            </div>
        </div>
    );
};

export default Adotar;