import "reflect-metadata";
import { container } from "tsyringe";

import { IClienteRepository } from "../core/interfaces/IClienteRepository";
import { ClienteRepository } from "../infrastructure/repositories/ClienteRepository";

import { IPlanoRepository } from "../core/interfaces/IPlanoRepository";
import { PlanoRepository } from "../infrastructure/repositories/PlanoRepository";

import { IAssinaturaRepository } from "../core/interfaces/IAssinaturaRepository";
import { AssinaturaRepository } from "../infrastructure/repositories/AssinaturaRepository";

import { ListarPlanosUseCase } from "../core/use-cases/ListarPlanosUseCase";
import { AtualizarCustoPlanoUseCase } from "../core/use-cases/AtualizarCustoPlanoUseCase";

/**
 * Configuração do container de injeção de dependência
 * Mapeia interfaces para implementações concretas
 */
container.registerSingleton<IClienteRepository>(
  "IClienteRepository", // token
  ClienteRepository
);

container.registerSingleton<IPlanoRepository>(
  "IPlanoRepository", // token
  PlanoRepository
);

container.registerSingleton<IAssinaturaRepository>(
  "IAssinaturaRepository", // token
  AssinaturaRepository
);

container.register("ListarPlanosUseCase", {
  useClass: ListarPlanosUseCase,
});

container.register("AtualizarCustoPlanoUseCase", {
  useClass: AtualizarCustoPlanoUseCase,
});