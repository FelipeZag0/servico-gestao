import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

/**
 * Caso de uso: Listar assinaturas por status
 * Filtra assinaturas baseado no status (TODOS, ATIVOS, CANCELADOS)
 */
export class ListarAssinaturasUseCase {
  constructor(private repository: IAssinaturaRepository) {}

  async execute(status: "TODOS" | "ATIVOS" | "CANCELADOS"): Promise<Assinatura[]> {
    return this.repository.findByStatus(status);
  }
}