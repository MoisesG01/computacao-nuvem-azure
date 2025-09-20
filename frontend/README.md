# Frontend React - CRUD Usuários

Frontend desenvolvido em React para consumir a API CRUD de usuários com banco de dados Azure.

## 🚀 Como executar

### 1. Instalar dependências
```bash
cd frontend
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm start
```

O frontend será aberto automaticamente no navegador em `http://localhost:3000`.

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- Backend rodando na porta 3000 (execute `npm start` na pasta raiz do projeto)

## 🎨 Funcionalidades

### ✅ Interface Moderna
- Design responsivo e moderno
- Animações suaves
- Feedback visual para todas as ações
- Status da conexão com API em tempo real

### ✅ Operações CRUD Completas
- **Listar** todos os usuários com estatísticas
- **Criar** novos usuários com validação
- **Editar** usuários existentes
- **Deletar** usuários com confirmação
- **Visualizar** estatísticas em tempo real

### ✅ Validações
- Validação de campos obrigatórios
- Validação de formato de email
- Validação de idade (0-150 anos)
- Feedback de erro em tempo real

### ✅ Experiência do Usuário
- Loading states durante operações
- Mensagens de sucesso/erro
- Confirmação antes de deletar
- Interface intuitiva e responsiva

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **Axios** - Cliente HTTP para API
- **CSS3** - Estilos customizados
- **React Hooks** - Gerenciamento de estado

## 📁 Estrutura do Projeto

```
frontend/
├── public/
│   └── index.html          # HTML principal
├── src/
│   ├── components/         # Componentes React
│   │   ├── UserList.js     # Lista de usuários
│   │   ├── UserList.css    # Estilos da lista
│   │   ├── UserForm.js     # Formulário de usuários
│   │   └── UserForm.css    # Estilos do formulário
│   ├── services/           # Serviços da API
│   │   └── api.js          # Cliente HTTP
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos globais
│   ├── index.js            # Ponto de entrada
│   └── index.css           # Estilos base
├── package.json            # Dependências
└── README.md              # Este arquivo
```

## 🔧 Configuração da API

O frontend está configurado para se conectar com a API em `http://localhost:3000/api`. 

Se você precisar alterar a URL da API, edite o arquivo `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:3000/api'; // Altere aqui
```

## 📱 Responsividade

A interface é totalmente responsiva e funciona bem em:
- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops

## 🎯 Funcionalidades Detalhadas

### Lista de Usuários
- Grid responsivo de cards
- Estatísticas em tempo real
- Botões de ação para cada usuário
- Estado vazio com call-to-action

### Formulário de Usuários
- Modal com animações
- Validação em tempo real
- Campos: Nome*, Email*, Idade
- Estados de loading durante salvamento

### Status da API
- Indicador visual de conexão
- Versão da API
- Botão para reconectar

## 🚀 Scripts Disponíveis

- `npm start` - Inicia servidor de desenvolvimento
- `npm build` - Gera build de produção
- `npm test` - Executa testes
- `npm eject` - Ejetar configuração (não recomendado)

## 🔍 Troubleshooting

### Erro de conexão com API
- Verifique se o backend está rodando
- Confirme se a porta 3000 está livre
- Verifique o console do navegador para erros

### Problemas de instalação
- Delete a pasta `node_modules` e execute `npm install` novamente
- Verifique a versão do Node.js (14+)

### Problemas de build
- Execute `npm run build` para verificar erros
- Verifique se todas as dependências estão instaladas

## 📞 Suporte

Para dúvidas ou problemas, verifique:
1. Console do navegador (F12)
2. Logs do terminal
3. Status da conexão com API
