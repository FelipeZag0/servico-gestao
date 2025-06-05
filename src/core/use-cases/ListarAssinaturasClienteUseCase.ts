import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

/**
 * Caso de uso: Listar assinaturas de um cliente específico
 */
export class ListarAssinaturasClienteUseCase {
  constructor(private repository: IAssinaturaRepository) {}

  async execute(codCliente: number): Promise<Assinatura[]> {
    return this.repository.findByCliente(codCliente);
  }
}