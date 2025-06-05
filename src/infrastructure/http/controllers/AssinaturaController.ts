import { Request, Response } from "express";
import { container } from "tsyringe";
import { CriarAssinaturaUseCase } from "../../../core/use-cases/CriarAssinaturaUseCase";
import { ListarAssinaturasUseCase } from "../../../core/use-cases/ListarAssinaturasUseCase";
import { ListarAssinaturasClienteUseCase } from "../../../core/use-cases/ListarAssinaturasClienteUseCase";
import { ListarAssinaturasPlanoUseCase } from "../../../core/use-cases/ListarAssinaturasPlanoUseCase";

/**
 * Controller para operações com assinaturas
 */
export class AssinaturaController {
  async criar(req: Request, res: Response) {
    try {
      const { codCliente, codPlano } = req.body;
      const useCase = container.resolve(CriarAssinaturaUseCase);
      const assinatura = await useCase.execute(codCliente, codPlano);
      res.json(assinatura);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar assinatura" });
    }
  }

  async listarPorStatus(req: Request, res: Response) {
    try {
      const { status } = req.params;
      const useCase = container.resolve(ListarAssinaturasUseCase);
      const assinaturas = await useCase.execute(status as any);
      res.json(assinaturas);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar assinaturas" });
    }
  }

  async listarPorCliente(req: Request, res: Response) {
    try {
      const { codcli } = req.params;
      const useCase = container.resolve(ListarAssinaturasClienteUseCase);
      const assinaturas = await useCase.execute(parseInt(codcli));
      res.json(assinaturas);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar assinaturas do cliente" });
    }
  }

  async listarPorPlano(req: Request, res: Response) {
    try {
      const { codplano } = req.params;
      const useCase = container.resolve(ListarAssinaturasPlanoUseCase);
      const assinaturas = await useCase.execute(parseInt(codplano));
      res.json(assinaturas);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar assinaturas do plano" });
    }
  }
}