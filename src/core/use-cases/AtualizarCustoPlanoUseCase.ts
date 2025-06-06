import { injectable, inject } from "tsyringe";
import { IPlanoRepository } from "../interfaces/IPlanoRepository";
import { Plano } from "../entities/Plano";

/**
 * Caso de uso: Atualizar o custo de um plano
 * Responsável por atualizar o valor mensal de um plano existente
 */
@injectable() 
export class AtualizarCustoPlanoUseCase {
  constructor(
    @inject("IPlanoRepository")
    private repository: IPlanoRepository
  ) {}

  async execute(idPlano: number, custoMensal: number): Promise<Plano> {
    return this.repository.updateCusto(idPlano, custoMensal);
  }
}