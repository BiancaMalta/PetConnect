import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from 'public/imagens/image.png'; 

const PetCard = ({ petName, imageUrl }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Aqui você pode verificar se o usuário está logado
        const isLoggedIn = false; // Substitua por sua lógica de autenticação

        if (isLoggedIn) {
            // Se o usuário estiver logado, navegue para a página de detalhes do pet
            navigate(`/detalhes/${petName}`); // Exemplo de rota
        } else {
            // Se não estiver logado, redirecione para a página de login
            navigate('/LoginPage');
        }
    };

    return (
        <div className="pet-card" onClick={handleCardClick}>
            <img src={image}  alt={petName} className="pet-image" />
            <h4>{petName}</h4>
        </div>
    );
};

export default PetCard;
