import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../styles/App.css'; // Adicione estilos para o modal aqui

const Doar = () => {
    const [selectedPet, setSelectedPet] = useState(null); // Para armazenar o pet selecionado
    const navigate = useNavigate(); // Inicializa useNavigate

    // Exemplo de lista de pets (você deve carregar os dados reais aqui)
    const pets = [
        { id: 1, nome: 'Rex', tipo: 'cachorro', descricao: 'Um cachorro amigável em busca de um novo lar.' },
        { id: 2, nome: 'Mimi', tipo: 'gato', descricao: 'Uma gata amorosa que adora carinho.' },
        // Outros pets...
    ];

    const handlePetClick = (pet) => {
        setSelectedPet(pet); // Seleciona o pet e abre o modal
    };

    const closeModal = () => {
        setSelectedPet(null); // Fecha o modal
    };

    const handleDonateClick = () => {
        // Verifica se o usuário está autenticado (opcional)
        const isAuthenticated = false; // Substitua pela lógica real de autenticação
        if (isAuthenticated) {
            // Lógica de doação aqui (por exemplo, chamar uma API)
            alert(`Você doou ${selectedPet.nome}!`);
            closeModal();
        } else {
            navigate('/login'); // Redireciona para a página de login se não estiver autenticado
        }
    };

    return (
        <div className="page-background">
            <div className="doar-page">
                <h1>Doe um Pet</h1>
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
                            <button className="donate-button" onClick={handleDonateClick}>Doar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Doar;
