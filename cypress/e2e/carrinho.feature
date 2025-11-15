Feature: Carrinho de Compras
  Como um cliente
  Eu quero gerenciar produtos no carrinho
  Para finalizar minha compra

  Scenario: Adicionar produtos ao carrinho e calcular total
    Given que estou na página de produtos
    When eu adiciono o produto "Notebook" ao carrinho
    And eu adiciono o produto "Mouse" ao carrinho
    Then eu devo ver "2" itens no carrinho
    And o valor total deve ser "R$ 1.500,00"
    When eu removo o produto "Mouse" do carrinho
    Then eu devo ver "1" item no carrinho
    And o valor total deve ser "R$ 1.200,00"
    But o produto "Notebook" ainda deve estar no carrinho

