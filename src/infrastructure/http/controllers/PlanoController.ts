import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListarPlanosUseCase } from "../../../core/use-cases/ListarPlanosUseCase";
import { AtualizarCustoPlanoUseCase } from "../../../core/use-cases/AtualizarCustoPlanoUseCase";


export class PlanoController {
  listar = async (req: Request, res: Response) => {
    try {
      const useCase = container.resolve(ListarPlanosUseCase);
      const planos = await useCase.execute();
      return res.json(planos);
    } catch (error) {
      console.error("Erro no listar planos:", error);
      return res.status(500).json({ message: "Erro interno do servidor", error: (error as Error).message });
    }
  };

  listarPlanosAtivos = async (req: Request, res: Response) => {
    try {
      const idCliente = parseInt(req.params.id);
      if (isNaN(idCliente)) {
        return res.status(400).json({ message: "ID do cliente inválido" });
      }
      
      // Implemente a lógica para listar planos ativos do cliente
      // Exemplo: chamar um use case específico
      return res.json([
        // Exemplo de retorno
        { id: 1, nome: "Plano Premium", ativo: true },
        { id: 2, nome: "Plano Básico", ativo: true }
      ]);
    } catch (error) {
      console.error("Erro ao listar planos ativos:", error);
      return res.status(500).json({ 
        message: "Erro interno do servidor", 
        error: (error as Error).message 
      });
    }
  };
  
  atualizarCusto = async (req: Request, res: Response) => {
    try {
      const idPlano = parseInt(req.params.idPlano);
      const { custoMensal } = req.body;

      if (isNaN(idPlano)) {
        return res.status(400).json({ message: "ID do plano inválido" });
      }

      if (typeof custoMensal !== "number" || custoMensal <= 0) {
        return res.status(400).json({ message: "Custo mensal inválido" });
      }

      const useCase = container.resolve(AtualizarCustoPlanoUseCase);
      const planoAtualizado = await useCase.execute(idPlano, custoMensal);
      return res.json(planoAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar plano:", error);
      return res.status(500).json({ message: "Erro interno do servidor", error: (error as Error).message });
    }
  };
}
