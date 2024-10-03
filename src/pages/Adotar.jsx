import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; 

const Adotar = ({ onPageChange }) => {
    const [selectedPet, setSelectedPet] = useState(null); // Para armazenar o pet selecionado
    const navigate = useNavigate(); // Inicializa useNavigate

    // Exemplo de lista de pets (você deve carregar os dados reais aqui)
    const pets = [
        { id: 1, nome: 'Breninho lindo', tipo: 'Gato', descricao: '2 anos', localizacao: 'Bairro', foto: 'public/imagens/image.png' },
        { id: 2, nome: 'Megatron', tipo: 'Gato', descricao: '3 meses', localizacao: 'Bairro', foto: 'url-da-imagem-megatron' },
        // Outros pets...
    ];

    // Atualiza o título da página quando o componente é montado
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
        const isAuthenticated = false; 
        if (isAuthenticated) {
            alert(`Você adotou ${selectedPet.nome}!`);
            closeModal();
        } else {
            navigate('/login'); 
        }
    };

    return (
        <div className="page-background">
            <div className="adotar-page">
                <h1>Adote um Pet</h1>
                <div className="filter-buttons">
                    <button>Filtro</button>
                    <button>Cachorro</button>
                    <button>Gato</button>
                    <button>Favoritos</button>
                </div>
                <div className={`pets-grid ${selectedPet ? 'blur-background' : ''}`}>
                    {pets.map((pet) => (
                        <div key={pet.id} className="pet-card" onClick={() => handlePetClick(pet)}>
                            <img src={pet.foto} alt={pet.nome} className="pet-image" />
                            <div className="pet-info">
                                <h3>{pet.nome}</h3>
                                <p>{pet.descricao}</p>
                                <p>{pet.localizacao}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedPet && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button className="close-modal" onClick={closeModal}>X</button>
                            <h2>{selectedPet.nome}</h2>
                            <p>{selectedPet.descricao}</p>
                            <button className="adopt-button" onClick={handleAdoptClick}>Adotar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Adotar;
