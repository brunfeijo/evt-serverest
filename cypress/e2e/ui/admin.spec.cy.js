import PaginaCadastro from '../../support/pageObjects_ui/PaginaCadastro'
import { faker } from '@faker-js/faker'

describe('Validação de cadastro como admin', () => {
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

  it('Valida todos os campos da tela de cadastro', () => {
    PaginaCadastro.validaImagemCadastro()
    PaginaCadastro.validaTituloCadastro()
    PaginaCadastro.validaCamposCadastro()
    PaginaCadastro.validaCheckboxAdministradorCadastro()
    PaginaCadastro.validaBotaoCadastrarCadastro()
    PaginaCadastro.validaBotaoEntrarCadastro()
  })

  it('Valida elementos após cadastro e reloga como admin', () => {
    PaginaCadastro.realizarCadastro(nome, email, password)
    PaginaCadastro.validaMensagemSucesso()
    PaginaCadastro.validaTituloPagina(nome)
    PaginaCadastro.validaMenuAcimaAdmin();
    PaginaCadastro.validaoOpcoesMenuAdmin()
    PaginaCadastro.validacaoUrlAdmin()
    PaginaCadastro.validaMenuAcimaAdmin()
  })


  it('Validação de erros ao tentar cadastro com dados inválidos', () => {
    PaginaCadastro.cadastroInvalido();
    PaginaCadastro.validaErroNome()
    PaginaCadastro.validaErroEmail()
    PaginaCadastro.validaErroSenha()
  })
})
