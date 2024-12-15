import Login_API from "../../support/pageObjects_api/Login_API";
import '../../support/commandsAPI';

describe('Testes de Login', () => {
  it('Realiza login com sucesso', () => {
    Login_API.realizarLogin('fulano@qa.com', 'teste').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authorization).to.exist;
      Cypress.env('authToken', response.body.authorization);
    });
  });

  it('Erro ao realizar login com senha incorreta', () => {
    Login_API.realizarLogin('fulano@qa.com', 'senhaerrada').then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });

  it('Erro ao realizar login com email inexistente', () => {
    Login_API.realizarLogin('naoexiste@qa.com', 'senhaerrada').then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });

  it('Erro ao realizar login sem informar senha', () => {
    Login_API.realizarLogin('fulano@qa.com', '').then((response) => {
      expect(response.status).to.eq(400); 
    });
  });

  it('Erro ao realizar login sem informar email', () => {
    Login_API.realizarLogin('', 'teste').then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});
