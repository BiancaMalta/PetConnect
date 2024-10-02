import React, { createContext, useContext, useState } from 'react';

// Cria o contexto
const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado do usuário
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticação
    const [userType, setUserType] = useState(null); // Tipo de usuário

    const login = (userData) => {
        setUser(userData); // Define o usuário autenticado
        setIsAuthenticated(true); // Marca como autenticado
        setUserType(userData.type); // Define o tipo do usuário
    };

    const logout = () => {
        setUser(null); // Remove o usuário autenticado
        setIsAuthenticated(false); // Marca como não autenticado
        setUserType(null); // Limpa o tipo de usuário
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, userType, setIsAuthenticated, setUserType, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar o contexto de autenticação
export const useAuth = () => {
    return useContext(AuthContext);
};
