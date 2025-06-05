import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

/**
 * Caso de uso: Listar assinaturas de um plano específico
 */
export class ListarAssinaturasPlanoUseCase {
  constructor(private repository: IAssinaturaRepository) {}

  async execute(codPlano: number): Promise<Assinatura[]> {
    return this.repository.findByPlano(codPlano);
  }
}