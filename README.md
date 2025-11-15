# Projeto Cucumber + Cypress

Este projeto contém testes BDD (Behavior-Driven Development) usando Cucumber e Cypress.

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

- Scenario: Login bem-sucedido com credenciais válidas
- Usa: Given, When, Then, And, But

### 2. Carrinho de Compras (carrinho.feature)

- Scenario: Adicionar produtos ao carrinho e calcular total
- Usa: Given, When, Then, And, But

### 3. Busca de Produtos (busca.feature)

- Scenario: Buscar produto e filtrar resultados
- Usa: Given, When, Then, And, But

## Step Definitions

Todos os step definitions estão implementados em JavaScript na pasta `cypress/support/step_definitions/`.

## Páginas de Teste

As páginas HTML de teste estão localizadas em `cypress/fixtures/test-pages/` e são servidas pelo servidor HTTP local na porta 8080.
