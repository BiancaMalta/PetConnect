import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const LoginPage = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const navigate = useNavigate();
    const { setIsAuthenticated, setUserType } = useAuth(); 

    const handleLogin = (e) => {
        e.preventDefault(); 
        setIsAuthenticated(true);
        const userType = 'adotante'; 
        setUserType(userType);

        if (userType === 'doador') {
            navigate('/meus-cadastros');
        } else {
            navigate('/meus-pedidos'); 
        }
    };

    const handleRegister = (e) => {
        e.preventDefault(); 
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
