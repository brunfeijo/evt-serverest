import PaginaCadastro from '../support/pageObjects/PaginaCadastro'
import { faker } from '@faker-js/faker'

describe('Validação da página de cadastro', () => {
  let email
  let password
  let nome

  before(() => {
    // Gera email, senha e nome aleatórios usando faker
    email = faker.internet.email()
    password = faker.internet.password()
    nome = faker.name.fullName()
  })

  beforeEach(() => {
    PaginaCadastro.visitarCadastro()
  })

  it('Deve validar todos os campos de cadastro', () => {
    PaginaCadastro.validaImagemCadastro()
    PaginaCadastro.validaTituloCadastro()
    PaginaCadastro.validaCamposCadastro()
    PaginaCadastro.validaCheckboxAdministradorCadastro()
    PaginaCadastro.validaBotaoCadastrarCadastro()
    PaginaCadastro.validaBotaoEntrarCadastro()
  })

  it('Deve realizar cadastro e validar elementos após cadastro', () => {
    PaginaCadastro.realizarCadastro(nome, email, password)
    PaginaCadastro.validaMensagemSucesso()
    PaginaCadastro.validaTituloPagina(nome)
    PaginaCadastro.validaBodysComBotoes()
    PaginaCadastro.validacaoUrlAdmin()
  })



  it.only('Deve exibir erros ao tentar cadastro com dados inválidos', () => {
    PaginaCadastro.cadastroInvalido();
    PaginaCadastro.validaErroNome()
    PaginaCadastro.validaErroEmail()
    PaginaCadastro.validaErroSenha()
  })
})
