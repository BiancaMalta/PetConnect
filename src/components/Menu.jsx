import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Alterna o estado do menu
    };

    const handleMenuItemClick = () => {
        setIsOpen(false); // Fecha o menu ao clicar em um item
    };

    return (
        <nav className="navbar">
            <button className="navbar-toggler" onClick={toggleMenu}>
                {isOpen ? 'Fechar' : 'Menu'}
            </button>
            <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className="menu">
                    <li>
                        <Link to="/" onClick={handleMenuItemClick}>Início</Link>
                    </li>
                    <li>
                        <Link to="/adotar" onClick={handleMenuItemClick}>Adotar</Link>
                    </li>
                    <li>
                        <Link to="/doar" onClick={handleMenuItemClick}>Doar</Link>
                    </li>
                    <li>
                        <Link to="/chamados" onClick={handleMenuItemClick}>Chamados</Link>
                    </li>
                    <li>
                        <Link to="/solicitacoes" onClick={handleMenuItemClick}>Solicitações</Link>
                    </li>
                    <li>
                        <Link to="/chat" onClick={handleMenuItemClick}>Chat</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar-animal" onClick={handleMenuItemClick}>Cadastrar Animal</Link>
                    </li>
                    <li>
                        <Link to="/perfil" onClick={handleMenuItemClick}>Perfil</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
