import { AppDataSource } from "../db/data-source";
import { Assinatura } from "../../core/entities/Assinatura";
import { IAssinaturaRepository } from "../../core/interfaces/IAssinaturaRepository";
import { Plano } from "../../core/entities/Plano";
import { Cliente } from "../../core/entities/Cliente";

export class AssinaturaRepository implements IAssinaturaRepository {
    private repo = AppDataSource.getRepository(Assinatura);

    async create(codCliente: number, codPlano: number): Promise<Assinatura> {
        const assinatura = new Assinatura();
        assinatura.cliente = { codigo: codCliente } as Cliente;
        assinatura.plano = { codigo: codPlano } as Plano;
        assinatura.inicioFidelidade = new Date();

        const fimFidelidade = new Date();
        fimFidelidade.setFullYear(fimFidelidade.getFullYear() + 1);
        assinatura.fimFidelidade = fimFidelidade;

        assinatura.custoFinal = (await AppDataSource.getRepository(Plano).findOneBy({ codigo: codPlano }))!.custoMensal * 0.9;
        assinatura.descricao = "Desconto de fidelidade (10%)";

        return this.repo.save(assinatura);
    }

    async findByStatus(status: "TODOS" | "ATIVOS" | "CANCELADOS"): Promise<Assinatura[]> {
        if (status === "TODOS") return this.repo.find();
        return this.repo.findBy({ status: status === "ATIVOS" ? "ATIVO" : "CANCELADO" });
    }

    async findByCliente(codCliente: number): Promise<Assinatura[]> {
        return this.repo.find({ where: { cliente: { codigo: codCliente } } });
    }

    async findByPlano(codPlano: number): Promise<Assinatura[]> {
        return this.repo.find({where: { plano: { codigo: codPlano } } });
    }
}