import { injectable, inject } from "tsyringe";
import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

/**
 * Caso de uso: Criar uma nova assinatura
 * Implementa a regra de negócio para criação de assinaturas
 */
@injectable()
export class CriarAssinaturaUseCase {
  constructor(
    @inject("IAssinaturaRepository") // Token tem que ser igual ao do container
    private repository: IAssinaturaRepository
  ) {}

  async execute(codCliente: number, codPlano: number): Promise<Assinatura> {
    return this.repository.create(codCliente, codPlano);
  }
}
