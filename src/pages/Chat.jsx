// src/components/Chat.jsx
import React from 'react';
import Header from '../components/Header';
const Chat = () => {
    return (
        <div >
            <Header /> {/* Adiciona o Header */}
            <h1>Chat com o Doar</h1>
            <div className="chat-container">
                {/* Aqui você pode implementar a lógica do chat */}
                <p>Este será o espaço para as conversas.</p>
            </div>
        </div>
    );
};

export default Chat;
