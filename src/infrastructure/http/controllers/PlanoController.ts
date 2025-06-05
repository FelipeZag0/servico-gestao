import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListarPlanosUseCase } from "../../../core/use-cases/ListarPlanosUseCase";
import { AtualizarCustoPlanoUseCase } from "../../../core/use-cases/AtualizarCustoPlanoUseCase";

/**
 * Controller para operações com planos
 */
export class PlanoController {
  async listar(req: Request, res: Response) {
    try {
      const useCase = container.resolve(ListarPlanosUseCase);
      const planos = await useCase.execute();
      res.json(planos);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar planos" });
    }
  }

  async atualizarCusto(req: Request, res: Response) {
    try {
      const { idPlano } = req.params;
      const { custoMensal } = req.body;
      const useCase = container.resolve(AtualizarCustoPlanoUseCase);
      const plano = await useCase.execute(parseInt(idPlano), custoMensal);
      res.json(plano);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar plano" });
    }
  }
}