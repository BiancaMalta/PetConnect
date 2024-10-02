import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Adotar from './pages/Adotar';
import Doar from './pages/Doar';
import Chamados from './pages/Chamados';
import Solicitações from './pages/Solicitações';
import Chat from './pages/Chat';
import CadastrarAnimal from './pages/CadastrarAnimal';
import PerfilUsuario from './pages/PerfilUsuario';
import './styles/App.css';

const App = () => {
    const location = useLocation(); // Obter a localização atual

    return (
        <>
            {/* Renderiza o Header apenas se não estiver na página inicial */}
            {location.pathname !== '/' && <Header />}
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adotar" element={<Adotar />} />
                <Route path="/doar" element={<Doar />} />
                <Route path="/chamados" element={<Chamados />} />
                <Route path="/solicitacoes" element={<Solicitações />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/cadastrar-animal" element={<CadastrarAnimal />} />
                <Route path="/perfil" element={<PerfilUsuario />} />
            </Routes>
            
            <Footer />
        </>
    );
};

export default App;
