import React from 'react';
import CallCard from '../components/CallCard';

const Chamados = () => {
    return (
        <div>
            <h1>Chamados Abertos</h1>
            {/* Exemplo de chamada, pode ser mapeado a partir de um array */}
            <CallCard title="Chamado 1" description="Descrição do chamado 1" />
            <CallCard title="Chamado 2" description="Descrição do chamado 2" />
        </div>
    );
};

export default Chamados;
