class ProdutosAPI {
    listarProdutos() {
      return cy.request({
        method: 'GET',
        url: `${Cypress.env('apiUrl')}/produtos`, // Usa a variável de ambiente para a URL base
        failOnStatusCode: false, // Para tratar erros manualmente nos testes
      });
    }
  
    cadastrarProduto(produto) {
      return cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/produtos`,
        headers: {
          Authorization: Cypress.env('authToken'), // Token para endpoints protegidos
        },
        body: produto,
        failOnStatusCode: false,
      });
    }
  
    buscarProdutoPorId(id) {
      return cy.request({
        method: 'GET',
        url: `${Cypress.env('apiUrl')}/produtos/${id}`,
        failOnStatusCode: false,
      });
    }
  
    editarProduto(id, produto) {
      return cy.request({
        method: 'PUT',
        url: `${Cypress.env('apiUrl')}/produtos/${id}`,
        headers: {
          Authorization: Cypress.env('authToken'),
        },
        body: produto,
        failOnStatusCode: false,
      });
    }
  
    excluirProduto(id) {
      return cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiUrl')}/produtos/${id}`,
        headers: {
          Authorization: Cypress.env('authToken'),
        },
        failOnStatusCode: false,
      });
    }
  }
  
  export default new ProdutosAPI();
  