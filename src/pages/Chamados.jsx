import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Caminho correto para AuthContext

const LoginPage = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const navigate = useNavigate();
    const { setIsAuthenticated, setUserType } = useAuth(); // Utilize o contexto

    const handleLogin = (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário
        // Simule a autenticação bem-sucedida
        setIsAuthenticated(true); // Usuário autenticado
        const userType = 'adotante'; // Substitua pela lógica de autenticação real
        setUserType(userType); // Define o tipo de usuário

        if (userType === 'doador') {
            navigate('/meus-cadastros'); // Redireciona doador para meus cadastros
        } else {
            navigate('/meus-pedidos'); // Redireciona adotante para meus pedidos
        }
    };

    const handleRegister = (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário
        // Lógica de registro (criação de conta etc.)
        setIsAuthenticated(true); // Após registro, o usuário é autenticado
        setUserType('doador'); // Defina como doador por padrão, ou ajuste conforme necessário
        navigate('/meus-cadastros'); // Após registro, redireciona para meus cadastros
    };

    return (
        <div className="page-background">
            <div className="login-page">
                <h1>{isRegistered ? 'Login' : 'Registro'}</h1>
                <form>
                    <input type="text" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit" onClick={isRegistered ? handleLogin : handleRegister}>
                        {isRegistered ? 'Entrar' : 'Registrar'}
                    </button>
                </form>
                <p onClick={() => setIsRegistered(!isRegistered)}>
                    {isRegistered ? 'Não tem conta? Registre-se aqui.' : 'Já tem conta? Faça login aqui.'}
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
