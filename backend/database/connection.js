const mysql = require('mysql2/promise');
const config = require('../config');

// Pool de conexões para melhor performance
const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  connectionLimit: config.database.connectionLimit,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true
});

// Função para testar a conexão
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexão com banco de dados estabelecida com sucesso!');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error.message);
    return false;
  }
}

// Função para executar queries
async function executeQuery(sql, params = []) {
  try {
    const [rows] = await pool.execute(sql, params);
    return rows;
  } catch (error) {
    console.error('Erro na query:', error.message);
    throw error;
  }
}

module.exports = {
  pool,
  testConnection,
  executeQuery
};
