import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light" >
            <div className="container-fluid">
                {/* Altere o nome da marca conforme necessário */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/adotar" onClick={closeMenu}>Adotar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/doar" onClick={closeMenu}>Doar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chamados" onClick={closeMenu}>Chamados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/solicitacoes" onClick={closeMenu}>Solicitações</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chat" onClick={closeMenu}>Chat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cadastrar-animal" onClick={closeMenu}>Cadastrar Animal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/perfil" onClick={closeMenu}>Perfil</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
