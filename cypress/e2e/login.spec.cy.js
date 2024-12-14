import PaginaLogin from '../support/pageObjects/PaginaLogin'
import { faker } from '@faker-js/faker'

describe('Validação da página de login', () => {
  let email
  let password

  before(() => {
    // Gera email e senha aleatórios usando faker
    email = faker.internet.email()
    password = faker.internet.password()
  })

  beforeEach(() => {
    PaginaLogin.visitar()
  })

  it('Deve validar todos os campos de login', () => {
    PaginaLogin.validaCampos()
    PaginaLogin.validaImagem()
    PaginaLogin.validaBotaoEntrar()
    PaginaLogin.validaLinkCadastro()
  })

  it('Deve efetuar login com credenciais válidas', () => {
    PaginaLogin.login(email, password)

  })

  it('Deve exibir erros ao tentar login com credenciais inválidas', () => {
    PaginaLogin.tentarLogin("", "")
    PaginaLogin.validaErroEmail()
    PaginaLogin.validaErroSenha()
  })
})
