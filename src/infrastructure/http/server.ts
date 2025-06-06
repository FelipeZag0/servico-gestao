import "reflect-metadata";
import express from "express";
import { AppDataSource } from "../db/data-source";
import clienteRoutes from "./routes/clienteRoutes";
import planoRoutes from "./routes/planoRoutes";
import assinaturaRoutes from "./routes/assinaturaRoutes";
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