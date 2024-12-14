import TelaInicialPage from '../support/pageObjects/telaInicial'


describe('Validação de campos e botões da Tela Inicial', () => {
  beforeEach(() => {
    TelaInicialPage.visitar()
  })

  // Teste para validar todos os campos de login
  it('Deve validar todos os campos de login', () => {
    // Valida a presença e atributos dos campos de email e senha
    TelaInicialPage.validarCampos()
    // Valida se a imagem está visível
    TelaInicialPage.validarImagem()
    // Valida se o botão "entrar" está visível
    TelaInicialPage.validarBotaoEntrar()
    // Valida se o link "Cadastre-se" está visível
    TelaInicialPage.validarLinkCadastro()
  })
})
