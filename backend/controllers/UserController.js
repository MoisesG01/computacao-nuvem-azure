const User = require('../models/User');

class UserController {
  // GET /api/users - Listar todos os usuários
  static async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json({
        success: true,
        message: 'Usuários encontrados com sucesso',
        data: users,
        total: users.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao buscar usuários',
        error: error.message
      });
    }
  }

  // GET /api/users/:id - Buscar usuário por ID
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'ID inválido'
        });
      }

      const user = await User.findById(id);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Usuário não encontrado'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Usuário encontrado com sucesso',
        data: user
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao buscar usuário',
        error: error.message
      });
    }
  }

  // POST /api/users - Criar novo usuário
  static async createUser(req, res) {
    try {
      const { name, email, age } = req.body;

      // Validações básicas
      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: 'Nome e email são obrigatórios'
        });
      }

      // Verificar se email já existe
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'Email já está em uso'
        });
      }

      const newUser = await User.create({ name, email, age });
      
      res.status(201).json({
        success: true,
        message: 'Usuário criado com sucesso',
        data: newUser
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao criar usuário',
        error: error.message
      });
    }
  }

  // PUT /api/users/:id - Atualizar usuário
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, age } = req.body;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'ID inválido'
        });
      }

      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: 'Nome e email são obrigatórios'
        });
      }

      // Verificar se usuário existe
      const existingUser = await User.findById(id);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'Usuário não encontrado'
        });
      }

      // Verificar se email já está em uso por outro usuário
      const userWithEmail = await User.findByEmail(email);
      if (userWithEmail && userWithEmail.id !== parseInt(id)) {
        return res.status(409).json({
          success: false,
          message: 'Email já está em uso por outro usuário'
        });
      }

      const updated = await User.update(id, { name, email, age });
      
      if (updated) {
        const updatedUser = await User.findById(id);
        res.status(200).json({
          success: true,
          message: 'Usuário atualizado com sucesso',
          data: updatedUser
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Erro ao atualizar usuário'
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao atualizar usuário',
        error: error.message
      });
    }
  }

  // DELETE /api/users/:id - Deletar usuário
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'ID inválido'
        });
      }

      // Verificar se usuário existe
      const existingUser = await User.findById(id);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'Usuário não encontrado'
        });
      }

      const deleted = await User.delete(id);
      
      if (deleted) {
        res.status(200).json({
          success: true,
          message: 'Usuário deletado com sucesso'
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Erro ao deletar usuário'
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao deletar usuário',
        error: error.message
      });
    }
  }

  // GET /api/users/stats - Estatísticas dos usuários
  static async getUserStats(req, res) {
    try {
      const totalUsers = await User.count();
      const users = await User.findAll();
      
      const averageAge = users.length > 0 
        ? users.reduce((sum, user) => sum + (user.age || 0), 0) / users.length 
        : 0;

      res.status(200).json({
        success: true,
        message: 'Estatísticas obtidas com sucesso',
        data: {
          totalUsers,
          averageAge: Math.round(averageAge * 100) / 100
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao obter estatísticas',
        error: error.message
      });
    }
  }
}

module.exports = UserController;
