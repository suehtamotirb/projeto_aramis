import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("/cypress/fixtures/test-pages/login.html");
});

When("eu preencho o campo {string} com {string}", (campo, valor) => {
  if (campo === "email") {
    // Foca no campo de email e pausa para permitir preenchimento manual
    cy.get('input[type="email"]').should("be.visible").focus();
    // Pausa o teste - o usuário deve digitar o email manualmente
    // Clique em "Resume" no Cypress quando terminar de digitar
    cy.pause();
  } else if (campo === "senha") {
    // Foca no campo de senha e pausa para permitir preenchimento manual
    cy.get('input[type="password"]').should("be.visible").focus();
    // Pausa o teste - o usuário deve digitar a senha manualmente
    // Clique em "Resume" no Cypress quando terminar de digitar
    cy.pause();
  } else {
    cy.get(`input[name="${campo}"]`).should("be.visible").focus();
    cy.pause();
  }
});

Then("eu devo ser redirecionado para a página inicial", () => {
  // Aguardar o redirecionamento acontecer
  cy.url({ timeout: 10000 }).should("include", "index.html");
});

Then("eu não devo ver a mensagem de erro", () => {
  cy.get(".error-message").should("not.exist");
});
