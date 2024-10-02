import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import { useAuth } from '../context/AuthContext'; // Caminho correto para AuthContext


const Home = () => {
    const navigate = useNavigate();
    const { isAuthenticated, userType } = useAuth(); // Utilize o contexto

    const irParaAdocao = () => {
        navigate('/adotar'); // Navega para a página de adoção
    };

    const irParaDoacao = () => {
        if (isAuthenticated) {
            // Redireciona com base no tipo de usuário
            if (userType === 'doador') {
                navigate('/meus-cadastros'); // Redireciona doador para meus cadastros
            } else if (userType === 'adotante') {
                navigate('/meus-pedidos'); // Redireciona adotante para meus pedidos
            }
        } else {
            navigate('/login'); // Redireciona para a página de login se não estiver autenticado
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
                    <button className="action-button" onClick={irParaAdocao}>Adotar!</button>
                    <button className="action-button" onClick={irParaDoacao}>Doar!</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
