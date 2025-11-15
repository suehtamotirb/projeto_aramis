Feature: Login de Usuário
  Como um usuário
  Eu quero fazer login no sistema
  Para acessar minhas funcionalidades

  Scenario: Login bem-sucedido com credenciais válidas
    Given que estou na página de login
    When eu preencho o campo "email" com "usuario@exemplo.com"
    And eu preencho o campo "senha" com "senha123"
    And eu clico no botão "Entrar"
    Then eu devo ser redirecionado para a página inicial
    And eu devo ver a mensagem "Bem-vindo, Usuário!"
    But eu não devo ver a mensagem de erro

