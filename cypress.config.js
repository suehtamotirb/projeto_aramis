const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const http = require("http");
const path = require("path");
const fs = require("fs");

let server;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: "cypress/support/step_definitions/**/*.js",
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Iniciar servidor HTTP imediatamente (para modo interativo)
      // Isso evita o aviso de baseUrl não encontrado
      await startServer();

      // Iniciar servidor HTTP antes dos testes (para modo run)
      on("before:run", async () => {
        await startServer();
      });

      // Parar servidor após os testes
      on("after:run", async () => {
        await stopServer();
      });

      // Para modo interativo (cypress open) - fallback
      on("task", {
        startServer: async () => {
          await startServer();
          return null;
        },
        stopServer: async () => {
          await stopServer();
          return null;
        },
      });

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "http://localhost:8080",
    supportFile: "cypress/support/e2e.js",
    // Desabilitar verificação do baseUrl para evitar avisos
    // O servidor será iniciado automaticamente
    watchForFileChanges: false,
  },
});

function startServer() {
  return new Promise((resolve, reject) => {
    if (server) {
      console.log("Servidor HTTP já está rodando");
      resolve();
      return;
    }

    server = http.createServer((req, res) => {
      let filePath = "." + req.url;

      // Se for a raiz, redirecionar para index
      if (filePath === "./") {
        filePath = "./cypress/fixtures/test-pages/index.html";
      }

      // Verificar se o arquivo existe
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("404 Not Found");
          return;
        }

        // Ler e servir o arquivo
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("500 Internal Server Error");
            return;
          }

          const ext = path.extname(filePath);
          const contentType = getContentType(ext);

          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        });
      });
    });

    server.on("error", (err) => {
      // Se a porta já estiver em uso, assumir que outro processo já iniciou o servidor
      if (err.code === "EADDRINUSE") {
        console.log(
          "Porta 8080 já está em uso, assumindo que servidor já está rodando"
        );
        resolve();
      } else {
        reject(err);
      }
    });

    server.listen(8080, "127.0.0.1", () => {
      console.log("Servidor HTTP iniciado na porta 8080");
      resolve();
    });
  });
}

function stopServer() {
  return new Promise((resolve) => {
    if (server) {
      server.close(() => {
        console.log("Servidor HTTP parado");
        server = null;
        resolve();
      });
    } else {
      resolve();
    }
  });
}

function getContentType(ext) {
  const types = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
  };
  return types[ext] || "text/plain";
}
