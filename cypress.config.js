const { defineConfig } = require("cypress");

const cypressOnFix = require ('cypress-on-fix');
const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: '16q8zq',
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  retries: 1,
  e2e: {
    baseUrl:'https://automationpratice.com.br',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress'
    },
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
    on = cypressOnFix(on);
      require('cypress-mochawesome-reporter/plugin')(on);
    await addCucumberPreprocessorPlugin(on, config);

      
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
