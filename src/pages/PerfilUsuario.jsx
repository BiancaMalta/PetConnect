// src/components/PerfilUsuario.jsx
import React from 'react';

const PerfilUsuario = () => {
    return (
        <div className="perfil-usuario">
            <h1>Perfil do Usuário</h1>
            <form>
                <label>
                    Nome:
                    <input type="text" name="nome" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Telefone:
                    <input type="tel" name="telefone" required />
                </label>
                <button type="submit" className="main-button">Atualizar</button>
            </form>
        </div>
    );
};

export default PerfilUsuario;
