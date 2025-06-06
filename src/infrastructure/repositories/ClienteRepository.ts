import { AppDataSource } from "../db/data-source";
import { Cliente } from "../../core/entities/Cliente";
import { IClienteRepository } from "../../core/interfaces/IClienteRepository";

/**
 * Implementação concreta do repositório de clientes usando TypeORM
 * Adaptador entre o domínio e a infraestrutura
 */
export class ClienteRepository implements IClienteRepository {
  private repo = AppDataSource.getRepository(Cliente);

  async findAll(): Promise<Cliente[]> {
    return this.repo.find(); // Busca todos os clientes no banco de dados
  }
}

