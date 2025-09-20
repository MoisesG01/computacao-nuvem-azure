const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Middleware para log das requisições
router.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Rotas para usuários
router.get('/', UserController.getAllUsers);
router.get('/stats', UserController.getUserStats);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
