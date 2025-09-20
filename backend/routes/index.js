const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// Rota de health check
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API está funcionando!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Rota raiz
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Bem-vindo à API CRUD com Azure!',
    endpoints: {
      health: '/api/health',
      users: '/api/users'
    }
  });
});

// Rotas de usuários
router.use('/users', userRoutes);

module.exports = router;
