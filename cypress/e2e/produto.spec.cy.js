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

  it.only('Loga como admin e cria um produto', () => {
    PaginaCadastro.realizarCadastro(nome, email, password)
    PaginaCadastro.validaMensagemSucesso()
    PaginaCadastro.validaTituloPagina(nome)
    PaginaCadastro.validaoOpcoesMenuAdmin()
  })
    
  })



