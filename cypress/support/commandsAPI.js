// Comando para listar usuários
Cypress.Commands.add('listarUsuarios', () => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/usuarios`,
    failOnStatusCode: false, // Evita que o Cypress falhe automaticamente
  }).should((response) => {
    expect(response.status).to.eq(200); // Valida o status da resposta
    return response.body; // Retorna o corpo da resposta para o teste
  });
});

// Comando para criar usuário
Cypress.Commands.add('criarUsuario', (usuario) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/usuarios`,
    body: usuario,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(201); // Valida que o usuário foi criado
    expect(response.body._id).to.exist; // Garante que o ID do usuário foi gerado
  });
});

// Comando para buscar usuário por ID
Cypress.Commands.add('buscarUsuarioPorId', (idUsuario) => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/usuarios/${idUsuario}`,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
    return response.body;
  });
});

// Comando para editar usuário
Cypress.Commands.add('editarUsuario', (idUsuario, usuarioEditado) => {
  return cy.request({
    method: 'PUT',
    url: `${Cypress.env('apiUrl')}/usuarios/${idUsuario}`,
    body: usuarioEditado,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
    return response.body;
  });
});

// Comando para excluir usuário
Cypress.Commands.add('excluirUsuario', (idUsuario) => {
  return cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiUrl')}/usuarios/${idUsuario}`,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
    return response.body;
  });
});
