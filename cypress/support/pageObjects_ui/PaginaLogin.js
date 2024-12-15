// PaginaLogin.js - Atualizado com os novos métodos
class PaginaLogin {
  static visitar() {
    cy.visit(Cypress.env('baseURL') + '/login');
  }

  static clicarLinkCadastre() {
    cy.get('[data-testid="cadastrar"]').click(); // Link "Cadastre-se"
  }

  static preencherFormularioCadastro(nome, email, senha) {
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(senha);
  }

  static clicarBotaoEntrar() {
    cy.get('[data-testid="entrar"]').click();
  }

  static validaCampos() {
    cy.get('[data-testid="email"]').should('be.visible');
    cy.get('[data-testid="password"]').should('be.visible');
  }

  static validaImagem() {
    cy.get('img').should('be.visible');
  }

  static validaBotaoEntrar() {
    cy.get('[data-testid="entrar"]').should('be.visible');
  }

  static validaLinkCadastro() {
    cy.get('[data-testid="linkCadastro"]').should('be.visible').and('contain.text', 'Cadastre-se');
  }

  static tentarLogin(email, senha) {
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(senha);
    cy.get('[data-testid="entrar"]').click();
  }

  static validaErroEmail() {
    cy.get('.alert').should('be.visible').and('contain.text', 'Email é obrigatório');
  }

  static validaErroSenha() {
    cy.get('.alert').should('be.visible').and('contain.text', 'Senha é obrigatória');
  }

static validaUrlCadastro() {

 
  cy.url().should('include', '/home'); // Valida o redirecionamento
};

static validaTituloPaginaUser(){


  cy.get('h1').should('contain.text', 'Serverest Store');

}
  
}


export default PaginaLogin;
