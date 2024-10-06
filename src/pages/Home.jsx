import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import { useAuth } from '../context/AuthContext'; // Caminho correto para AuthContext

const Home = () => {
    const navigate = useNavigate();
    const { isAuthenticated, userType } = useAuth(); // Utilize o contexto

    const handleStartClick = () => {
        if (isAuthenticated) {
            // Redireciona com base no tipo de usuário
            if (userType === 'doador') {
                navigate('/meus-cadastros'); // Redireciona doador para meus cadastros
            } else if (userType === 'adotante') {
                navigate('/meus-pedidos'); // Redireciona adotante para meus pedidos
            }
        } else {
            navigate('/adotar'); // Redireciona para a página de adoção se não estiver autenticado
        }
    };

    return (
        <div className="home-container">
            <header className="home-header"></header>
            <div className="home-content">
                <p className="description">
                    Há milhares de pets ansiosos por encontrar um lar cheio de amor e carinho. Você pode fazer a diferença...
                </p>
                <div className="button-container">
                    <button className="action-button" onClick={handleStartClick}>Começar</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
