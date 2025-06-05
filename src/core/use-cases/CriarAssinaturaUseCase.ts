import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

/**
 * Caso de uso: Criar uma nova assinatura
 * Implementa a regra de negócio para criação de assinaturas
 */
export class CriarAssinaturaUseCase {
  constructor(private repository: IAssinaturaRepository) {}

  async execute(codCliente: number, codPlano: number): Promise<Assinatura> {
    return this.repository.create(codCliente, codPlano);
  }
}