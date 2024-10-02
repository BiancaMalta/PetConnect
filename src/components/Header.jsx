import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa o AuthContext

const Header = ({ onPageChange }) => {
    const [isOpen, setIsOpen] = useState(false); 
    const { user, logout } = useAuth(); // Usa o contexto de autenticação

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
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
                            <Link className="nav-link" to="/adotar" onClick={() => { closeMenu(); onPageChange('adotar'); }}>Adotar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/meus-cadastros" onClick={() => { closeMenu(); onPageChange('doar'); }}>Doar</Link>
                        </li>
                        {/* Verifica se o usuário está autenticado */}
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/perfil" onClick={() => { closeMenu(); onPageChange('perfil'); }}>Perfil</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={logout}>Logout</button> {/* Botão para deslogar */}
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={closeMenu}>Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
