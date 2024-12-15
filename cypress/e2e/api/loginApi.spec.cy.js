import LoginAPI from "../../support/pageObjects_api/LoginAPI";
import '../../support/commandsAPI';

describe('Testes de Login', () => {
  it('Realiza login com sucesso', () => {
    LoginAPI.realizarLogin('fulano@qa.com', 'teste').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authorization).to.exist;
      Cypress.env('authToken', response.body.authorization);
    });
  });

  it('Erro ao realizar login com senha incorreta', () => {
    LoginAPI.realizarLogin('fulano@qa.com', 'senhaerrada').then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });

  it('Erro ao realizar login com email inexistente', () => {
    LoginAPI.realizarLogin('naoexiste@qa.com', 'senhaerrada').then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });

  it('Erro ao realizar login sem informar senha', () => {
    LoginAPI.realizarLogin('fulano@qa.com', '').then((response) => {
      expect(response.status).to.eq(400); 
    });
  });

  it('Erro ao realizar login sem informar email', () => {
    LoginAPI.realizarLogin('', 'teste').then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});
