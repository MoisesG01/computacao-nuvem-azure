// Exemplo de como usar a API
// Execute este arquivo após iniciar o servidor para testar as funcionalidades

const baseURL = 'http://localhost:3000/api';

async function testAPI() {
  console.log('🧪 Testando API CRUD...\n');

  try {
    // Teste 1: Health Check
    console.log('1. Testando Health Check...');
    const healthResponse = await fetch(`${baseURL}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health Check:', healthData.message);

    // Teste 2: Listar usuários (deve estar vazio inicialmente)
    console.log('\n2. Listando usuários...');
    const listResponse = await fetch(`${baseURL}/users`);
    const usersData = await listResponse.json();
    console.log('📋 Usuários encontrados:', usersData.total);

    // Teste 3: Criar usuário
    console.log('\n3. Criando usuário...');
    const createResponse = await fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'João Silva',
        email: 'joao@email.com',
        age: 25
      })
    });
    const createData = await createResponse.json();
    console.log('✅ Usuário criado:', createData.data);

    const userId = createData.data.id;

    // Teste 4: Buscar usuário por ID
    console.log('\n4. Buscando usuário por ID...');
    const getResponse = await fetch(`${baseURL}/users/${userId}`);
    const getData = await getResponse.json();
    console.log('🔍 Usuário encontrado:', getData.data);

    // Teste 5: Atualizar usuário
    console.log('\n5. Atualizando usuário...');
    const updateResponse = await fetch(`${baseURL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'João Silva Santos',
        email: 'joao.silva@email.com',
        age: 26
      })
    });
    const updateData = await updateResponse.json();
    console.log('✅ Usuário atualizado:', updateData.data);

    // Teste 6: Listar usuários novamente
    console.log('\n6. Listando usuários após criação...');
    const listResponse2 = await fetch(`${baseURL}/users`);
    const usersData2 = await listResponse2.json();
    console.log('📋 Total de usuários:', usersData2.total);

    // Teste 7: Estatísticas
    console.log('\n7. Obtendo estatísticas...');
    const statsResponse = await fetch(`${baseURL}/users/stats`);
    const statsData = await statsResponse.json();
    console.log('📊 Estatísticas:', statsData.data);

    // Teste 8: Deletar usuário
    console.log('\n8. Deletando usuário...');
    const deleteResponse = await fetch(`${baseURL}/users/${userId}`, {
      method: 'DELETE'
    });
    const deleteData = await deleteResponse.json();
    console.log('✅ Usuário deletado:', deleteData.message);

    console.log('\n🎉 Todos os testes foram executados com sucesso!');

  } catch (error) {
    console.error('❌ Erro durante os testes:', error.message);
  }
}

// Executar testes se o arquivo for chamado diretamente
if (require.main === module) {
  testAPI();
}

module.exports = { testAPI };
