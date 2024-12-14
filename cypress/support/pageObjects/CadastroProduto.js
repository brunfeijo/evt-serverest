class CadastroProduto {
  static visitarCadastroProduto() {
    cy.visit(Cypress.env('baseURL') + '/cadastrarprodutos')
  }

  static clicarBotaoCadastrar() {
    cy.get('[data-testid="botaoCadastrar"]').click()
  }

  static validaCamposCadastro() {
    cy.get('[data-testid="nome"]').should('be.visible').and('have.attr', 'type', 'text')
    cy.get('[data-testid="preco"]').should('be.visible').and('have.attr', 'type', 'number')
    cy.get('[data-testid="descricao"]').should('be.visible').and('have.attr', 'type', 'text')
    cy.get('[data-testid="quantidade"]').should('be.visible').and('have.attr', 'type', 'number')
    cy.get('[data-testid="imagem"]').should('be.visible').and('have.attr', 'type', 'file')
    cy.get('[data-testid="cadastrar"]').should('be.visible')
  }

  static realizarCadastroProduto(nome, preco, descricao, quantidade, imagem) {
    cy.get('[data-testid="nome"]').type(nome)
    cy.get('[data-testid="preco"]').type(preco)
    cy.get('[data-testid="descricao"]').type(descricao)
    cy.get('[data-testid="quantidade"]').type(quantidade)
    cy.get('[data-testid="imagem"]').attachFile(imagem)  // Comando para fazer upload da imagem
    cy.get('[data-testid="cadastrar"]').click()

    // Armazenar dados inseridos
    cy.wrap({ nome, preco, descricao, quantidade }).as('produtoCadastrado')
  }

}

export default CadastroProduto
