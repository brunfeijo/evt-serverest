import PaginaLogin from '../../support/pageObjects_ui/PaginaLogin';
import { faker } from '@faker-js/faker';
import '../../support/commandsUI';


describe('Validação da página de login', () => {
  let email;
  let password;

  before(() => {
    // Gera email e senha aleatórios usando faker
    email = faker.internet.email();
    password = faker.internet.password();
  });

  beforeEach(() => {
    PaginaLogin.visitar();
  });

  it('Deve validar todos os campos de login', () => {
    PaginaLogin.validaCampos();
    PaginaLogin.validaImagem();
    PaginaLogin.validaBotaoEntrar();
    PaginaLogin.validaLinkCadastro();
  });

  it('Deve efetuar login com credenciais válidas', () => {
    PaginaLogin.tentarLogin(email, password);
    // Validação específica do sucesso pode ser adicionada aqui
  });

  it('Deve exibir erros ao tentar login com credenciais inválidas', () => {
    PaginaLogin.tentarLogin("", "");
    PaginaLogin.validaErroEmail();
    PaginaLogin.validaErroSenha();
  });

  it.only('Usuário clica em "Cadastre-se" e realiza cadastro', () => {
    const nome = faker.name.fullName();
    const emailCadastro = faker.internet.email();
    const senhaCadastro = faker.internet.password(8);

    // 1. Clicar no link "Cadastre-se"
    PaginaLogin.clicarLinkCadastre();

    // 2. Preencher o formulário de cadastro
    PaginaLogin.preencherFormularioCadastro(nome, emailCadastro, senhaCadastro);
    PaginaLogin.clicarLinkCadastre();

    // 3. Clicar no botão "Entrar"
    PaginaLogin.clicarBotaoEntrar();
    PaginaLogin.validaUrlCadastro();
    PaginaLogin.validaTituloPaginaUser();
  });
  
});