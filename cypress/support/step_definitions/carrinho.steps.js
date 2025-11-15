import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de produtos", () => {
  cy.visit("/cypress/fixtures/test-pages/produtos.html");
});

When("eu adiciono o produto {string} ao carrinho", (produto) => {
  cy.contains(".product", produto).within(() => {
    cy.get("button").contains("Adicionar").click();
  });
});

Then("eu devo ver {string} itens no carrinho", (quantidade) => {
  cy.get(".cart-count").should("contain", quantidade);
});

Then("o valor total deve ser {string}", (valor) => {
  cy.get(".cart-total").should("contain", valor);
});

When("eu removo o produto {string} do carrinho", (produto) => {
  cy.get(".cart").within(() => {
    cy.contains(produto).parent().find("button.remove").click();
  });
});

Then("o produto {string} ainda deve estar no carrinho", (produto) => {
  cy.get(".cart").should("contain", produto);
});
