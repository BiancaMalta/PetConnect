import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'; 
import Banner from '../components/Banner'; 
import Header from '../components/Header'; 
import '../styles/Adotar.css';
import { getAllPets } from '../services/petServices';


const Adotar = ({ onPageChange }) => {
    const [selectedPet, setSelectedPet] = useState(null);
    const [isAuthenticated] = useState(false);
    const navigate = useNavigate();
    const [pets1, setPets] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const petsList = await getAllPets(filters);
                setPets(petsList);
            } catch (error) {
                console.error('Failed to fetch pets:', error);
            }
        };

        fetchPets();
        if (typeof onPageChange === 'function') {
            onPageChange();
        } else {
            console.error("onPageChange não é uma função");
        }
    }, [onPageChange, filters]);

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
    const handleFilterClick = (species) => {
        if (species === '') {
            setFilters({});
        } else {
            setFilters({ petSpecie: species });
        }
    };
    return (
        <div>
            <Header />
            <Banner onDoeAnimaisClick={handleDoeAnimaisClick} />

            <h1 className="section-title">Adote um Pet</h1>
            <div className="filter-buttons">
            <button onClick={() => handleFilterClick('')}>Todos</button>
            <button onClick={() => handleFilterClick('Dog')}>Cachorro</button>
            <button onClick={() => handleFilterClick('Cat')}>Gato</button>
            <button>Filtros</button>
            </div>

            <div className="pets-grid">
                {pets1.map((pet) => (
                    <div key={pet._id} className="pet-card" onClick={() => handlePetClick(pet)}>
                        <img src={pet.pictures[0]} alt={pet.name} className="pet-image" />
                        <div className="pet-info">
                            <p>{pet.name}, {pet.about}</p>
                            <div className="pet-location">
                                <p>
                                    <img src="/imagens/Vector.svg" alt="Localização" className="location-icon" />
                                    <span>{pet.adress.city}</span>
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
                        <h2>{selectedPet.name}</h2>
                        <img src={selectedPet.pictures[0]} alt={selectedPet.name} className="modal-pet-image" />
                        <p><strong>Descrição:</strong> {selectedPet.about}</p>
                        <p><strong>Raça:</strong> {selectedPet.petSpecie}</p>
                        <p><strong>Porte:</strong> {selectedPet.size}</p>
                        <p><strong>Sexo:</strong> {selectedPet.sex}</p>
                        <p><strong>Castrado:</strong> {selectedPet.neutered ? 'Sim' : 'Não'}</p>
                        <p><strong>Estado:</strong> {selectedPet.adress.city}</p>
                        <p><strong>Cidade:</strong> {selectedPet.adress.city}</p>
                        <button className="adopt-button" onClick={handleAdoptClick}>Adotar</button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Adotar;
