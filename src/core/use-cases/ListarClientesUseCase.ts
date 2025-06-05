import { IClienteRepository } from "../interfaces/IClienteRepository";
import { Cliente } from "../entities/Cliente";

/**
 * Caso de uso: Listar todos os clientes
 * Encapsula a lógica de negócio para listagem de clientes
 */
export class ListarClientesUseCase {
  constructor(private repository: IClienteRepository) {}

  async execute(): Promise<Cliente[]> {
    return this.repository.findAll();
  }
}