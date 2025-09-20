const { executeQuery } = require('../database/connection');

class User {
  // Criar um novo usuário
  static async create(userData) {
    const { name, email, age } = userData;
    const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
    const result = await executeQuery(sql, [name, email, age]);
    return { id: result.insertId, name, email, age };
  }

  // Buscar todos os usuários
  static async findAll() {
    const sql = 'SELECT * FROM users ORDER BY created_at DESC';
    return await executeQuery(sql);
  }

  // Buscar usuário por ID
  static async findById(id) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const users = await executeQuery(sql, [id]);
    return users[0] || null;
  }

  // Buscar usuário por email
  static async findByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const users = await executeQuery(sql, [email]);
    return users[0] || null;
  }

  // Atualizar usuário
  static async update(id, userData) {
    const { name, email, age } = userData;
    const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';
    const result = await executeQuery(sql, [name, email, age, id]);
    return result.affectedRows > 0;
  }

  // Deletar usuário
  static async delete(id) {
    const sql = 'DELETE FROM users WHERE id = ?';
    const result = await executeQuery(sql, [id]);
    return result.affectedRows > 0;
  }

  // Contar total de usuários
  static async count() {
    const sql = 'SELECT COUNT(*) as total FROM users';
    const result = await executeQuery(sql);
    return result[0].total;
  }
}

module.exports = User;
