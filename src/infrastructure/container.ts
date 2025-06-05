import "reflect-metadata";
import { container } from "tsyringe";
import { IClienteRepository } from "../core/interfaces/IClienteRepository";
import { ClienteRepository } from "../infrastructure/repositories/ClienteRepository";
import { IPlanoRepository } from "../core/interfaces/IPlanoRepository";
import { PlanoRepository } from "../infrastructure/repositories/PlanoRepository";
import { IAssinaturaRepository } from "../core/interfaces/IAssinaturaRepository";
import { AssinaturaRepository } from "../infrastructure/repositories/AssinaturaRepository";

/**
 * Configuração do container de injeção de dependência
 * Mapeia interfaces para implementações concretas
 */
container.registerSingleton<IClienteRepository>(
  "IClienteRepository", // Token da interface
  ClienteRepository // Implementação concreta
);

container.registerSingleton<IPlanoRepository>(
  "IPlanoRepository",
  PlanoRepository
);

container.registerSingleton<IAssinaturaRepository>(
  "IAssinaturaRepository",
  AssinaturaRepository
);