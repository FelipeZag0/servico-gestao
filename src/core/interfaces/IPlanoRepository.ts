import { Plano } from "../entities/Plano";

export interface IPlanoRepository {
    findAll(): Promise<Plano[]>;
    findById(id: number): Promise<Plano | null>;
    updateCusto(id: number, novoCusto: number): Promise<Plano>;
}