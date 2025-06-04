import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cliente } from "../../core/entities/Cliente";
import { Plano } from "../../core/entities/Plano";
import { Assinatura } from "../../core/entities/Assinatura";

// Configuração do banco de dados
export const AppDataSource = new DataSource({
    type: "sqlite", // Tipo: SQLite
    database: "database.sqlite", // Nome do arquivo do banco
    synchronize: "true", // Automaticamente cria tabelas
    logging: true,
    entities: [Cliente, Plano, Assinatura], // Aqui vamos colocar nossas "formas"
});
