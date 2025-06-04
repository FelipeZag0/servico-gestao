import { Express } from "express";
import "reflect-metadata";
import { AppDataSource } from "../db/data-source";
import clienteRoutes from "./routes/clienteRoutes";
import planoRoutes from "./routes/planoRoutes";
import assinaturaRoutes from "./routes/assinaturaRoutes";
import "./container";

const app = express();
app.use(express.json());

app.use("/gestao/clientes", clienteRoutes);
app.use("/gestao/planos", planoRoutes);
app.use("/gestao/assinaturas", assinaturaRoutes);

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
    })
    .catch((error) => console.log("Erro ao conectar ao banco:", error));