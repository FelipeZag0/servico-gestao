import { Request, Response } from "express";
import { container } from "tsyringe";
import { CriarAssinaturaUseCase } from "../../../core/use-cases/CriarAssinaturaUseCase";
import { ListarAssinaturasUseCase } from "../../../core/use-cases/ListarAssinaturasUseCase";
import { ListarAssinaturasClienteUseCase } from "../../../core/use-cases/ListarAssinaturasClienteUseCase";
import { ListarAssinaturasPlanoUseCase } from "../../../core/use-cases/ListarAssinaturasPlanoUseCase";


export class AssinaturaController {
  // Cria uma nova assinatura, espera codCliente e codPlano no body
  async criar(req: Request, res: Response) {
    try {
      const { codCliente, codPlano } = req.body;
      const useCase = container.resolve(CriarAssinaturaUseCase);
      const assinatura = await useCase.execute(codCliente, codPlano);
      return res.json(assinatura);
    } catch (error) {
      console.error("Erro ao criar assinatura:", error);
      return res.status(500).json({ message: "Erro interno do servidor", error: (error as Error).message });
    }
  }

  // Lista assinaturas filtrando por status (TODOS, ATIVOS, CANCELADOS)
  async listarPorStatus(req: Request, res: Response) {
    try {
      const status = req.params.status as "TODOS" | "ATIVOS" | "CANCELADOS";
      const useCase = container.resolve(ListarAssinaturasUseCase);
      const assinaturas = await useCase.execute(status);
      return res.json(assinaturas);
    } catch (error) {
      console.error("Erro ao listar assinaturas por status:", error);
      return res.status(500).json({ message: "Erro interno do servidor", error: (error as Error).message });
    }
  }

  // Lista assinaturas de um cliente específico
  async listarPorCliente(req: Request, res: Response) {
    try {
      const codCliente = parseInt(req.params.codcli);
      if (isNaN(codCliente)) {
        return res.status(400).json({ message: "Código do cliente inválido" });
      }
      const useCase = container.resolve(ListarAssinaturasClienteUseCase);
      const assinaturas = await useCase.execute(codCliente);
      return res.json(assinaturas);
    } catch (error) {
      console.error("Erro ao listar assinaturas do cliente:", error);
      return res.status(500).json({ message: "Erro interno do servidor", error: (error as Error).message });
    }
  }

  // Lista assinaturas de um plano específico
  async listarPorPlano(req: Request, res: Response) {
    try {
      const codPlano = parseInt(req.params.codplano);
      if (isNaN(codPlano)) {
        return res.status(400).json({ message: "Código do plano inválido" });
      }
      const useCase = container.resolve(ListarAssinaturasPlanoUseCase);
      const assinaturas = await useCase.execute(codPlano);
      return res.json(assinaturas);
    } catch (error) {
      console.error("Erro ao listar assinaturas do plano:", error);
      return res.status(500).json({ message: "Erro interno do servidor", error: (error as Error).message });
    }
  }

  async registrarPagamento(req: Request, res: Response) {
    try {
      const { codAssinatura, valor, dataPagamento } = req.body;
      // Implemente a lógica de registro de pagamento aqui
      // Exemplo: chamar um use case de registro de pagamento
      return res.json({ 
        success: true,
        message: "Pagamento registrado com sucesso",
        data: { codAssinatura, valor, dataPagamento }
      });
    } catch (error) {
      console.error("Erro ao registrar pagamento:", error);
      return res.status(500).json({ 
        message: "Erro ao registrar pagamento", 
        error: (error as Error).message 
      });
    }
  }
}
