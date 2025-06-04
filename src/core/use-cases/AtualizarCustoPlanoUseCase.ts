import { IPlanoRepository } from "../interfaces/IPlanoRepository";
import { Plano } from "../entities/Plano";

export class AtualizarCustoPlanoUseCase {
    constructor(private repository: IPlanoRepository) {}

    async execute(codigo: number, novoCusto: number): Promise<Plano> {
        return this.repository.updateCusto(codigo, novoCusto);
    }
}