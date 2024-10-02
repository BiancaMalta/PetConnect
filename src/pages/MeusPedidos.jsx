import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MeusCadastros = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Simulação de animais cadastrados e solicitações
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
            <div>
                <h1>Meus Cadastros</h1>
                <Link to="/cadastrar-animal">Cadastrar Novo Animal</Link>
                <ul>
                    {animaisCadastrados.map(animal => (
                        <li key={animal.id} onClick={() => handleAnimalClick(animal)}>
                            {animal.nome} - {animal.pedidos} pedidos
                        </li>
                    ))}
                </ul>

                {modalOpen && selectedAnimal && (
                    <div className="page-background">
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <button className="close-modal" onClick={closeModal}>X</button>
                                <h2>{selectedAnimal.nome}</h2>
                                <img src={selectedAnimal.foto} alt={selectedAnimal.nome} style={{ width: '200px', height: 'auto' }} />
                                <p>Solicitações de Adoção:</p>
                                <ul>
                                    {solicitacoes
                                        .find(s => s.animalId === selectedAnimal.id)
                                        ?.solicitantes.map(s => (
                                            <li key={s.id}>
                                                {s.nome}
                                                <Link to={`/perfil/${s.id}`}> Ver Perfil </Link>
                                                <Link to={`/chat/${s.id}`}> Chat </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MeusCadastros;
