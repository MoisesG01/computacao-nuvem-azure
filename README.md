# 🚀 CRUD Completo - Node.js + React + Azure Database

Sistema completo de gerenciamento de usuários com backend Node.js, frontend React e banco de dados MySQL hospedado no Azure.

## 📋 Visão Geral

Este projeto implementa um sistema CRUD (Create, Read, Update, Delete) completo para gerenciamento de usuários, utilizando tecnologias modernas e uma arquitetura robusta.

### 🏗️ Arquitetura
- **Backend**: Node.js + Express + MySQL2
- **Frontend**: React 18 + Axios
- **Banco de Dados**: MySQL no Azure
- **API**: RESTful com validações completas

## 🎯 Funcionalidades

### Backend (API)
- ✅ CRUD completo de usuários
- ✅ Validações de dados
- ✅ Conexão com banco Azure
- ✅ Pool de conexões
- ✅ Logs detalhados
- ✅ Tratamento de erros
- ✅ Health check
- ✅ Estatísticas de usuários

### Frontend (React)
- ✅ Interface moderna e responsiva
- ✅ Listagem de usuários com cards
- ✅ Formulário modal para criar/editar
- ✅ Validação em tempo real
- ✅ Feedback visual e loading states
- ✅ Estatísticas em tempo real
- ✅ Confirmação de exclusão

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- Conta Azure com banco MySQL
- Git

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd backend-azure-crud
```

### 2. Configure o banco de dados
Edite o arquivo `config.js` com suas credenciais do Azure:
```javascript
module.exports = {
  database: {
    host: 'SEU_IP_AZURE',
    user: 'SEU_USUARIO',
    password: 'SUA_SENHA',
    database: 'SEU_DATABASE',
    connectionLimit: 10
  }
};
```

### 3. Instale dependências do backend
```bash
npm install
```

### 4. Execute o backend
```bash
npm start
```
O servidor iniciará na porta 3000 e criará automaticamente as tabelas no banco.

### 5. Instale dependências do frontend
```bash
cd frontend
npm install
```

### 6. Execute o frontend
```bash
npm start
```
O frontend será aberto automaticamente no navegador.

## 📁 Estrutura do Projeto

```
backend-azure-crud/
├── 📁 backend/                    # Backend Node.js
│   ├── 📁 database/              # Configuração do banco
│   │   ├── connection.js         # Pool de conexões
│   │   ├── init.js              # Inicialização automática
│   │   └── init.sql             # Script SQL
│   ├── 📁 models/               # Modelos de dados
│   │   └── User.js              # Modelo de usuário
│   ├── 📁 controllers/          # Lógica de negócio
│   │   └── UserController.js    # Controller de usuários
│   ├── 📁 routes/               # Rotas da API
│   │   ├── index.js             # Rotas principais
│   │   └── userRoutes.js        # Rotas de usuários
│   ├── 📁 examples/             # Exemplos de uso
│   │   └── api-test.js          # Teste da API
│   ├── config.js                # Configurações
│   ├── server.js                # Servidor principal
│   ├── package.json             # Dependências backend
│   └── INSTRUCOES.md            # Instruções detalhadas
├── 📁 frontend/                  # Frontend React
│   ├── 📁 public/               # Arquivos públicos
│   ├── 📁 src/                  # Código fonte
│   │   ├── 📁 components/       # Componentes React
│   │   ├── 📁 services/         # Serviços da API
│   │   ├── App.js               # Componente principal
│   │   └── index.js             # Ponto de entrada
│   ├── package.json             # Dependências frontend
│   └── README.md                # Documentação frontend
├── .gitignore                   # Arquivos ignorados pelo Git
└── README.md                    # Este arquivo
```

## 🔧 Configuração do Banco Azure

### 1. Criar banco MySQL no Azure
- Acesse o portal Azure
- Crie um servidor MySQL
- Configure as regras de firewall
- Crie o banco de dados

### 2. Configurar conexão
As credenciais estão no arquivo `config.js`:
- **Host**: IP do servidor Azure
- **Usuário**: Nome do usuário
- **Senha**: Senha do banco
- **Database**: Nome do banco

## 📚 Endpoints da API

### Usuários
- `GET /api/users` - Listar todos os usuários
- `GET /api/users/:id` - Buscar usuário por ID
- `GET /api/users/stats` - Estatísticas dos usuários
- `POST /api/users` - Criar novo usuário
- `PUT /api/users/:id` - Atualizar usuário
- `DELETE /api/users/:id` - Deletar usuário

### Sistema
- `GET /api/health` - Health check da API
- `GET /api/` - Informações da API

## 🧪 Testando a API

Execute o script de teste:
```bash
node examples/api-test.js
```

Ou use curl:
```bash
# Listar usuários
curl http://localhost:3000/api/users

# Criar usuário
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@email.com", "age": 25}'
```

## 🎨 Interface do Frontend

A interface React oferece:
- **Dashboard** com estatísticas
- **Lista** de usuários em cards
- **Formulário** modal para criar/editar
- **Validações** em tempo real
- **Responsividade** para mobile
- **Animações** suaves

## 🔒 Segurança

- Validação de dados no backend
- Sanitização de inputs
- Tratamento de erros
- Pool de conexões limitado
- Validação de tipos

## 📱 Responsividade

O frontend é totalmente responsivo:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🚀 Deploy

### Backend
- Configure variáveis de ambiente
- Use PM2 para produção
- Configure proxy reverso (Nginx)

### Frontend
- Execute `npm run build`
- Sirva os arquivos estáticos
- Configure proxy para API

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação
2. Consulte os logs
3. Teste a conexão com o banco
4. Abra uma issue no GitHub

---

**Desenvolvido com ❤️ usando Node.js + React + Azure**
