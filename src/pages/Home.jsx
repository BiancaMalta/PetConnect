import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import '../styles/App.css'; // Certifique-se de que o CSS está corretamente estilizado

const Home = () => {
    const navigate = useNavigate(); // Crie a instância do navigate

    const irParaAdocao = () => {
        navigate('/adotar'); // Navegue para a página de adoção
    };

    const irParaDoacao = () => {
        navigate('/doar'); // Navegue para a página de doação
    };

    return (
        <div className="home-container">
            <header className="home-header">
                {/* Você pode adicionar um título ou logo aqui, se desejar */}
            </header>
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
