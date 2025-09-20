import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import { userService } from './services/api';
import './App.css';

function App() {
  const [apiStatus, setApiStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar status da API
  const checkApiStatus = async () => {
    try {
      const response = await userService.healthCheck();
      setApiStatus({
        connected: true,
        message: response.message,
        version: response.version
      });
    } catch (error) {
      setApiStatus({
        connected: false,
        message: 'API não disponível',
        error: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkApiStatus();
  }, []);

  if (loading) {
    return (
      <div className="app-loading">
        <div className="spinner"></div>
        <p>Verificando conexão com a API...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>🚀 CRUD React + Azure Database</h1>
          <p>Gerenciamento de usuários com backend Node.js</p>
          
          <div className={`api-status ${apiStatus.connected ? 'connected' : 'disconnected'}`}>
            <span className="status-indicator">
              {apiStatus.connected ? '🟢' : '🔴'}
            </span>
            <span className="status-text">
              {apiStatus.connected ? 'API Conectada' : 'API Desconectada'}
            </span>
            {apiStatus.version && (
              <span className="version">v{apiStatus.version}</span>
            )}
          </div>
        </div>
      </header>

      <main className="app-main">
        {apiStatus.connected ? (
          <UserList />
        ) : (
          <div className="api-error">
            <h2>❌ Erro de Conexão</h2>
            <p>Não foi possível conectar com a API. Verifique se:</p>
            <ul>
              <li>O servidor backend está rodando (npm start na pasta backend)</li>
              <li>A API está disponível em http://localhost:3000</li>
              <li>O banco de dados Azure está acessível</li>
            </ul>
            <button 
              className="btn btn-primary" 
              onClick={checkApiStatus}
            >
              🔄 Tentar Novamente
            </button>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Desenvolvido com React + Node.js + Azure Database</p>
      </footer>
    </div>
  );
}

export default App;
