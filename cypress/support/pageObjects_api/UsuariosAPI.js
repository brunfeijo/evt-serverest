class UsuariosAPI {
  // Função para acessar a lista de usuários
  visitarUsuarios() {
    return cy.request({
      method: 'GET',
      url: '/usuarios',
    });
  }

  // Função para criar um novo usuário
  cadastrarUsuario(usuario) {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body: usuario,
      failOnStatusCode: false,
    });
  }

  // Função para buscar um usuário por ID
  buscarUsuarioPorId(id) {
    return cy.request({
      method: 'GET',
      url: `/usuarios/${id}`,
      failOnStatusCode: false,
    });
  }

  // Função para editar um usuário existente
  editarUsuario(id, usuario) {
    return cy.request({
      method: 'PUT',
      url: `/usuarios/${id}`,
      body: usuario,
      failOnStatusCode: false,
    });
  }

  // Função para excluir um usuário
  excluirUsuario(id) {
    return cy.request({
      method: 'DELETE',
      url: `/usuarios/${id}`,
      failOnStatusCode: false,
    });
  }
}

export default new UsuariosAPI();
