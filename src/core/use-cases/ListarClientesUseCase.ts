import { injectable, inject } from "tsyringe";
import { IClienteRepository } from "../interfaces/IClienteRepository";
import { Cliente } from "../entities/Cliente";

/**
 * Caso de uso: Listar todos os clientes
 * Encapsula a lógica de negócio para listagem de clientes
 */
@injectable()
export class ListarClientesUseCase {
  constructor(
    @inject("IClienteRepository") // corresponde ao que registrou no container
    private repository: IClienteRepository
  ) {}

  async execute(): Promise<Cliente[]> {
    return this.repository.findAll();
  }
}
