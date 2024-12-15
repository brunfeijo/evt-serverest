const { defineConfig } = require('cypress');

module.exports = defineConfig({

  e2e: {
    env: {
      apiUrl: 'https://serverest.dev', // Correct API base URL
      baseURL: 'https://front.serverest.dev', // Front-end URL (if required)
    },
    setupNodeEvents(on, config) {
      // Plugins setup
    },
  },
});
