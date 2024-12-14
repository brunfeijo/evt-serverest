import { faker } from '@faker-js/faker'

class PaginaLogin {
  static visitar() {
    cy.visit(Cypress.env('baseURL') + '/login')
  }

  static validaCampos() {
    cy.get('[data-testid="email"]').should('be.visible').and('have.attr', 'type', 'email')
    cy.get('[data-testid="senha"]').should('be.visible').and('have.attr', 'type', 'password')
    cy.get('[data-testid="entrar"]').should('be.visible').and('have.attr', 'type', 'submit')
  }

  static validaImagem() {
    cy.get('img').should('be.visible')
  }

  static validaBotaoEntrar() {
    cy.get('[data-testid="entrar"]').should('be.visible')
  }

  static validaLinkCadastro() {
    cy.get('[data-testid="cadastrar"]').should('be.visible').and('contain.text', 'Cadastre-se')
  }

  static login(email, password) {
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password)
    cy.get('[data-testid="entrar"]').click()
  }

  static tentarLogin(email, password) {
/*     cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password) */
    cy.get('[data-testid="entrar"]').click()
  }

  static validaErroEmail() {
    cy.get('.form > :nth-child(3)').should('be.visible').and('contain.text', '×Email é obrigatório')
  }

  static validaErroSenha() {
    cy.get('.form > :nth-child(4)').should('be.visible').and('contain.text', '×Password é obrigatório')
  }
}

export default PaginaLogin
