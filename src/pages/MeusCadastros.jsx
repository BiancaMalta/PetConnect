import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MeusCadastros = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const animaisCadastrados = [
        { id: 1, nome: 'Rex', pedidos: 5, foto: 'url-da-imagem-rex' },
        { id: 2, nome: 'Mimi', pedidos: 3, foto: 'url-da-imagem-mimi' },
    ];

    const solicitacoes = [
        { animalId: 1, solicitantes: [{ nome: 'João', id: 1 }, { nome: 'Maria', id: 2 }] },
        { animalId: 2, solicitantes: [{ nome: 'Carlos', id: 3 }] },
    ];

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedAnimal(null);
    };

    return (
        <div className="page-background">
            <div className="meus-cadastros-page">
                <h1>Meus Cadastros</h1>
                <Link to="/cadastrar-animal" className="button">Cadastrar Novo Animal</Link>
                <ul className="cadastros-list">
                    {animaisCadastrados.map(animal => (
                        <li key={animal.id} className="cadastro-item" onClick={() => handleAnimalClick(animal)}>
                            <img src={animal.foto} alt={animal.nome} className="animal-image" />
                            <div className="cadastro-info">
                                <span>
                                    {animal.nome} - {animal.pedidos} pedidos
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>

                {modalOpen && selectedAnimal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button className="close-modal" onClick={closeModal}>X</button>
                            <h2>{selectedAnimal.nome}</h2>
                            <img src={selectedAnimal.foto} alt={selectedAnimal.nome} className="modal-animal-image" />
                            <p>Solicitações de Adoção:</p>
                            <ul className="solicitantes-list">
                                {solicitacoes
                                    .find(s => s.animalId === selectedAnimal.id)
                                    ?.solicitantes.map(s => (
                                        <li key={s.id} className="solicitante-item">
                                            {s.nome}
                                            <div className="button-container">
                                                <Link to={`/perfil/${s.id}`} className="button">Ver Perfil</Link>
                                                <Link to={`/chat/${s.id}`} className="button">Chat</Link>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MeusCadastros;
