import { faker } from '@faker-js/faker'

class PaginaCadastro {
  static visitarCadastro() {
    cy.visit(Cypress.env('baseURL') + '/cadastrarusuarios')
  }

  static validaImagemCadastro() {
    cy.get('img').should('be.visible')
  }

  static validaTituloCadastro() {
    cy.get('.font-robot').should('be.visible').and('contain.text', 'Cadastro')
  }

  static validaCamposCadastro() {
    cy.get('[data-testid="nome"]').should('be.visible').and('have.attr', 'type', 'text')
    cy.get('[data-testid="email"]').should('be.visible').and('have.attr', 'type', 'email')
    cy.get('[data-testid="password"]').should('be.visible').and('have.attr', 'type', 'password')
  }

  static validaCheckboxAdministradorCadastro() {
    cy.get('.form-check-label').should('be.visible').and('contain.text', 'Cadastrar como administrador?')
  }

  static validaBotaoCadastrarCadastro() {
    cy.get('[data-testid="cadastrar"]').should('be.visible')
  }

  static validaBotaoEntrarCadastro() {
    cy.get('[data-testid="entrar"]').should('be.visible')
  }

  static realizarCadastro(nome, email, password) {
    cy.get('[data-testid="nome"]').type(nome)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').click()
  }

  static validaMensagemSucesso() {
    cy.get('.alert').should('be.visible').and('contain.text', 'Cadastro realizado com sucesso')
  }

  static validaTituloPagina(nome) {
    cy.get('h1').should('be.visible').and('contain.text', `Bem Vindo  ${nome}`)
  }

  static validaBodysComBotoes() {
    cy.get(':nth-child(2) > .card > .card-body').should('be.visible')
    cy.get(':nth-child(3) > .card > .card-body').should('be.visible')
    cy.get(':nth-child(4) > .card > .card-body').should('be.visible')
    cy.get(':nth-child(5) > .card > .card-body').should('be.visible')

    cy.get('[data-testid="cadastrarUsuarios"]').should('be.visible').and('contain.text', 'Cadastrar')
    cy.get('[data-testid="listarUsuarios"]').should('be.visible').and('contain.text', 'Listar')
    cy.get('[data-testid="cadastrarProdutos"]').should('be.visible').and('contain.text', 'Cadastrar')
    cy.get('[data-testid="listarProdutos"]').should('be.visible').and('contain.text', 'Listar')
    cy.get('[data-testid="relatorios"]').should('be.visible').and('contain.text', 'Ver')
  }

  static validacaoUrlAdmin() {
    cy.url().should('include', 'admin/home')
  }

  static cadastroInvalido(nome, email, password) {
/*     cy.get('[data-testid="nome"]').type(nome || "a")
    cy.get('[data-testid="email"]').type(email || "@")
    cy.get('[data-testid="password"]').type(password || "a") */
    cy.get('[data-testid="cadastrar"]').click()
  }

  static validaErroNome() {
    cy.get('.form > :nth-child(3)').should('be.visible').and('contain.text', '×Nome é obrigatório')
  }

  static validaErroEmail() {
    cy.get('.form > :nth-child(4)').should('be.visible').and('contain.text', '×Email é obrigatório')
  }

  static validaErroSenha() {
    cy.get('.form > :nth-child(5)').should('be.visible').and('contain.text', '×Password é obrigatório')
  }
}

export default PaginaCadastro
