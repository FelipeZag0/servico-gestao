import { Cliente } from "../entities/Cliente";

export interface IClienteRepository {
    findAll(): Promise<Cliente[]>;
    findById(id: number): Promise<Cliente | null>;
}