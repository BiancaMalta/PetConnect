import React from 'react'; // Removido useState
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header'; // Importa o header
import { useAuth } from '../context/AuthContext';
import '../styles/LoginPage.css';


const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Captura a localização atual
    const { setIsAuthenticated, setUserType } = useAuth();

    // Obtendo o local de origem (se disponível)
    const from = location.state?.from || '/meus-pedidos'; // Valor padrão

    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuthenticated(true); // Usuário autenticado
        const userType = 'adotante'; // Simulação da lógica de autenticação
        setUserType(userType);

        if (userType === 'doador') {
            navigate('/meus-cadastros'); // Redireciona doador
        } else {
            navigate(from); // Redireciona para a página de origem
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/cadastrar-usuario'); // Redireciona para a página de cadastro de usuário
    };

    return (
        <div>
            <Header /> {/* Adiciona o Header */}
            <div className="login-page">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit">Entrar</button>
                </form>
                <p onClick={handleRegisterRedirect} style={{ cursor: 'pointer', color: 'blue' }}>
                    Não tem conta? Registre-se aqui.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
