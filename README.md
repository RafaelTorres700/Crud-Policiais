# 🚔 CRUD de Policiais Militares

Uma aplicação web completa para gerenciar o cadastro de policiais militares, desenvolvida com tecnologias modernas e foco em segurança de dados.

## 📋 Objetivo do Projeto

Criar uma aplicação funcional que permita:
- ✅ **Cadastrar** policiais militares com dados completos
- ✅ **Listar** todos os policiais cadastrados
- ✅ **Editar** informações dos policiais existentes
- ✅ **Excluir** registros do sistema
- ✅ **Criptografar** matrículas para maior segurança
- ✅ **Validar** CPF com 11 dígitos

### Campos do Sistema:
- **RG Civil**: Registro geral civil
- **RG Militar**: Registro militar
- **CPF**: Cadastro de Pessoa Física (com validação)
- **Data de Nascimento**: Data no formato brasileiro
- **Matrícula**: Identificação militar (criptografada)

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **MySQL** - Sistema de gerenciamento de banco de dados
- **bcryptjs** - Biblioteca para criptografia de senhas/dados
- **cors** - Middleware para controle de acesso
- **dotenv** - Gerenciamento de variáveis de ambiente
- **mysql2** - Driver MySQL para Node.js

### Frontend
- **Angular** - Framework para aplicações web
- **TypeScript** - Superset JavaScript com tipagem
- **HTML5/CSS3** - Estrutura e estilização
- **RxJS** - Biblioteca para programação reativa

### Banco de Dados
- **MySQL** - Estrutura relacional com criptografia de dados

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL Server
- Angular CLI

### 📁 Estrutura do Projeto
```
Crud-Policiais/
├── backend/
│   └── crud-policiais-api/
│       ├── controller/
│       │   └── policiaisController.js
│       ├── routes/
│       │   └── policiais.js
│       ├── server.js
│       ├── db.js
│       └── .env
└── frontend/
    └── crud-policiais-web/
        └── src/
            └── app/
                └── pages/
                    ├── policiais/
                    └── services/
```

### 🔧 Instalação do Backend

1. **Navegue até a pasta do backend:**
```bash
cd backend/crud-policiais-api
```

2. **Instale as dependências:**


```bash
npm init -y
npm install express
npm install cors
npm install mysql2
npm install bcryptjs
npm install dotenv
npm install nodemon --save-dev
```

3. **Configure o arquivo `.env`:**
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=sistema_policiais
DB_PORT=3306
APP_PORT=3025
```

4. **Crie o banco de dados:**
```sql
CREATE DATABASE sistema_policiais;
USE sistema_policiais;

CREATE TABLE policiais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rg_civil VARCHAR(20) NOT NULL,
    rg_militar VARCHAR(20) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    data_nascimento DATE NOT NULL,
    matricula VARCHAR(255) NOT NULL
);
```

5. **Configure o script no package.json:**
```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}
```

6. **Execute o servidor:**
```bash
npm run dev
```

O backend estará rodando em: `http://localhost:3025`

### 🎨 Instalação do Frontend

1. **Navegue até a pasta do frontend:**
```bash
cd frontend/crud-policiais-web
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
ng serve
```

O frontend estará disponível em: `http://localhost:4200`

## 📊 Estrutura do Banco de Dados

### Tabela: `policiais`
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT AUTO_INCREMENT | Chave primária |
| `rg_civil` | VARCHAR(20) | RG Civil do policial |
| `rg_militar` | VARCHAR(20) | RG Militar |
| `cpf` | VARCHAR(14) | CPF (validado com 11 dígitos) |
| `data_nascimento` | DATE | Data de nascimento |
| `matricula` | VARCHAR(255) | Matrícula militar (criptografada) |

## 🔒 Recursos de Segurança

- **Criptografia de Matrícula**: As matrículas são criptografadas usando bcrypt antes de serem salvas
- **Validação de CPF**: Frontend valida CPF com exatamente 11 dígitos
- **CORS Configurado**: Controle de acesso entre domínios
- **Variáveis de Ambiente**: Dados sensíveis protegidos no arquivo .env

## 🎯 Funcionalidades

### ✨ CRUD Completo
- **Create**: Adicionar novos policiais
- **Read**: Listar todos os policiais
- **Update**: Editar informações existentes
- **Delete**: Remover registros

### 🔍 Validações
- Todos os campos são obrigatórios
- CPF deve conter exatamente 11 dígitos
- Data de nascimento no formato correto
- Feedback visual para usuário

### 🎨 Interface
- Design responsivo e moderno
- Cores profissionais (azul e branco)
- Efeitos hover e transições suaves
- Layout otimizado para evitar quebra de linha

## 🚀 Como Usar

1. **Acesse** `http://localhost:4200`
2. **Preencha** o formulário com os dados do policial
3. **Clique** em "Adicionar" para salvar
4. **Visualize** a lista de policiais cadastrados
5. **Use** os botões "Editar" ou "Excluir" conforme necessário

## 📸 Screenshots

*[Adicione aqui as imagens da aplicação em funcionamento]*

- Tela principal com formulário de cadastro
- Lista de policiais cadastrados
- Formulário de edição
- Banco de dados com matrículas criptografadas

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

💡 **Dica**: Certifique-se de que tanto o backend quanto o frontend estejam rodando simultaneamente para o funcionamento completo da aplicação.


