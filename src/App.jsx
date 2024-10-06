import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Adotar from './pages/Adotar';
import MeusPedidos from './pages/MeusPedidos';
import Chat from './pages/Chat';
import PerfilUsuario from './pages/PerfilUsuario';
import LoginPage from './pages/LoginPage';
import MeusCadastros from './pages/MeusCadastros';
import CadastrarAnimal from './pages/CadastrarAnimal';
import CadastrarUsuario from './pages/CadastrarUsuario';
import { AuthProvider, useAuth } from './context/AuthContext';  // Importa o AuthProvider e useAuth
import './styles/App.css';

// Proteção de rotas que redireciona para login caso o usuário não esteja autenticado
const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? element : null; // Retorna o componente se autenticado, ou nada caso contrário
};

const App = () => {
    const location = useLocation();

    return (
        <AuthProvider>
            {/* Define as rotas */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adotar" element={<Adotar />} /> {/* Header e Banner estão em Adotar */}
                <Route path="/meus-pedidos" element={<MeusPedidos />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/perfil" element={<PerfilUsuario />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/meus-cadastros" element={<ProtectedRoute element={<MeusCadastros />} />} />
                <Route path="/cadastrar-animal" element={<CadastrarAnimal />} />
                <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />
            </Routes>

            {/* Verifica se não está na página inicial para exibir o Footer */}
            {location.pathname !== '/' && <Footer />}
        </AuthProvider>
    );
};

export default App;
