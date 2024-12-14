import { faker } from '@faker-js/faker'

export function gerarDadosUsuario() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    nome: faker.name.fullName()
  }
}

export function gerarDadosProduto() {
  return cy.geraDadosProduto().then(data => data)
}
