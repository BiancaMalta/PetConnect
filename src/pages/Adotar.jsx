import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; // Adicione estilos para o modal aqui

const Adotar = ({ onPageChange }) => {
    const [selectedPet, setSelectedPet] = useState(null); // Para armazenar o pet selecionado
    const navigate = useNavigate(); // Inicializa useNavigate

    // Exemplo de lista de pets (você deve carregar os dados reais aqui)
    const pets = [
        { id: 1, nome: 'Rex', tipo: 'cachorro', descricao: 'Um cachorro amigável' },
        { id: 2, nome: 'Mimi', tipo: 'gato', descricao: 'Uma gata amorosa' },
        // Outros pets...
    ];

    // Atualiza o título da página quando o componente é montado
    useEffect(() => {
        if (typeof onPageChange === 'function') {
            onPageChange(); // Atualiza a página atual para 'adotar'
        } else {
            console.error("onPageChange não é uma função");
        }
    }, [onPageChange]);

    const handlePetClick = (pet) => {
        setSelectedPet(pet); // Seleciona o pet e abre o modal
    };

    const closeModal = () => {
        setSelectedPet(null); // Fecha o modal
    };

    const handleAdoptClick = () => {
        // Verifica se o usuário está autenticado (substitua pela lógica real)
        const isAuthenticated = false; // Aqui você deve verificar se o usuário está autenticado
        if (isAuthenticated) {
            // Lógica de adoção aqui (por exemplo, chamar uma API)
            alert(`Você adotou ${selectedPet.nome}!`);
            closeModal();
        } else {
            navigate('/login'); // Redireciona para a página de login se não estiver autenticado
        }
    };

    return (
        <div className="page-background">
            <div className="adotar-page">
                <h1>Adote um Pet</h1>
                <div className={`pets-grid ${selectedPet ? 'blur-background' : ''}`}>
                    {pets.map((pet) => (
                        <div key={pet.id} className="pet-card" onClick={() => handlePetClick(pet)}>
                            <h3>{pet.nome}</h3>
                            <p>{pet.tipo}</p>
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
