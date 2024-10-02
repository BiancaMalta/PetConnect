// src/components/CadastrarAnimal.jsx
import React from 'react';

const CadastrarAnimal = () => {
    return (
        <div className="cadastrar-animal">
            <h1>Cadastrar Animal</h1>
            <form>
                <label>
                    Nome do Animal:
                    <input type="text" name="nome" required />
                </label>
                <label>
                    Tipo:
                    <input type="text" name="tipo" required />
                </label>
                <label>
                    Idade:
                    <input type="number" name="idade" required />
                </label>
                <label>
                    Descrição:
                    <textarea name="descricao" required></textarea>
                </label>
                <button type="submit" className="main-button">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastrarAnimal;
