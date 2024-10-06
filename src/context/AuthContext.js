import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState(null); // Armazena o tipo de usuário

    const login = () => setIsAuthenticated(true);
    const logout = () => {
        setIsAuthenticated(false);
        setUserType(null); // Reseta o tipo de usuário ao deslogar
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, setIsAuthenticated, userType, setUserType }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

