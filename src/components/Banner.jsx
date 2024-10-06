import React from 'react';
import '../styles/Banner.css'; // Certifique-se de importar o CSS do Banner

const Banner = ({ onDoeAnimaisClick }) => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h2>Ajude a transformar a vida de animais resgatados! Juntos, podemos aumentar as chances de adoção e garantir um futuro melhor para cada um deles!</h2>
                <button className="doe-animais" onClick={onDoeAnimaisClick}>Doe Animais</button>
            </div>
            <img src="/imagens/Logo.svg" alt="Logo" className="logo-image" />
        </div>
    );
};

export default Banner;
