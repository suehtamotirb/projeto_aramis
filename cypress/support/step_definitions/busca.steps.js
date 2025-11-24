import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial", () => {
  cy.visit("/cypress/fixtures/test-pages/busca.html");
});

When("eu digito {string} no campo de busca", (termo) => {
  cy.get('input[type="search"]').type(termo);
});

When("eu clico no botão de buscar", () => {
  cy.get('button[type="submit"]').contains("Buscar").click();
});

Then("eu devo ver uma lista de filmes relacionados", () => {
  cy.get(".product-list").should("be.visible");
  cy.get(".product-item").should("have.length.greaterThan", 0);
});

Then(
  "os resultados devem conter pelo menos {string} filmes",
  (quantidade) => {
    cy.get(".product-item").should(
      "have.length.at.least",
      parseInt(quantidade)
    );
  }
);

When("eu aplico o filtro {string}", (filtro) => {
  cy.get(".filter-select").select(filtro);
});

Then("os filmes devem estar ordenados por preço crescente", () => {
  cy.get(".product-item .price").then(($prices) => {
    const prices = Array.from($prices).map((el) => {
      return parseFloat(
        el.innerText.replace("R$", "").replace(".", "").replace(",", ".")
      );
    });

    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).to.be.at.most(prices[i + 1]);
    }
  });
});

Then("o primeiro filme deve ter preço menor que o último", () => {
  cy.get(".product-item .price")
    .first()
    .then(($first) => {
      const firstPrice = parseFloat(
        $first.text().replace("R$", "").replace(".", "").replace(",", ".")
      );

      cy.get(".product-item .price")
        .last()
        .then(($last) => {
          const lastPrice = parseFloat(
            $last.text().replace("R$", "").replace(".", "").replace(",", ".")
          );

          expect(firstPrice).to.be.lessThan(lastPrice);
        });
    });
});

Then("nenhum filme deve estar fora de ordem", () => {
  cy.get(".product-item .price").then(($prices) => {
    const prices = Array.from($prices).map((el) => {
      return parseFloat(
        el.innerText.replace("R$", "").replace(".", "").replace(",", ".")
      );
    });

    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sortedPrices);
  });
});
