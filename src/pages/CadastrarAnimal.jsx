import React, { useState } from 'react';
import '../styles/CadastrarAnimais.css'; // Importa o CSS
import Header from '../components/Header';

const CadastrarAnimal = () => {
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [idade, setIdade] = useState('');
    const [porte, setPorte] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState(null);
    const [carteiraVacinacao, setCarteiraVacinacao] = useState(null);
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [sexo, setSexo] = useState('');
    const [castrado, setCastrado] = useState(false);

    const estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia']; // Exemplo de estados
    const cidades = {
        'São Paulo': ['São Paulo', 'Campinas', 'Santos'],
        'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
        'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'],
        'Bahia': ['Salvador', 'Feira de Santana', 'Vitória da Conquista'],
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envio dos dados do formulário para o backend
        console.log({
            nome,
            raca,
            idade,
            porte,
            descricao,
            foto,
            carteiraVacinacao,
            estado,
            cidade,
            sexo,
            castrado,
        });
    };

    const handleFileChange = (e) => {
        setFoto(e.target.files[0]);
    };

    const handleCarteiraVacinacaoChange = (e) => {
        setCarteiraVacinacao(e.target.files[0]);
    };

    return (
        <div>
            <Header /> {/* Adiciona o Header */}

            <div className="cadastrar-animal-page">
                <h1>Adicionar Novo Pet</h1>
                <form onSubmit={handleSubmit} className="cadastrar-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome do Animal</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="raca">Raça</label>
                        <input
                            type="text"
                            id="raca"
                            value={raca}
                            onChange={(e) => setRaca(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="idade">Idade</label>
                        <input
                            type="number"
                            id="idade"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="porte">Porte</label>
                        <select
                            id="porte"
                            value={porte}
                            onChange={(e) => setPorte(e.target.value)}
                            required
                        >
                            <option value="">Selecione o porte</option>
                            <option value="pequeno">Pequeno</option>
                            <option value="medio">Médio</option>
                            <option value="grande">Grande</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="sexo">Sexo</label>
                        <select
                            id="sexo"
                            value={sexo}
                            onChange={(e) => setSexo(e.target.value)}
                            required
                        >
                            <option value="">Selecione o sexo</option>
                            <option value="macho">Macho</option>
                            <option value="femea">Fêmea</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="castrado">Castrado?</label>
                        <select
                            id="castrado"
                            value={castrado}
                            onChange={(e) => setCastrado(e.target.value === "Sim")}
                            required
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="estado">Estado</label>
                        <select
                            id="estado"
                            value={estado}
                            onChange={(e) => {
                                setEstado(e.target.value);
                                setCidade(''); // Limpa a cidade ao mudar o estado
                            }}
                            required
                        >
                            <option value="">Selecione o estado</option>
                            {estados.map((est) => (
                                <option key={est} value={est}>{est}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cidade">Cidade</label>
                        <select
                            id="cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                            disabled={!estado} // Desabilita se o estado não for selecionado
                        >
                            <option value="">Selecione a cidade</option>
                            {estado && cidades[estado]?.map((cid) => (
                                <option key={cid} value={cid}>{cid}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="foto">Foto do Animal</label>
                        <input
                            type="file"
                            id="foto"
                            onChange={handleFileChange}
                            accept="image/*"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="carteira-vacinacao">Carteira de Vacinação</label>
                        <input
                            type="file"
                            id="carteira-vacinacao"
                            onChange={handleCarteiraVacinacaoChange}
                            accept="application/pdf, image/*"
                            required
                        />
                    </div>

                    <button type="submit" className="button.cadastrar-animais">Cadastrar Animal</button>
                </form>
            </div>
        </div>
    );
};

export default CadastrarAnimal;
