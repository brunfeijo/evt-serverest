
## 🛠️ Pré-requisitos

Antes de rodar os testes, você precisa ter o seguinte instalado:

1. **Node.js**: [Baixe a versão LTS](https://nodejs.org/).
2. **Gerenciador de pacotes**: Pode ser o `npm` (vem com o Node.js) ou `yarn`.
3. **Instalar dependências do projeto**:
   Execute o comando abaixo para instalar as dependências do projeto:



   npm install

1. Rodar os Testes de Forma Interativa

Para rodar os testes de forma interativa (com interface gráfica do Cypress):

npx cypress open

2. Rodar os Testes em Modo Headless (sem interface gráfica)

npx cypress run

3.  Rodar Todas as Specs de Teste

npx cypress run

4.Gerar Relatórios com Mochawesome

npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=true,json=true

Este comando irá gerar um relatório Mochawesome em HTML e JSON na pasta cypress/reports.

4.1 Ver o Relatório
Após a execução dos testes, os relatórios serão gerados na pasta cypress/reports. Para visualizar o relatório HTML gerado:

1. Navegue até o diretório onde os relatórios foram gerados:

cd cypress/reports

2. Abra o arquivo mochawesome.html no seu navegador de preferência.

Você pode fazer isso diretamente com o navegador ou abrir a partir da linha de comando, dependendo do seu sistema operacional.

📝 Configuração de Variáveis de Ambiente

Você pode configurar o endpoint da API e outras variáveis necessárias diretamente no arquivo cypress.config.js. Por exemplo:

module.exports = {
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    env: {
      apiUrl: 'https://serverest.dev',  // URL da API de testes
      baseURL: 'https://front.serverest.dev', // URL do front-end (se necessário)
    },
    setupNodeEvents(on, config) {
      // Configuração de plugins e eventos do Cypress
    },
  },
};
