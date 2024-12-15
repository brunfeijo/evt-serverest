Cypress.Commands.add('listarProdutos', () => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/produtos`,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add('cadastrarProduto', (produto) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/produtos`,
    headers: { Authorization: Cypress.env('authToken') },
    body: produto,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(201);
  });
});

Cypress.Commands.add('buscarProdutoPorId', (idProduto) => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/produtos/${idProduto}`,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.be.oneOf([200, 400]); // Sucesso ou erro esperado
  });
});

Cypress.Commands.add('editarProduto', (idProduto, produtoEditado) => {
  return cy.request({
    method: 'PUT',
    url: `${Cypress.env('apiUrl')}/produtos/${idProduto}`,
    headers: { Authorization: Cypress.env('authToken') },
    body: produtoEditado,
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add('excluirProduto', (idProduto) => {
  return cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiUrl')}/produtos/${idProduto}`,
    headers: { Authorization: Cypress.env('authToken') },
    failOnStatusCode: false,
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});
