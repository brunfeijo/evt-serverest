import PaginaCadastro from '../support/pageObjects/PaginaCadastro'
import CadastroProduto from '../support/pageObjects/CadastroProduto'
import { gerarDadosUsuario, gerarDadosProduto } from '../support/utils'

describe('Validação da página de cadastro', () => {
  let produto

  before(function() {
    // Inicializa dados do produto utilizando funções de utilidades
    gerarDadosProduto().then(data => {
      produto = data
      this.dadosProduto = data  // Armazena os dados do produto no contexto do teste
    })

    // Gera dados do usuário
    this.dadosUsuario = gerarDadosUsuario()
  })

  beforeEach(function() {
    PaginaCadastro.visitarCadastro()
  })

  it.only('Loga como admin, cria um produto, verifica se o mesmo existe na tabela e exclui o produto', function() {
    const { nome, email, password } = this.dadosUsuario
    const produto = this.dadosProduto

    PaginaCadastro.realizarCadastro(nome, email, password)
    PaginaCadastro.validaMensagemSucesso()
    PaginaCadastro.validaTituloPagina(nome)
    PaginaCadastro.validaMenuAcimaAdmin()

    // Realiza o cadastro do produto
    CadastroProduto.visitarCadastroProduto()
    CadastroProduto.validaCamposCadastro()
    CadastroProduto.realizarCadastroProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, produto.imagem)

    // Verifica e exclui o produto na lista de produtos
    /* CadastroProduto.visitarListarProdutos() */
    CadastroProduto.excluirProduto(produto.nome)
  })
})
