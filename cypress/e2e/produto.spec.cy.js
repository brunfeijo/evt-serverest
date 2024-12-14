import PaginaCadastro from '../support/pageObjects/PaginaCadastro'
import CadastroProduto from '../support/pageObjects/CadastroProduto'
import { faker } from '@faker-js/faker'

describe('Validação da página de cadastro', () => {
  let produto

  before(function() {
    // Inicializa dados do produto utilizando o comando customizado
    cy.geraDadosProduto().then(data => {
      produto = data
    })

    // Gera email, senha e nome aleatórios usando faker e armazena no contexto
    function gerarDadosUsuario() {
      return {
        email: faker.internet.email(),
        password: faker.internet.password(),
        nome: faker.name.fullName()
      }
    }
    this.dadosUsuario = gerarDadosUsuario()
  })

  beforeEach(function() {
    PaginaCadastro.visitarCadastro()
  })

  it.only('Loga como admin, cria um produto e verifica se o mesmo existe na tabela', function() {
    const { nome, email, password } = this.dadosUsuario

    PaginaCadastro.realizarCadastro(nome, email, password)
    PaginaCadastro.validaMensagemSucesso()
    PaginaCadastro.validaTituloPagina(nome)
    PaginaCadastro.validaMenuAcimaAdmin()

    // Visita a página de cadastro de produto e realiza o cadastro
    CadastroProduto.visitarCadastroProduto()
    CadastroProduto.clicarBotaoCadastrar()
    CadastroProduto.validaCamposCadastro()
    CadastroProduto.realizarCadastroProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, produto.imagem)
    CadastroProduto.validarCadastroSucesso()

    // Visita a página onde está a tabela de produtos
    cy.visit(Cypress.env('baseURL') + '/admin/administrarprodutos')

    // Busca o produto na tabela e valida a existência
    cy.get('table').within(() => {
      cy.contains('td', produto.nome).should('exist')
      cy.contains('td', produto.preco).should('exist')
      cy.contains('td', produto.descricao).should('exist')
      cy.contains('td', produto.quantidade).should('exist')
    })
  })
})
