# Projeto Cucumber + Cypress

Este projeto contém testes BDD (Behavior-Driven Development) usando Cucumber e Cypress com JavaScript. O projeto inclui 3 features completas com cenários que demonstram o uso de Given, When, Then, And e But.

## Estrutura do Projeto

```
.
├── cypress/
│   ├── e2e/
│   │   ├── login.feature
│   │   ├── carrinho.feature
│   │   └── busca.feature
│   ├── fixtures/
│   │   └── test-pages/
│   │       ├── login.html
│   │       ├── index.html
│   │       ├── produtos.html
│   │       └── busca.html
│   └── support/
│       ├── step_definitions/
│       │   ├── login.steps.js
│       │   ├── carrinho.steps.js
│       │   └── busca.steps.js
│       ├── e2e.js
│       └── commands.js
├── cypress.config.js
└── package.json
```

## Instalação

```bash
npm install
```

## Executar Testes

O servidor HTTP é iniciado **automaticamente** quando você executa os testes. Não é necessário iniciar manualmente!

```bash
# Executar testes em modo interativo
npm run cypress:open

# Executar testes em modo headless
npm run cypress:run
```

O servidor HTTP será iniciado automaticamente na porta 8080 e servirá os arquivos HTML de teste. Ele será parado automaticamente quando os testes terminarem.

**Nota:** Se você quiser iniciar o servidor manualmente (opcional), pode usar:

```bash
npm run serve
```

## Features Criadas

### 1. Login de Usuário (login.feature)

**Scenario: Login bem-sucedido com credenciais válidas**

- Testa o fluxo completo de login
- **Credenciais válidas:**
  - Email: `usuario@exemplo.com`
  - Senha: `senha123`
- **Nota:** Os campos de email e senha são preenchidos manualmente durante os testes (o teste pausa para permitir entrada manual)
- Usa: Given, When, Then, And, But

### 2. Carrinho de Compras (carrinho.feature)

**Scenario: Adicionar produtos ao carrinho e calcular total**

- Testa adicionar produtos ao carrinho
- Verifica cálculo do total
- Testa remoção de produtos
- Valida que produtos corretos permanecem no carrinho
- Usa: Given, When, Then, And, But

### 3. Busca de Produtos (busca.feature)

**Scenario 1: Buscar produto e filtrar resultados**

- Testa busca de produtos existentes
- Verifica ordenação por preço
- Valida que produtos estão ordenados corretamente
- Usa: Given, When, Then, And, But

**Scenario 2: Buscar produto que não existe**

- Testa busca de produto inexistente
- Verifica exibição da mensagem de erro: "Esse produto não existe"
- Usa: Given, When, Then, And, But

## Step Definitions

Todos os step definitions estão implementados em JavaScript na pasta `cypress/support/step_definitions/`:

- **login.steps.js** - Implementa os steps de login (com preenchimento manual)
- **carrinho.steps.js** - Implementa os steps do carrinho de compras
- **busca.steps.js** - Implementa os steps de busca de produtos

## Páginas de Teste

As páginas HTML de teste estão localizadas em `cypress/fixtures/test-pages/` e são servidas automaticamente pelo servidor HTTP na porta 8080:

- **login.html** - Página de login com validação de credenciais
- **index.html** - Página inicial após login bem-sucedido
- **produtos.html** - Página de produtos com funcionalidade de carrinho
- **busca.html** - Página de busca com filtros e validação de produtos

## Funcionalidades Especiais

### Preenchimento Manual no Login

O teste de login foi configurado para permitir preenchimento manual dos campos. Quando o teste chega nos steps de preenchimento, ele:

1. Foca no campo
2. Limpa o campo
3. Pausa o teste (`cy.pause()`)
4. Você pode preencher manualmente
5. Clique em "Resume" no Cypress para continuar

### Validação de Busca

A página de busca valida se o produto existe:

- **Produtos disponíveis:** smartphone, smartphone modelo a/b/c/d/e
- **Produto não encontrado:** Exibe mensagem "Esse produto não existe"

## Tecnologias Utilizadas

- **Cypress** - Framework de testes end-to-end
- **Cucumber** - Framework BDD para escrita de testes em linguagem natural
- **@badeball/cypress-cucumber-preprocessor** - Integração Cucumber com Cypress
- **JavaScript** - Linguagem de programação

## Estrutura de Comandos Gherkin

Todos os cenários utilizam a estrutura completa do Gherkin:

- **Given** - Pré-condições
- **When** - Ações do usuário
- **Then** - Resultados esperados
- **And** - Continuação de Given/When/Then
- **But** - Exceções ou negações
