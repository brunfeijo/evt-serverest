import PaginaCadastro from '../support/pageObjects/PaginaCadastro';
import CadastroProduto from '../support/pageObjects/CadastroProduto';
import { gerarDadosUsuario, gerarDadosProduto } from '../support/utils';

describe('Validação da página de cadastro', () => {
  let dadosUsuario; // Variável para armazenar dados do usuário
  let dadosProduto; // Variável para armazenar dados do produto

  before(function () {
    // Inicializa dados do produto
    gerarDadosProduto().then((produtoGerado) => {
      dadosProduto = produtoGerado; // Armazena os dados do produto
    });

    // Gera dados do usuário
    dadosUsuario = gerarDadosUsuario(); // Armazena os dados do usuário
  });

  beforeEach(function () {
    PaginaCadastro.visitarCadastro();
  });

  it('Loga como admin, cadastra um produto, tenta cadastrar novamente e verifica mensagens de erro', function () {
    const { nome, email, password } = dadosUsuario; // Acessa os dados do usuário
    const produto = dadosProduto; // Acessa os dados do produto

    // Login como admin
    PaginaCadastro.realizarCadastro(nome, email, password);
    PaginaCadastro.validaMensagemSucesso();
    PaginaCadastro.validaTituloPagina(nome);
    PaginaCadastro.validaMenuAcimaAdmin();

    // Realiza o primeiro cadastro do produto
    CadastroProduto.visitarCadastroProduto();
    CadastroProduto.validaCamposCadastro();
    CadastroProduto.realizarCadastroProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, produto.imagem);

    // Tenta realizar o cadastro do mesmo produto novamente
    CadastroProduto.visitarCadastroProduto();
    CadastroProduto.realizarCadastroProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, produto.imagem);

    // Verifica mensagens de erro
    cy.get('.alert').should('be.visible').and('contain.text', 'Já existe produto com esse nome');
  });

  it.only('Loga como admin, cria um produto, verifica se o mesmo existe na tabela e exclui o produto', function () {
    const { nome, email, password } = dadosUsuario; // Acessa os dados do usuário
    const produto = dadosProduto; // Acessa os dados do produto

    PaginaCadastro.realizarCadastro(nome, email, password);
    PaginaCadastro.validaMensagemSucesso();
    PaginaCadastro.validaTituloPagina(nome);
    PaginaCadastro.validaMenuAcimaAdmin();

    // Realiza o cadastro do produto
    CadastroProduto.visitarCadastroProduto();
    CadastroProduto.validaCamposCadastro();
    CadastroProduto.realizarCadastroProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, produto.imagem);

    // Verifica e exclui o produto na lista de produtos
    CadastroProduto.excluirProduto(produto.nome);
  });
});
