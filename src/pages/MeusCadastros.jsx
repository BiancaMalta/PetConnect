import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/PerfilUsuario.css'; // Importa o CSS

const PerfilUsuario = () => {
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        const usuarioData = localStorage.getItem('usuario');
        if (usuarioData) {
            setUsuario(JSON.parse(usuarioData));
        }
    }, []);

    return (
        <div>
            <Header /> {/* Adiciona o Header */}
            <h1>Perfil do Usuário</h1>
            <div className="perfil-container">
                <div className="perfil-foto">
                    {usuario.foto ? (
                        <img src={usuario.foto} alt="Foto de Perfil" className="foto-perfil" />
                    ) : (
                        <div className="foto-placeholder">Sem Foto</div>
                    )}
                </div>
                <div className="perfil-info">
                    <p><strong>Nome:</strong> {usuario.nome} {usuario.sobrenome}</p>
                    <p><strong>Email:</strong> {usuario.email}</p>
                    <p><strong>Contato:</strong> {usuario.contato}</p>
                    <p><strong>Sobre:</strong> {usuario.sobre}</p>
                </div>
            </div>
        </div>
    );
};

export default PerfilUsuario;
