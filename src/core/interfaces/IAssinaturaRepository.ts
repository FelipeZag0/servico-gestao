import { Assinatura } from "../entities/Assinatura";

export interface IAssinaturaRepository {
    create(codCliente: number, codPlano: number): Promise<Assinatura>;
    findByStatus(status: "TODOS" | "ATIVOS" | "CANCELADOS"): Promise<Assinatura[]>;
    findByCliente(codCliente: number): Promise<Assinatura[]>;
    findByPlano(codPlano: number): Promise<Assinatura[]>;
}