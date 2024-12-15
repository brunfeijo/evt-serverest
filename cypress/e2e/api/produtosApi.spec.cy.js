import { gerarUsuario } from '../../support/geradorDeDados'; // Caminho atualizado
import '../../support/commandsAPI'; // Registra os comandos personalizados

describe('Testes na API de Usuários', () => {
  let usuario;

  // Gera um usuário dinâmico antes de cada teste
  beforeEach(() => {
    usuario = gerarUsuario(); // Gera um usuário dinâmico
  });

  it('Deve listar todos os usuários cadastrados', () => {
    cy.listarUsuarios().should((response) => {
      expect(response.status).to.eq(200); // Valida o status da resposta
      expect(response.body.quantidade).to.be.gte(0); // Verifica se existem usuários
      expect(response.body.usuarios).to.be.an('array'); // Valida se a lista de usuários é um array
    });
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.criarUsuario(usuario).should((response) => {
      expect(response.status).to.eq(201); // Verifica se a criação do usuário foi bem-sucedida
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      expect(response.body._id).to.exist; // Garante que um ID de usuário seja retornado
    });
  });

  it('Deve buscar um usuário por ID com sucesso', () => {
    cy.criarUsuario(usuario).its('body._id').then((userId) => {
      cy.buscarUsuarioPorId(userId).should((resp) => {
        expect(resp.status).to.eq(200); // Valida a busca do usuário com sucesso
        expect(resp.body.nome).to.eq(usuario.nome); // Valida que o nome do usuário buscado corresponde ao esperado
        expect(resp.body.email).to.eq(usuario.email); // Valida que o email do usuário buscado corresponde ao esperado
      });
    });
  });

  it('Deve editar um usuário existente', () => {
    cy.criarUsuario(usuario).its('body._id').then((userId) => {
      const usuarioEditado = { ...usuario, nome: 'QA Teste Editado' };

      cy.editarUsuario(userId, usuarioEditado).should((resp) => {
        expect(resp.status).to.eq(200); // Valida sucesso na edição
        expect(resp.body.message).to.eq('Registro alterado com sucesso');
      });

      cy.buscarUsuarioPorId(userId).should((fetchResp) => {
        expect(fetchResp.body.nome).to.eq(usuarioEditado.nome); // Verifica se o nome foi atualizado
      });
    });
  });

  it('Deve excluir um usuário com sucesso', () => {
    cy.criarUsuario(usuario).its('body._id').then((userId) => {
      cy.excluirUsuario(userId).should((resp) => {
        expect(resp.status).to.eq(200); // Valida exclusão bem-sucedida
        expect(resp.body.message).to.include('Registro excluído com sucesso');
      });
    });
  });
});
