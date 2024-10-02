// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importando o JS do Bootstrap
import { BrowserRouter } from 'react-router-dom'; // Importando BrowserRouter
import { AuthProvider } from './context/AuthContext'; // Importando o AuthProvider

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
