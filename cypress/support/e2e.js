// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// O servidor HTTP é iniciado automaticamente no cypress.config.js
// Este hook é apenas um fallback caso seja necessário
before(() => {
  // Verificar se o servidor está rodando, se não, iniciar
  cy.task("startServer");
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
