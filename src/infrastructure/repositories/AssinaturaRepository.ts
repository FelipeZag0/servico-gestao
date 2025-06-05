import { AppDataSource } from "../db/data-source";
import { Assinatura } from "../../core/entities/Assinatura";
import { IAssinaturaRepository } from "../../core/interfaces/IAssinaturaRepository";
import { Plano } from "../../core/entities/Plano";
import { Cliente } from "../../core/entities/Cliente";

/**
 * Implementação concreta do repositório de assinaturas
 * Contém a lógica de persistência para operações com assinaturas
 */
export class AssinaturaRepository implements IAssinaturaRepository {
  private repo = AppDataSource.getRepository(Assinatura);

  async create(codCliente: number, codPlano: number): Promise<Assinatura> {
    // Busca o plano e cliente associados
    const planoRepo = AppDataSource.getRepository(Plano);
    const clienteRepo = AppDataSource.getRepository(Cliente);
    
    const plano = await planoRepo.findOneBy({ codigo: codPlano });
    const cliente = await clienteRepo.findOneBy({ codigo: codCliente });
    
    if (!plano || !cliente) throw new Error("Plano ou cliente não encontrado");

    // Calcula datas de fidelidade (1 ano)
    const inicioFidelidade = new Date();
    const fimFidelidade = new Date();
    fimFidelidade.setFullYear(fimFidelidade.getFullYear() + 1);

    // Cria nova assinatura com desconto de 10%
    const assinatura = new Assinatura();
    assinatura.plano = plano;
    assinatura.cliente = cliente;
    assinatura.inicioFidelidade = inicioFidelidade;
    assinatura.fimFidelidade = fimFidelidade;
    assinatura.custoFinal = plano.custoMensal * 0.9;
    assinatura.descricao = "Desconto de fidelidade (10%)";
    assinatura.status = "ATIVO";

    return this.repo.save(assinatura); // Persiste no banco
  }

  async findByStatus(status: "TODOS" | "ATIVOS" | "CANCELADOS"): Promise<Assinatura[]> {
    if (status === "TODOS") return this.repo.find();
    return this.repo.findBy({ status: status === "ATIVOS" ? "ATIVO" : "CANCELADO" });
  }

  async findByCliente(codCliente: number): Promise<Assinatura[]> {
    return this.repo.find({ 
      where: { cliente: { codigo: codCliente } },
      relations: ["plano"] // Carrega o relacionamento com plano
    });
  }

  async findByPlano(codPlano: number): Promise<Assinatura[]> {
    return this.repo.find({ 
      where: { plano: { codigo: codPlano } },
      relations: ["cliente"] // Carrega o relacionamento com cliente
    });
  }
}