import "reflect-metadata";
import express from "express";
import { AppDataSource } from "../db/data-source";
import clienteRoutes from "./router/clienteRouter";
import planoRoutes from "./router/planoRouter";
import assinaturaRoutes from "./router/assinaturaRouter";
import "../container"; // Configuração de injeção de dependência


const app = express();
app.use(express.json());

// 🔗 ROTAS PRINCIPAIS
app.use("/gerenciaplanos/clientes", clienteRoutes);
app.use("/gerenciaplanos/planos", planoRoutes);
app.use("/gerenciaplanos/assinaturas", assinaturaRoutes);

// 🔄 REDIRECIONAMENTOS
app.get("/gerenciaplanos/asscli/:id", (req, res) => {
  res.redirect(`/gerenciaplanos/assinaturas/cliente/${req.params.id}`);
});

app.get("/gerenciaplanos/assinaturaplano/:id", (req, res) => {
  res.redirect(`/gerenciaplanos/assinaturas/plano/${req.params.id}`);
});

app.get("/planosativos/:id", (req, res) => {
  res.redirect(`/gerenciaplanos/planos/ativos/${req.params.id}`);
});

app.post("/registrarpagamento", (req, res) => {
  res.redirect(307, "/gerenciaplanos/assinaturas/registrarpagamento");
  // Código 307 mantém o método POST e o corpo da requisição
});

// 🚀 INICIALIZAÇÃO DO BANCO E SERVIDOR
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Banco de dados inicializado!");
    app.listen(3000, () => {
      console.log("🚀 Servidor rodando na porta 3000");
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao inicializar banco de dados:", err);
  });
