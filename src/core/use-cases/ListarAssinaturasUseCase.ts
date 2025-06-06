import { injectable, inject } from "tsyringe";
import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

/**
 * Caso de uso: Listar assinaturas por status
 * Filtra assinaturas baseado no status (TODOS, ATIVOS, CANCELADOS)
 */
@injectable()
export class ListarAssinaturasUseCase {
  constructor(
    @inject("IAssinaturaRepository") // Token precisa ser igual ao container
    private repository: IAssinaturaRepository
  ) {}

  async execute(status: "TODOS" | "ATIVOS" | "CANCELADOS"): Promise<Assinatura[]> {
    return this.repository.findByStatus(status);
  }
}