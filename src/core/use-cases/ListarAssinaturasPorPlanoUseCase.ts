import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

export class ListarAssinaturasPorPlanoUseCase {
    constructor(private repository: IAssinaturaRepository) {}

    async execute(codPlano: number): Promise<Assinatura[]> {
        return this.repository.findByPlano(codPlano);
    }
}