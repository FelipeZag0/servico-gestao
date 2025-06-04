import { IClienteRepository } from "../interfaces/IClienteRepository";
import { Cliente } from "../entities/Cliente";

export class ListarClientesUseCase {
    constructor(private repository: IClienteRepository) {}

    async execute(): Promise<Cliente[]> {
        return this.repository.findAll();
    }
}