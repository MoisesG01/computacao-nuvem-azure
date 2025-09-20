import React, { useState, useEffect } from 'react';
import { userService } from '../services/api';
import UserForm from './UserForm';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [stats, setStats] = useState(null);

  // Carregar usuários
  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getAllUsers();
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar usuários: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  // Carregar estatísticas
  const loadStats = async () => {
    try {
      const response = await userService.getUserStats();
      setStats(response.data);
    } catch (err) {
      console.error('Erro ao carregar estatísticas:', err);
    }
  };

  // Carregar dados na inicialização
  useEffect(() => {
    loadUsers();
    loadStats();
  }, []);

  // Deletar usuário
  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja deletar este usuário?')) {
      return;
    }

    try {
      await userService.deleteUser(id);
      await loadUsers();
      await loadStats();
      alert('Usuário deletado com sucesso!');
    } catch (err) {
      alert('Erro ao deletar usuário: ' + (err.response?.data?.message || err.message));
    }
  };

  // Editar usuário
  const handleEdit = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  // Criar novo usuário
  const handleCreate = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  // Fechar formulário
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingUser(null);
  };

  // Atualizar lista após operações
  const handleFormSubmit = async () => {
    await loadUsers();
    await loadStats();
    handleCloseForm();
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Carregando usuários...</p>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <div className="header">
        <h1>👥 Gerenciamento de Usuários</h1>
        <div className="stats">
          {stats && (
            <div className="stat-card">
              <h3>📊 Estatísticas</h3>
              <p><strong>Total:</strong> {stats.totalUsers} usuários</p>
              <p><strong>Idade Média:</strong> {stats.averageAge} anos</p>
            </div>
          )}
        </div>
        <button className="btn btn-primary" onClick={handleCreate}>
          ➕ Novo Usuário
        </button>
      </div>

      {error && (
        <div className="error">
          ❌ {error}
          <button onClick={loadUsers}>Tentar Novamente</button>
        </div>
      )}

      <div className="users-grid">
        {users.length === 0 ? (
          <div className="empty-state">
            <p>📭 Nenhum usuário encontrado</p>
            <button className="btn btn-primary" onClick={handleCreate}>
              Criar Primeiro Usuário
            </button>
          </div>
        ) : (
          users.map(user => (
            <div key={user.id} className="user-card">
              <div className="user-info">
                <h3>{user.name}</h3>
                <p><strong>📧 Email:</strong> {user.email}</p>
                <p><strong>🎂 Idade:</strong> {user.age || 'Não informado'}</p>
                <p><strong>📅 Criado:</strong> {new Date(user.created_at).toLocaleDateString('pt-BR')}</p>
              </div>
              <div className="user-actions">
                <button 
                  className="btn btn-edit" 
                  onClick={() => handleEdit(user)}
                >
                  ✏️ Editar
                </button>
                <button 
                  className="btn btn-delete" 
                  onClick={() => handleDelete(user.id)}
                >
                  🗑️ Deletar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showForm && (
        <UserForm
          user={editingUser}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default UserList;
