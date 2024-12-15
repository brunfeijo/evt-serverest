export default class Login_API {
  static realizarLogin(email, senha) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/login`, // Usando apiUrl configurado
      body: { email, password: senha },
      failOnStatusCode: false, // Evita falha automática para capturar erros
    });
  }
}
