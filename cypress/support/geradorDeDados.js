// Função para gerar um número aleatório dentro de um intervalo
const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Função para gerar uma senha aleatória
const gerarSenhaAleatoria = (length = 6) => {
  return Math.random().toString(36).slice(-length);
};

// Função para gerar um nome dinâmico e único
const gerarNomeDinamico = () => {
  const randomNumbers = gerarNumeroAleatorio(100, 999);
  return `QA Teste ${randomNumbers}`;
};

// Função para gerar um usuário dinâmico
export const gerarUsuario = () => {
  return {
    nome: gerarNomeDinamico(),
    email: `beltrano${Date.now()}${gerarNumeroAleatorio(100, 999)}@qa.com.br`, // Garantia de unicidade
    password: gerarSenhaAleatoria(),
    administrador: Math.random() > 0.5 ? 'true' : 'false', // Aleatório entre 'true' ou 'false'
  };
};

// Função para gerar um produto dinâmico
export const gerarProduto = () => {
  return {
    nome: `Produto ${Math.random().toString(36).substring(7)}`, // Nome único
    preco: gerarNumeroAleatorio(1, 1000), // Preço entre 1 e 1000
    descricao: 'Descrição do produto gerado automaticamente',
    quantidade: gerarNumeroAleatorio(1, 100), // Quantidade entre 1 e 100
  };
};
