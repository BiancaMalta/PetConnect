import React, { useState } from 'react';
import CadastrarAnimal from './CadastrarAnimal';
import Adotar from './Adotar';

const GerenciarPets = () => {
    const [pets, setPets] = useState([
        { id: 1, nome: 'Breninho lindo', tipo: 'Gato', descricao: '2 anos', localizacao: 'Bairro', foto: '/imagens/image.png' },
        { id: 2, nome: 'Megatron', tipo: 'Gato', descricao: '3 meses', localizacao: 'Bairro', foto: '/imagens/image.png' }
    ]);

    const adicionarPet = (novoPet) => {
        // Gera um ID único para o novo pet
        const id = pets.length + 1;
        setPets([...pets, { ...novoPet, id }]);
    };

    return (
        <div>
            {/* O componente de cadastro passa a adicionar pets */}
            <CadastrarAnimal adicionarPet={adicionarPet} />

            {/* O componente de adoção lista os pets e permite interação */}
            <Adotar pets={pets} />
        </div>
    );
};

export default GerenciarPets;
