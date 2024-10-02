import React from 'react';
import RequestCard from '../components/RequestCard';

const Solicitações = () => {
    return (
        <div>
            <h1>Solicitações Recebidas</h1>
            {/* Exemplo de solicitação, pode ser mapeado a partir de um array */}
            <RequestCard title="Solicitação 1" details="Detalhes da solicitação 1" />
            <RequestCard title="Solicitação 2" details="Detalhes da solicitação 2" />
        </div>
    );
};

export default Solicitações;
