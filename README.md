# Sistema de Compra e Venda de Ingressos de Cinema

Este projeto contém testes BDD (Behavior-Driven Development) usando Cucumber e Cypress com JavaScript para um sistema de compra e venda de ingressos de cinema. O projeto inclui 3 features completas com cenários que demonstram o uso de Given, When, Then, And e But.

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
│   │       ├── produtos.html (filmes em cartaz)
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

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (geralmente vem com o Node.js)

### Instalação do Cypress e Dependências

1. Clone o repositório ou navegue até a pasta do projeto

2. Instale as dependências do projeto:

```bash
npm install
```

Isso instalará automaticamente:
- **Cypress** - Framework de testes end-to-end
- **@badeball/cypress-cucumber-preprocessor** - Integração Cucumber com Cypress
- Todas as outras dependências necessárias

3. Verifique se o Cypress foi instalado corretamente:

```bash
npx cypress verify
```

### Primeira Execução

Na primeira vez que você executar o Cypress, ele pode baixar o binário do Cypress automaticamente. Isso é normal e acontece apenas uma vez.

### Solução de Problemas

#### Erro: ENOENT: no such file or directory (arquivos .feature não encontrados)

Se você encontrar um erro indicando que os arquivos `.feature` não foram encontrados, tente as seguintes soluções:

1. **Limpar o cache do Cypress (usando o script):**
   ```bash
   npm run cypress:clear
   ```
   Ou manualmente:
   ```bash
   npx cypress cache clear
   ```

2. **Limpar o cache do npm e reinstalar (usando o script):**
   ```bash
   npm run clean:install
   ```
   Ou manualmente:
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

3. **Verificar se os arquivos .feature estão no local correto:**
   - Os arquivos devem estar em `cypress/e2e/*.feature`
   - Verifique se os arquivos existem: `cypress/e2e/login.feature`, `cypress/e2e/carrinho.feature`, `cypress/e2e/busca.feature`

4. **Verificar a configuração:**
   - Certifique-se de que o arquivo `.cucumberrc.json` existe na raiz do projeto
   - Verifique se o `cypress.config.js` está configurado corretamente

5. **Reinstalar o Cypress:**
   ```bash
   npm uninstall cypress
   npm install cypress --save-dev
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

- Testa o fluxo completo de login no sistema de ingressos
- **Credenciais válidas:**
  - Email: `cliente@cinema.com`
  - Senha: `senha123`
- **Nota:** Os campos de email e senha são preenchidos manualmente durante os testes (o teste pausa para permitir entrada manual)
- Usa: Given, When, Then, And, But

### 2. Carrinho de Ingressos (carrinho.feature)

**Scenario: Adicionar ingressos ao carrinho e calcular total**

- Testa adicionar ingressos de filmes ao carrinho
- Verifica cálculo do total dos ingressos
- Testa remoção de ingressos
- Valida que ingressos corretos permanecem no carrinho
- Usa: Given, When, Then, And, But

### 3. Busca de Filmes (busca.feature)

**Scenario 1: Buscar filme e filtrar resultados**

- Testa busca de filmes em cartaz
- Verifica ordenação por preço do ingresso
- Valida que filmes estão ordenados corretamente
- Usa: Given, When, Then, And, But

**Scenario 2: Buscar filme que não existe**

- Testa busca de filme que não está em cartaz
- Verifica exibição da mensagem de erro: "Esse filme não está em cartaz"
- Usa: Given, When, Then, And, But

## Step Definitions

Todos os step definitions estão implementados em JavaScript na pasta `cypress/support/step_definitions/`:

- **login.steps.js** - Implementa os steps de login (com preenchimento manual)
- **carrinho.steps.js** - Implementa os steps do carrinho de ingressos
- **busca.steps.js** - Implementa os steps de busca de filmes

## Páginas de Teste

As páginas HTML de teste estão localizadas em `cypress/fixtures/test-pages/` e são servidas automaticamente pelo servidor HTTP na porta 8080:

- **login.html** - Página de login do sistema de ingressos com validação de credenciais
- **index.html** - Página inicial após login bem-sucedido
- **produtos.html** - Página de filmes em cartaz com funcionalidade de carrinho de ingressos
- **busca.html** - Página de busca de filmes com filtros e validação

## Funcionalidades Especiais

### Preenchimento Manual no Login

O teste de login foi configurado para permitir preenchimento manual dos campos. Quando o teste chega nos steps de preenchimento, ele:

1. Foca no campo
2. Limpa o campo
3. Pausa o teste (`cy.pause()`)
4. Você pode preencher manualmente
5. Clique em "Resume" no Cypress para continuar

**Nota:** Este comportamento funciona melhor no modo interativo (`npm run cypress:open`). No modo headless (`npm run cypress:run`), o teste aguardará o timeout antes de continuar.

### Validação de Busca

A página de busca valida se o filme está em cartaz:

- **Filmes disponíveis:** vingadores, vingadores: ultimato, vingadores: guerra infinita, vingadores: era de ultron, vingadores: os vingadores, vingadores: endgame
- **Filme não encontrado:** Exibe mensagem "Esse filme não está em cartaz"

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
