import { Plano } from "../entities/Plano";

/**
 * Interface para o repositório de planos
 * Define as operações essenciais para manipulação de planos
 */
export interface IPlanoRepository {
  findAll(): Promise<Plano[]>; // Lista todos os planos
  findById(id: number): Promise<Plano | null>; // Busca um plano por ID
  updateCusto(id: number, novoCusto: number): Promise<Plano>; // Atualiza o custo de um plano
}