class TelaInicial {
    static visitar() {
      cy.visit(Cypress.env('baseURL') + '/login')
    }
  
    static validarCampos() {
      cy.get('[data-testid="email"]').should('be.visible').and('have.attr', 'type', 'email')
      cy.get('[data-testid="senha"]').should('be.visible').and('have.attr', 'type', 'password')
      cy.get('[data-testid="entrar"]').should('be.visible').and('have.attr', 'type', 'submit')
    }
  
    static validarImagem() {
      cy.get('img').should('be.visible') // Ajuste o seletor conforme necessário para a imagem específica
    }
  
    static validarBotaoEntrar() {
      cy.get('[data-testid="entrar"]').should('be.visible')
    }
  
    static validarLinkCadastro() {
      cy.get('[data-testid="cadastrar"]').should('be.visible').and('contain.text', 'Cadastre-se')
    }
  
    static login(email, password) {
      cy.get('[data-testid="email"]').type(email)
      cy.get('[data-testid="senha"]').type(password)
      cy.get('[data-testid="entrar"]').click()
    }
  }
  
  export default TelaInicial
  