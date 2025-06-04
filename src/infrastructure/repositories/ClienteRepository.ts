import { AppDataSource } from "../db/data-source";
import { Cliente } from "../../core/entities/Cliente";
import { IClienteRepository } from "../../core/interfaces/IClienteRepository";

export class ClienteRepository implements IClienteRepository {
    private repo = AppDataSource.getRepository(Cliente);

    async findAll(): Promise<Cliente[]> {
        return this.repo.find();
    }

    async findById(id: number): Promise<Cliente | null> {
        return this.repo.findOneBy({ codigo: id });
    }
}