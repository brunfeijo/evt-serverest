const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev', // URL do front-end
    env: {
      apiUrl: 'https://serverest.dev', // URL da API
    },
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar eventos personalizados se necessário
    },
  },
});
