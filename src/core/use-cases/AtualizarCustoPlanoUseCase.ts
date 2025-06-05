import { IPlanoRepository } from "../interfaces/IPlanoRepository";
import { Plano } from "../entities/Plano";

/**
 * Caso de uso: Atualizar o custo de um plano
 * Responsável por atualizar o valor mensal de um plano existente
 */
export class AtualizarCustoPlanoUseCase {
  constructor(private repository: IPlanoRepository) {}

  async execute(codigo: number, novoCusto: number): Promise<Plano> {
    return this.repository.updateCusto(codigo, novoCusto);
  }
}