const { gerarProduto } = require('../../support/geradorDeDados'); // Importa o gerador de dados
import '../../support/commandsAPI'; // Registra os comandos personalizados

describe('Testes na API de Produtos', () => {
  let produto;

  // Gera um produto dinâmico antes de cada teste
  beforeEach(() => {
    produto = gerarProduto();
  });

  it('Deve listar todos os produtos cadastrados', () => {
    cy.listarProdutos().should((response) => {
      expect(response.status).to.eq(200); // Valida o status da resposta
      expect(response.body.produtos).to.be.an('array'); // Verifica que "produtos" é um array
      expect(response.body.quantidade).to.be.gte(0); // Garante que a quantidade seja >= 0
    });
  });

})