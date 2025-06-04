import { IAssinaturaRepository } from "../interfaces/IAssinaturaRepository";
import { Assinatura } from "../entities/Assinatura";

export class CriarAssinaturaUseCase {
    constructor(private repository: IAssinaturaRepository) {}

    async execute(codCliente: number, codPlano: number): Promise<Assinatura> {
        return this.repository.create(codCliente, codPlano);
    }
}