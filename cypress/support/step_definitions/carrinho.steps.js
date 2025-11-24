import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de filmes", () => {
  cy.visit("/cypress/fixtures/test-pages/produtos.html");
});

When("eu adiciono o ingresso {string} ao carrinho", (ingresso) => {
  cy.contains(".product", ingresso).within(() => {
    cy.get("button").contains("Adicionar").click();
  });
});

Then("eu devo ver {string} itens no carrinho", (quantidade) => {
  cy.get(".cart-count").should("contain", quantidade);
});

Then("eu devo ver {string} item no carrinho", (quantidade) => {
  cy.get(".cart-count").should("contain", quantidade);
});

Then("o valor total deve ser {string}", (valor) => {
  cy.get(".cart-total").should("contain", valor);
});

When("eu removo o ingresso {string} do carrinho", (ingresso) => {
  cy.get(".cart").within(() => {
    // Encontra o div do item do carrinho que contém o nome do ingresso
    // e clica no botão remove dentro desse div específico
    cy.get("#cart-items")
      .contains("div", ingresso)
      .within(() => {
        cy.get("button.remove").click();
      });
  });
});

Then("o ingresso {string} ainda deve estar no carrinho", (ingresso) => {
  cy.get(".cart").should("contain", ingresso);
});
