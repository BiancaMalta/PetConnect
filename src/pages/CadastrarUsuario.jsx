import React, { useState } from 'react';
import '../styles/CadastrarUsuario.css'; // Importa o CSS
import Header from '../components/Header'; // Importa o header

const CadastrarUsuario = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [contato, setContato] = useState('');
    const [sobre, setSobre] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [foto, setFoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validação básica
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        // Salvar os dados no localStorage
        const usuario = {
            nome,
            sobrenome,
            email,
            contato,
            sobre,
            foto: foto ? URL.createObjectURL(foto) : null,
        };

        localStorage.setItem('usuario', JSON.stringify(usuario));

        // Redirecionar para o perfil
        window.location.href = "/perfil";
    };

    const handleFileChange = (e) => {
        setFoto(e.target.files[0]);
    };

    return (
        <div>
            <Header /> {/* Adiciona o Header */}
            <div className="cadastrar-usuario-page">
                <h1>Cadastrar Usuário</h1>
                <form onSubmit={handleSubmit} className="cadastrar-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input
                            type="text"
                            id="sobrenome"
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contato">Contato</label>
                        <input
                            type="tel"
                            id="contato"
                            value={contato}
                            onChange={(e) => setContato(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sobre">Sobre</label>
                        <textarea
                            id="sobre"
                            value={sobre}
                            onChange={(e) => setSobre(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmar-senha">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmar-senha"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="foto">Foto de Perfil</label>
                        <input
                            type="file"
                            id="foto"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </div>

                    <button type="submit" className="cadastrar-button">Cadastrar Usuário</button>
                </form>
            </div>
        </div>
    );
};

export default CadastrarUsuario;
