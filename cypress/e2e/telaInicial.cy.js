import TelaInicialPage from '../support/pageObjects/telaInicial'

describe('Validação da página de login', () => {
  beforeEach(() => {
    TelaInicialPage.visitar()
  })

  it('Deve validar todos os campos de login', () => {
    TelaInicialPage.validarCampos()
    TelaInicialPage.validarImagem()
    TelaInicialPage.validarBotaoEntrar()
    TelaInicialPage.validarLinkCadastro()
  })

})
