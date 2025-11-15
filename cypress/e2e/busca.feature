Feature: Busca de Produtos
  Como um usuário
  Eu quero buscar produtos no site
  Para encontrar o que preciso

  Scenario: Buscar produto e filtrar resultados
    Given que estou na página inicial
    When eu digito "smartphone" no campo de busca
    And eu clico no botão de buscar
    Then eu devo ver uma lista de produtos relacionados
    And os resultados devem conter pelo menos "5" produtos
    When eu aplico o filtro "Preço: Menor para Maior"
    Then os produtos devem estar ordenados por preço crescente
    And o primeiro produto deve ter preço menor que o último
    But nenhum produto deve estar fora de ordem

