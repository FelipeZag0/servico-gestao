import { injectable, inject } from "tsyringe";
import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

/**
 * Caso de uso: Listar assinaturas de um cliente específico
 */
@injectable()
export class ListarAssinaturasClienteUseCase {
  constructor(
    @inject("IAssinaturaRepository") // Token usado na configuração do container
    private repository: IAssinaturaRepository
  ) {}

  async execute(codCliente: number): Promise<Assinatura[]> {
    return this.repository.findByCliente(codCliente);
  }
}
