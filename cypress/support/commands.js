import 'cypress-file-upload'
import { faker } from '@faker-js/faker'

Cypress.Commands.add('geraDadosProduto', () => {
  return {
    nome: faker.commerce.productName(),  // Gera um nome de produto aleatório
    preco: faker.number.int({ min: 1, max: 10 }).toString(), // Gera um número entre 1 e 10 e converte para string
    descricao: faker.commerce.productDescription(),  // Gera uma descrição de produto aleatória
    quantidade: "10",
    imagem: 'cute.jpg'  // Caminho relativo dentro da pasta fixtures
  }
})
