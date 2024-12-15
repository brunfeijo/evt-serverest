Cypress.Commands.add('realizarLogin', (email, senha) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: { email, password: senha },
  }).then((response) => {
    expect(response.status).to.eq(200);
    Cypress.env('authToken', response.body.authorization);
  });
});

Cypress.Commands.add('criarUsuario', (usuario) => {
  cy.request({
    method: 'POST',
    url: '/usuarios',
    body: usuario,
  });
});

Cypress.Commands.add('criarCarrinho', (carrinho) => {
  cy.request({
    method: 'POST',
    url: '/carrinhos',
    headers: {
      Authorization: Cypress.env('authToken'),
    },
    body: carrinho,
  });
});
