Feature: Carrinho de Ingressos
  Como um cliente
  Eu quero gerenciar ingressos no carrinho
  Para finalizar minha compra

  Scenario: Adicionar ingressos ao carrinho e calcular total
    Given que estou na página de filmes
    When eu adiciono o ingresso "Vingadores: Ultimato" ao carrinho
    And eu adiciono o ingresso "Homem-Aranha: Sem Volta para Casa" ao carrinho
    Then eu devo ver "2" itens no carrinho
    And o valor total deve ser "R$ 60,00"
    When eu removo o ingresso "Homem-Aranha: Sem Volta para Casa" do carrinho
    Then eu devo ver "1" item no carrinho
    And o valor total deve ser "R$ 30,00"
    But o ingresso "Vingadores: Ultimato" ainda deve estar no carrinho

