import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Step compartilhado para clicar em botões
When("eu clico no botão {string}", (botao) => {
  cy.contains("button", botao).click();
});

// Step compartilhado para ver mensagens (genérico - funciona para qualquer mensagem visível)
// Procura a mensagem em qualquer lugar da página (incluindo elementos com classes específicas)
Then("eu devo ver a mensagem {string}", (mensagem) => {
  // Tenta encontrar a mensagem em qualquer elemento visível
  // Isso funciona tanto para mensagens de sucesso quanto de erro
  cy.contains(mensagem, { matchCase: false }).should("be.visible");
});

