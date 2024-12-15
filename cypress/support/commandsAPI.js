// Login Command
Cypress.Commands.add('realizarLogin', (email, senha) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/login`,
    body: { email, password: senha },
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
    Cypress.env('authToken', response.body.authorization);
  });
});

// Create User Command
Cypress.Commands.add('criarUsuario', (usuario) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/usuarios`,
    body: usuario,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(201);
  });
});

// Create Cart Command
Cypress.Commands.add('criarCarrinho', (carrinho) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/carrinhos`,
    headers: {
      Authorization: Cypress.env('authToken'),
    },
    body: carrinho,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(201);
  });
});

// List Users Command
Cypress.Commands.add('listarUsuarios', () => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/usuarios`,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});

// Get User by ID Command
Cypress.Commands.add('buscarUsuarioPorId', (idUsuario) => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/usuarios/${idUsuario}`,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});

// Edit User Command
Cypress.Commands.add('editarUsuario', (idUsuario, usuarioEditado) => {
  return cy.request({
    method: 'PUT',
    url: `${Cypress.env('apiUrl')}/usuarios/${idUsuario}`,
    body: usuarioEditado,
    failOnStatusCode: false,
  }).should((response) => {
    expect([200, 201]).to.include(response.status);
  });
});

// Delete User Command
Cypress.Commands.add('excluirUsuario', (idUsuario) => {
  return cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiUrl')}/usuarios/${idUsuario}`,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});

// List Carts Command
Cypress.Commands.add('listarCarrinhos', () => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/carrinhos`,
    headers: {
      Authorization: Cypress.env('authToken'),
    },
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});

// Delete Cart Command
Cypress.Commands.add('excluirCarrinho', (idCarrinho) => {
  return cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiUrl')}/carrinhos/${idCarrinho}`,
    headers: {
      Authorization: Cypress.env('authToken'),
    },
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});
