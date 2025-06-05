import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cliente } from "../../core/entities/Cliente";
import { Plano } from "../../core/entities/Plano";
import { Assinatura } from "../../core/entities/Assinatura";

/**
 * Configuração da fonte de dados usando SQLite
 * Centraliza a configuração de acesso ao banco de dados
 */
export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true, // Sincroniza automaticamente o schema (apenas para desenvolvimento)
  logging: true, // Habilita logging de queries
  entities: [Cliente, Plano, Assinatura], // Entidades mapeadas
  subscribers: [],
  migrations: [],
});
