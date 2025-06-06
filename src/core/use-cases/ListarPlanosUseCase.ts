import { injectable, inject } from "tsyringe";
import { IPlanoRepository } from "../interfaces/IPlanoRepository";
import { Plano } from "../entities/Plano";

/**
 * Caso de uso: Listar todos os planos disponíveis
 */
@injectable()
export class ListarPlanosUseCase {
  constructor(
    @inject("IPlanoRepository")
    private repository: IPlanoRepository
  ) {}

  async execute(): Promise<Plano[]> {
    return this.repository.findAll();
  }
}