const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({

  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    "cypress-esbuild-preprocessor": {
      "nonGlobalStepDefinitions": true
    },

    specPattern: 'cypress/e2e/features/**/*.feature',
    chromeWebSecurity: false,
    defaultCommandTimeout: 200000,
    baseUrl: 'https://demo-store-staging.appcharge.com/login'
  },
});