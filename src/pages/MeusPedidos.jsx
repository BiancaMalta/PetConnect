import React, { useState } from 'react';

const MeusPedidos = () => {
    const [selectedRequest, setSelectedRequest] = useState(null);

    const solicitacoes = [
        { id: 1, nomePet: 'Rex', status: 'Em análise', imgSrc: 'link_da_imagem_rex.jpg' }, // Adicione a URL da imagem
        { id: 2, nomePet: 'Mimi', status: 'Aprovado', imgSrc: 'link_da_imagem_mimi.jpg' }, // Adicione a URL da imagem
        // Outras solicitações
    ];

    const handleViewProfile = (solicitacao) => {
        console.log(`Visualizando perfil do pet: ${solicitacao.nomePet}`);
    };

    const handleChat = (solicitacao) => {
        setSelectedRequest(solicitacao);
    };

    return (
        <div className="page-background">
            <div className="meus-pedidos-page">
                <h1>Meus Pedidos de Adoção</h1>
                <ul>
                    {solicitacoes.map(solicitacao => (
                        <li key={solicitacao.id}>
                            <img src={solicitacao.imgSrc} alt={solicitacao.nomePet} className="pet-image" />
                            <span>
                                {solicitacao.nomePet} - {solicitacao.status}
                            </span>
                            <button onClick={() => handleViewProfile(solicitacao)}>Perfil</button>
                            <button onClick={() => handleChat(solicitacao)}>Chat</button>
                        </li>
                    ))}
                </ul>

                {/* Chat com o doador */}
                {selectedRequest && (
                    <div className="chat">
                        <h2>Conversando sobre {selectedRequest.nomePet}</h2>
                        <div className="chat-box">
                            {/* Lógica para exibir mensagens */}
                        </div>
                        <input type="text" placeholder="Escreva uma mensagem" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MeusPedidos;
