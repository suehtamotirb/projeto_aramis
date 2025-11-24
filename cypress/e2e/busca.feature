Feature: Busca de Filmes
  Como um cliente
  Eu quero buscar filmes em cartaz
  Para encontrar o filme que quero assistir

  Scenario: Buscar filme e filtrar resultados
    Given que estou na página inicial
    When eu digito "vingadores" no campo de busca
    And eu clico no botão de buscar
    Then eu devo ver uma lista de filmes relacionados
    And os resultados devem conter pelo menos "5" filmes
    When eu aplico o filtro "Preço: Menor para Maior"
    Then os filmes devem estar ordenados por preço crescente
    And o primeiro filme deve ter preço menor que o último
    But nenhum filme deve estar fora de ordem

  Scenario: Buscar filme que não existe
    Given que estou na página inicial
    When eu digito "filme inexistente" no campo de busca
    And eu clico no botão de buscar
    Then eu devo ver a mensagem "Esse filme não está em cartaz"

