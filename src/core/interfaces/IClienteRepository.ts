import { Cliente } from "../entities/Cliente";

/**
 * Interface que define o contrato para o repositório de clientes
 * Seguindo o Dependency Inversion Principle (SOLID)
 */
export interface IClienteRepository {
  findAll(): Promise<Cliente[]>; // Busca todos os clientes
}