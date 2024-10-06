import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'; 
import Banner from '../components/Banner'; 
import Header from '../components/Header'; 
import '../styles/Adotar.css';

const Adotar = ({ onPageChange }) => {
    const [selectedPet, setSelectedPet] = useState(null);
    const [isAuthenticated] = useState(false);
    const navigate = useNavigate();

    const pets = [
        {
            id: 1,
            nome: 'Breninho lindo',
            tipo: 'Gato',
            descricao: '2 anos',
            localizacao: 'Bairro: Biancopólis',
            foto: '/imagens/image.png',
            raca: 'Persa',
            porte: 'Grande',
            sexo: 'Macho',
            castrado: true,
            estado: 'Uberlândia',
            cidade: 'Minas Gerais',
        },
        {
            id: 2,
            nome: 'Bonitão da UFU',
            tipo: 'Gato',
            descricao: '3 anos',
            localizacao: 'Bairro: Meu coração',
            foto: '/imagens/image.png',
            raca: 'Siamês',
            porte: 'Giganteee d++',
            sexo: 'Macho Alfa',
            castrado: false,
            estado: 'Uberaba',
            cidade: 'Minas Gerais',
        },
    ];

    useEffect(() => {
        if (typeof onPageChange === 'function') {
            onPageChange();
        } else {
            console.error("onPageChange não é uma função");
        }
    }, [onPageChange]);

    const handlePetClick = (pet) => {
        setSelectedPet(pet);
    };

    const closeModal = () => {
        setSelectedPet(null);
    };

    const handleAdoptClick = () => {
        if (isAuthenticated) {
            alert(`Você adotou ${selectedPet.nome}!`);
            closeModal();
        } else {
            navigate('/login');
        }
    };

    const handleDoeAnimaisClick = () => {
        if (isAuthenticated) {
            navigate('/meus-cadastros');
        } else {
            navigate('/login', { state: { from: '/meus-cadastros' } });
        }
    };

    return (
        <div>
            <Header />
            <Banner onDoeAnimaisClick={handleDoeAnimaisClick} />

            <h1 className="section-title">Adote um Pet</h1>
            <div className="filter-buttons">
                <button>Filtro</button>
                <button>Cachorro</button>
                <button>Gato</button>
                <button>Favoritos</button>
            </div>

            <div className="pets-grid">
                {pets.map((pet) => (
                    <div key={pet.id} className="pet-card" onClick={() => handlePetClick(pet)}>
                        <img src={pet.foto} alt={pet.nome} className="pet-image" />
                        <div className="pet-info">
                            <p>{pet.nome}, {pet.descricao}</p>
                            <div className="pet-location">
                                <p>
                                    <img src="/imagens/Vector.svg" alt="Localização" className="location-icon" />
                                    <span>{pet.localizacao}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPet && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeModal}>X</button>
                        <h2>{selectedPet.nome}</h2>
                        <img src={selectedPet.foto} alt={selectedPet.nome} className="modal-pet-image" />
                        <p><strong>Descrição:</strong> {selectedPet.descricao}</p>
                        <p><strong>Raça:</strong> {selectedPet.raca}</p>
                        <p><strong>Porte:</strong> {selectedPet.porte}</p>
                        <p><strong>Sexo:</strong> {selectedPet.sexo}</p>
                        <p><strong>Castrado:</strong> {selectedPet.castrado ? 'Sim' : 'Não'}</p>
                        <p><strong>Estado:</strong> {selectedPet.estado}</p>
                        <p><strong>Cidade:</strong> {selectedPet.cidade}</p>
                        <button className="adopt-button" onClick={handleAdoptClick}>Adotar</button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Adotar;
