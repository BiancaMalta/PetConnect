import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Adotar from './pages/Adotar';
import Doar from './pages/Doar';
import MeusPedidos from './pages/MeusPedidos'; 
import Chat from './pages/Chat';
import PerfilUsuario from './pages/PerfilUsuario';
import LoginPage from './pages/LoginPage';
import MeusCadastros from './pages/MeusCadastros';
import { AuthProvider } from './context/AuthContext'; // Importa o AuthProvider
import './styles/App.css';

const App = () => {
    const location = useLocation(); // Obter a localização atual

    return (
        <AuthProvider> {/* Envolve o app com o AuthProvider */}
            <>
                {/* Renderiza o Header apenas se não estiver na página inicial */}
                {location.pathname !== '/' && <Header />}
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adotar" element={<Adotar />} />
                    <Route path="/doar" element={<Doar />} />
                    <Route path="/meus-pedidos" element={<MeusPedidos />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/perfil" element={<PerfilUsuario />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path="/meus-cadastros" element={<MeusCadastros />} />        
                </Routes>
                
                <Footer />
            </>
        </AuthProvider>
    );
};

export default App;
