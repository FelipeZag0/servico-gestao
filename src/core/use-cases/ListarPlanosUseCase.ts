import { IPlanoRepository } from "../interfaces/IPlanoRepository";
import { Plano } from "../entities/Plano";

/**
 * Caso de uso: Listar todos os planos disponíveis
 */
export class ListarPlanosUseCase {
  constructor(private repository: IPlanoRepository) {}

  async execute(): Promise<Plano[]> {
    return this.repository.findAll();
  }
}