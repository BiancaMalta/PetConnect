import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import '../styles/Footer.css';
const Footer = () => {
    const navigate = useNavigate(); // Inicializando o navigate

    return (
        <footer className="bottom-nav">
            <button className="nav-button-footer" onClick={() => navigate('/adotar')}>
                <img src="/imagens/HomeLogo.svg" alt="Home" />
                Home
            </button>
            <button className="nav-button-footer" onClick={() => navigate('/chat')}>
                <img src="/imagens/ChatLogo.svg" alt="Chat" />
                Chat
            </button>
            <button className="nav-button-footer" onClick={() => navigate('/perfil')}>
                <img src="/imagens/ProfileLogo.svg" alt="Perfil" />
                Perfil
            </button>
        </footer>
    );
};

export default Footer;
