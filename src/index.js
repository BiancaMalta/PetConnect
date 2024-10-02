import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importando o JS do Bootstrap

import { BrowserRouter } from 'react-router-dom'; // Importando BrowserRouter

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
