import { faker } from '@faker-js/faker';

// Gera dados aleatórios de usuário
export function gerarDadosUsuario() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    nome: faker.name.fullName()
  };
}

// Gera dados aleatórios de produto
export function gerarDadosProduto() {
  return Cypress.Promise.resolve({
    nome: faker.commerce.productName(),
    preco: faker.number.int({ min: 1, max: 10 }).toString(),
    descricao: faker.commerce.productDescription(),
    quantidade: "10",
    imagem: 'cute.jpg' // Caminho do arquivo na pasta fixtures
  });
}
