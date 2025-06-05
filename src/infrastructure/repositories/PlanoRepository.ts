import { AppDataSource } from "../db/data-source";
import { Plano } from "../../core/entities/Plano";
import { IPlanoRepository } from "../../core/interfaces/IPlanoRepository";

/**
 * Implementação concreta do repositório de planos
 */
export class PlanoRepository implements IPlanoRepository {
  private repo = AppDataSource.getRepository(Plano);

  async findAll(): Promise<Plano[]> {
    return this.repo.find();
  }

  async findById(id: number): Promise<Plano | null> {
    return this.repo.findOneBy({ codigo: id });
  }

  async updateCusto(id: number, novoCusto: number): Promise<Plano> {
    const plano = await this.repo.findOneBy({ codigo: id });
    if (!plano) throw new Error("Plano não encontrado");
    
    plano.custoMensal = novoCusto;
    return this.repo.save(plano); // Atualiza e salva o plano
  }
}