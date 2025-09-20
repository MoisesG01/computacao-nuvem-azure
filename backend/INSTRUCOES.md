# Backend CRUD com Azure Database

Este projeto é um backend Node.js que se conecta a um banco de dados MySQL hospedado no Azure e implementa operações CRUD para gerenciar usuários.

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Acesso ao banco de dados Azure MySQL

## 🚀 Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar banco de dados
Execute o script SQL localizado em `database/init.sql` no seu banco de dados Azure para criar a tabela de usuários.

### 3. Iniciar o servidor
```bash
# Modo desenvolvimento (com nodemon)
npm run dev

# Modo produção
npm start
```

O servidor será iniciado na porta 3000 (ou na porta definida na variável de ambiente PORT).

## 📚 Endpoints da API

### Health Check
- **GET** `/api/health` - Verifica se a API está funcionando

### Usuários
- **GET** `/api/users` - Lista todos os usuários
- **GET** `/api/users/:id` - Busca usuário por ID
- **GET** `/api/users/stats` - Obtém estatísticas dos usuários
- **POST** `/api/users` - Cria novo usuário
- **PUT** `/api/users/:id` - Atualiza usuário existente
- **DELETE** `/api/users/:id` - Remove usuário

## 📝 Exemplos de uso

### Criar usuário
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "age": 25
  }'
```

### Listar usuários
```bash
curl http://localhost:3000/api/users
```

### Buscar usuário por ID
```bash
curl http://localhost:3000/api/users/1
```

### Atualizar usuário
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva Santos",
    "email": "joao.silva@email.com",
    "age": 26
  }'
```

### Deletar usuário
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## 🧪 Testando a API

Execute o arquivo de teste para verificar se tudo está funcionando:

```bash
node examples/api-test.js
```

## 📁 Estrutura do projeto

```
backend-azure-crud/
├── config.js                 # Configurações do banco e servidor
├── server.js                 # Servidor principal
├── package.json              # Dependências do projeto
├── database/
│   ├── connection.js         # Configuração de conexão com banco
│   └── init.sql             # Script de inicialização do banco
├── models/
│   └── User.js              # Modelo de usuário
├── controllers/
│   └── UserController.js    # Lógica de negócio
├── routes/
│   ├── index.js             # Rotas principais
│   └── userRoutes.js        # Rotas de usuários
└── examples/
    └── api-test.js          # Exemplo de uso da API
```

## 🔧 Configurações

As configurações do banco de dados estão em `config.js`:
- Host: 172.191.207.94
- Usuário: userdb
- Senha: admin@123456
- Database: db01

## 📊 Respostas da API

Todas as respostas seguem o padrão:

```json
{
  "success": true/false,
  "message": "Mensagem descritiva",
  "data": {}, // dados quando aplicável
  "error": "erro quando aplicável"
}
```

## 🛠️ Troubleshooting

### Problema de conexão com banco
- Verifique se as credenciais estão corretas
- Confirme se o IP está acessível
- Verifique se o banco MySQL está rodando

### Porta já em uso
- Altere a porta no arquivo `config.js`
- Ou defina a variável de ambiente PORT

### Erro de dependências
- Execute `npm install` novamente
- Verifique a versão do Node.js
