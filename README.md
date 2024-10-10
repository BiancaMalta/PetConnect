# 🐾 **PetConnect - Front-end**

Este repositório contém o código-fonte do front-end da aplicação **PetConnect**, uma plataforma web que facilita o processo de adoção e doação de pets. A aplicação foi projetada para ser intuitiva e responsiva, proporcionando uma experiência de usuário eficiente e envolvente, com suporte a interações em tempo real e integração com APIs RESTful.

## **Índice**

- [ Introdução](#-introdução)
- [ Arquitetura do Projeto](#️-arquitetura-do-projeto)
  - [ Componentes Principais](#-componentes-principais)
  - [ Fluxo de Dados](#-fluxo-de-dados)
  - [ Comunicação com a API](#-comunicação-com-a-api)
- [ Estrutura de Pastas](#-estrutura-de-pastas)
- [ Ferramentas e Tecnologias Utilizadas](#-ferramentas-e-tecnologias-utilizadas)
- [ Ambiente de Desenvolvimento](#-ambiente-de-desenvolvimento)
- [ Instalação e Configuração](#️-instalação-e-configuração)
- [ Melhorias Futuras](#-melhorias-futuras)
- [ Contribuindo](#-contribuindo)
- [ Desenvolvedores](#-desenvolvedores)
- [ Licença](#-licença)

---

## 📘 **Introdução**

O **PetConnect** é uma plataforma para conectar pessoas interessadas em adotar ou doar pets, de forma interativa e intuitiva. Os usuários podem se registrar, buscar por pets disponíveis, visualizar detalhes, e realizar a adoção. Este projeto segue uma abordagem modular e escalável, dividindo-se em back-end (API) e front-end.

O front-end foi desenvolvido usando **React** e segue as melhores práticas da engenharia de software, como a adoção de princípios **SOLID** e **componentização**. A arquitetura foi desenhada para maximizar a reusabilidade e a manutenibilidade, utilizando ferramentas modernas de desenvolvimento web. E por fim, a API do projeto é responsável pela lógica de negócios, manipulação de dados e persistência no banco de dados.

> **Link da API**: [PetConnect API](https://github.com/Mykaell-Max/PetConnect)

---

## 🏗️ **Arquitetura do Projeto**

A arquitetura do front-end do **PetConnect** segue o padrão de uma **SPA (Single Page Application)** desenvolvida em **React**, adotando boas práticas como **componentização** e **separação de responsabilidades**. Isso garante uma aplicação escalável e de fácil manutenção.

### 📦 **Componentes Principais**

- **Autenticação (Login/Register)**:
  - Gestão de login e registro com autenticação segura.
  - Integração com a API para gerenciamento de sessões.
  
- **Gestão de Pets**:
  - Exibição de pets disponíveis para adoção.
  - Filtragem e categorização de pets por espécie e outros atributos.

- **Solicitação de Adoção**:
  - Envio de pedidos de adoção diretamente pela interface.
  - Visualização e gerenciamento de pedidos enviados.

- **Chat**:
  - Comunicação direta entre adotantes e doadores com histórico de mensagens.
  - Futuras implementações de **WebSockets** para mensagens em tempo real.

- **Perfil de Usuário**:
  - Visualização e edição dos dados do usuário.
  - Upload de fotos de perfil utilizando o **Firebase Storage**.


### 🔄 **Fluxo de Dados**

O fluxo de dados segue a arquitetura unidirecional, com o **React Context API** ou **Redux** gerenciando o estado global da aplicação. As principais fontes de dados são as seguintes:

  - **Autenticação e Autorização**: O estado de autenticação do usuário é armazenado globalmente para ser acessado por toda a aplicação.
  - **Pets**: Os dados dos pets são carregados a partir da API, sendo armazenados temporariamente no estado local e global para otimizar o desempenho.



### 🌐 **Comunicação com a API**

A comunicação entre o front-end e o back-end é realizada por meio de requisições **HTTP** usando o **Axios**. As operações são realizadas de forma assíncrona, e a autenticação do usuário é gerenciada. As rotas protegidas são validadas utilizando interceptors do Axios para anexar o token em cada solicitação.

A seguir, uma visão geral das rotas da API:

  - `/users/register`: Registro de novos usuários.
  - `/users/login`: Autenticação de usuários existentes.
  - `/pets/searchAll`: Retorna todos os pets disponíveis para adoção.
  - `/pets/register`: Cadastro de novos pets (com upload de imagem).
  - `/chats/createChat`: Criação de um novo chat entre usuários.
Para mais informações sobre as rotas e funcionamento da API, acesse o repositório da API.

---

## 📂 **Estrutura de Pastas**

A organização do projeto segue uma hierarquia clara, separando componentes, serviços e outros recursos. Ela foi construída em torno do conceito de componentes reutilizáveis, seguindo a filosofia do design modular.
```
/petconnect
│
├── /public             # Arquivos públicos como imagens e ícones
│
├── /src                # Código fonte da aplicação
│   ├── /components     # Componentes reutilizáveis
│   ├── /pages          # Páginas da aplicação
│   ├── /services       # Serviços para comunicação com a API
│   ├── /styles         # Estilos globais e de componentes
│   └── /utils          # Funções utilitárias
│
└── package.json        # Dependências e scripts do projeto

```

---

## 🛠️ **Ferramentas e Tecnologias Utilizadas**

| **Ferramenta/Biblioteca**   | **Descrição**                                |
|-----------------------------|----------------------------------------------|
| **React**                   | Biblioteca principal para construção de UIs. |
| **Vite**                    | Ferramenta de build e desenvolvimento rápido.|
| **Axios**                   | Cliente HTTP para requisições assíncronas.   |
| **React Router**            | Roteamento de páginas na aplicação.          |
| **Firebase**                | Armazenamento de imagens de pets e usuários. |
| **Material UI**             | Componentes estilizados e responsivos.       |
| **Sass**                    | Pré-processador CSS para maior flexibilidade.|
| **ESLint e Prettier**       | Garante a consistência de código e boas práticas de desenvolvimento.|

### 🔑 **Autenticação:**

A aplicação usa **JWT (JSON Web Tokens)** para autenticação segura e controle de sessões, assegurando que somente usuários autorizados possam acessar certas funcionalidades.


---

## 🖥️ **Ambiente de Desenvolvimento**

- **Node.js:** Ambiente de execução JavaScript.
- **npm:** Gerenciador de pacotes para Node.js.
- **Hot-reloading**: As mudanças feitas no código são refletidas automaticamente.
- **Git**: Versionamento do código para facilitar a colaboração.
- **Visual Studio Code:** Editor de código.

---
## ⚙️ **Instalação e Configuração**

### **Passos de Instalação**:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/petconnect-frontend.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd petconnect-frontend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` com as seguintes variáveis de ambiente:

   ```env
   REACT_APP_API_URL=URL_DA_API
   ```

5. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Acesse o projeto em [http://localhost:3000](http://localhost:3000).

---

## 🚀 **Melhorias Futuras**

- **WebSockets para Chat em Tempo Real**: Otimizar a troca de mensagens instantâneas.
- **Geolocalização**: Exibir pets próximos à localização do usuário.
- **Notificações em Tempo Real**: Notificar doadores e adotantes sobre atualizações e mensagens.
- **Melhorias de Performance**: Otimizações para dispositivos móveis.

---

## 🤝 **Contribuindo**

Contribuições são sempre bem-vindas! Siga os passos abaixo para contribuir com o projeto:

1. Faça um fork do repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`.
4. Faça o push para a branch: `git push origin minha-feature`.
5. Abra um pull request para revisão.

---

## 👥 **Desenvolvedores**

- [Mykaell Max](https://github.com/Mykaell-Max) 
- [Breno Palma](https://github.com/BrenoPalma) 
- [Bianca Malta](https://github.com/BiancaMalta) 

---

## 📄 **Licença**

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---
