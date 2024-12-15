const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const gerarSenhaAleatoria = (length = 6) => {
    return Math.random().toString(36).slice(-length);
  };
  
  const gerarNomeDinamico = () => {
    const randomNumbers = gerarNumeroAleatorio(100, 999);
    return `QA Teste ${randomNumbers}`;
  };
  
  export const gerarUsuario = () => {
    return {
      nome: gerarNomeDinamico(),
      email: `beltrano${Date.now()}${gerarNumeroAleatorio(100, 999)}@qa.com.br`, // Garantia de unicidade
      password: gerarSenhaAleatoria(),
      administrador: 'true', // Garantido como string
    };
  };
  