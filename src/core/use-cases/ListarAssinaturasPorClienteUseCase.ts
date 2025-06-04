import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

export class ListarAssinaturasPorClienteUseCase {
    constructor(private repository: IAssinaturaRepository) {}
    
    async execute(codCliente: number): Promise<Assinatura[]> {
        return this.repository.findByCliente(codCliente);
    }
}