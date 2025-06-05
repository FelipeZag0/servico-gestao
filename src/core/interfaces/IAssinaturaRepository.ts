import { Assinatura } from "../entities/Assinatura";

/**
 * Interface para o repositório de assinaturas
 * Define todas as operações necessárias para gestão de assinaturas
 */
export interface IAssinaturaRepository {
  create(codCliente: number, codPlano: number): Promise<Assinatura>; // Cria nova assinatura
  findByStatus(status: "TODOS" | "ATIVOS" | "CANCELADOS"): Promise<Assinatura[]>; // Busca por status
  findByCliente(codCliente: number): Promise<Assinatura[]>; // Busca assinaturas de um cliente
  findByPlano(codPlano: number): Promise<Assinatura[]>; // Busca assinaturas de um plano
}