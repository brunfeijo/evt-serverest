class CadastroProduto {
  static visitarCadastroProduto() {
    cy.visit(Cypress.env('baseURL') + '/admin/cadastrarprodutos')
  }

  static clicarBotaoCadastrar() {
    cy.get('[data-testid="botaoCadastrar"]').click()
  }

  static validaCamposCadastro() {
    cy.get('[data-testid="nome"]').should('be.visible').and('have.attr', 'type', 'text')
    cy.get('[data-testid="preco"]').should('be.visible').and('have.attr', 'type', 'number')
    cy.get('[data-testid="descricao"]').should('be.visible')
    cy.get('[data-testid="quantity"]').should('be.visible').and('have.attr', 'type', 'number')
    cy.get('[data-testid="imagem"]').should('be.visible').and('have.attr', 'type', 'file')
    cy.get('[data-testid="cadastarProdutos"]').should('be.visible')
  }

  static realizarCadastroProduto(nome, preco, descricao, quantidade, imagem) {
    cy.get('[data-testid="nome"]').type(nome)
    cy.get('[data-testid="preco"]').type(preco)
    cy.get('[data-testid="descricao"]').type(descricao)
    cy.get('[data-testid="quantity"]').type(quantidade)
    cy.get('[data-testid="imagem"]').attachFile(imagem)  // Comando para fazer upload da imagem
    cy.get('[data-testid="cadastarProdutos"]').click()

    // Armazenar dados inseridos
    cy.wrap({ nome, preco, descricao, quantidade }).as('produtoCadastrado')
  }

  static visitarListarProdutos() {
    cy.visit(Cypress.env('baseURL') + '/admin/listarprodutos')
  }

  static excluirProduto(nomeProduto) {
    cy.get('table').contains('td', nomeProduto).should('exist')
      .parent('tr') // Encontra a linha onde o produto foi encontrado
      .within(() => {
        cy.get('.btn-danger').click() // Clique no botão "excluir" nesta linha
      })
    cy.get('table').contains('td', nomeProduto).should('not.exist') // Valida que a linha do produto foi excluída
  }

  static verificarMensagemErro(mensagem) {
    cy.get('.alert').should('be.visible').and('contain.text', mensagem)
  }

  static pesquisarProduto(nomeProduto) {
    cy.get('[data-testid="search"]').type(nomeProduto)
    cy.get('[data-testid="search-button"]').click()
  }

  static validarProdutoNaTabela(produto) {
    cy.get('table').contains('td', produto.nome).should('exist').click()
    cy.get('[data-testid="product-name"]').should('contain.text', produto.nome)
    cy.get('[data-testid="product-preco"]').should('contain.text', produto.preco)
    cy.get('[data-testid="product-descricao"]').should('contain.text', produto.descricao)
    cy.get('[data-testid="product-quantidade"]').should('contain.text', produto.quantidade)
  }
}

export default CadastroProduto
