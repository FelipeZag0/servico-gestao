import { injectable, inject } from "tsyringe";
import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

/**
 * Caso de uso: Listar assinaturas de um plano específico
 */
@injectable()
export class ListarAssinaturasPlanoUseCase {
  constructor(
    @inject("IAssinaturaRepository") // o token deve bater com o do container
    private repository: IAssinaturaRepository
  ) {}

  async execute(codPlano: number): Promise<Assinatura[]> {
    return this.repository.findByPlano(codPlano);
  }
}
