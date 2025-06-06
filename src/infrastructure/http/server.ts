import "reflect-metadata";
import express from "express";
import { AppDataSource } from "../db/data-source";
import clienteRoutes from "./router/clienteRouter";
import planoRoutes from "./router/planoRouter";
import assinaturaRoutes from "./router/assinaturaRouter";
import "../container"; // Importa as configurações de DI

/**
 * Configuração e inicialização do servidor Express
 */
const app = express();
app.use(express.json()); // Middleware para parse de JSON

// Configuração das rotas
app.use("/gerenciaplanos/clientes", clienteRoutes);
app.use("/gerenciaplanos/planos", planoRoutes);
app.use("/gerenciaplanos/assinaturas", assinaturaRoutes);

// Rotas alternativas para compatibilidade
app.get("/gerenciaplanos/asscli/:id", (req, res) => {
  res.redirect(`/gerenciaplanos/assinaturas/cliente/${req.params.id}`);
});

app.get("/gerenciaplanos/assinaturaplano/:id", (req, res) => {
  res.redirect(`/gerenciaplanos/assinaturas/plano/${req.params.id}`);
});

app.get("/planosativos/:id", (req, res) => {
  res.redirect(`/gerenciaplanos/planos/ativos/${req.params.id}`);
});

// Inicialização do servidor e banco de dados
AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados inicializado!");
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((err) => {
    console.error("Erro ao inicializar banco de dados", err);
  });