import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("/cypress/fixtures/test-pages/login.html");
});

When("eu preencho o campo {string} com {string}", (campo, valor) => {
  if (campo === "email") {
    cy.get('input[type="email"]').type(valor);
  } else if (campo === "senha") {
    cy.get('input[type="password"]').type(valor);
  } else {
    cy.get(`input[name="${campo}"]`).type(valor);
  }
});

When("eu clico no botão {string}", (botao) => {
  cy.contains("button", botao).click();
});

Then("eu devo ser redirecionado para a página inicial", () => {
  cy.url().should("include", "index.html");
  cy.visit("/cypress/fixtures/test-pages/index.html");
});

Then("eu devo ver a mensagem {string}", (mensagem) => {
  cy.contains(mensagem).should("be.visible");
});

Then("eu não devo ver a mensagem de erro", () => {
  cy.get(".error-message").should("not.exist");
});
