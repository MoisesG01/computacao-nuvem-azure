const { executeQuery } = require('./connection');
const fs = require('fs');
const path = require('path');

async function initializeDatabase() {
  try {
    console.log('🔧 Inicializando banco de dados...');

    // Ler o arquivo SQL
    const sqlPath = path.join(__dirname, 'init.sql');
    const sqlContent = fs.readFileSync(sqlPath, 'utf8');

    // Dividir o conteúdo em comandos individuais
    const commands = sqlContent
      .split(';')
      .map(cmd => cmd.trim())
      .filter(cmd => cmd.length > 0);

    // Executar cada comando
    for (const command of commands) {
      if (command.trim()) {
        await executeQuery(command);
        console.log(`✅ Comando executado: ${command.substring(0, 50)}...`);
      }
    }

    console.log('🎉 Banco de dados inicializado com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro ao inicializar banco de dados:', error.message);
    return false;
  }
}

module.exports = { initializeDatabase };
