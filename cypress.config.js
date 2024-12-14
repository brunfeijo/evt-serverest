const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      baseURL: 'https://front.serverest.dev',
      emailValido: 'your-email@example.com',
      senhaValida: 'your-password',
    },
  },
});