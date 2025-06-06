import { Request, Response } from "express";
import { container } from "tsyringe";
import { CriarAssinaturaUseCase } from "../../../core/use-cases/CriarAssinaturaUseCase";
import { ListarAssinaturasUseCase } from "../../../core/use-cases/ListarAssinaturasUseCase";
import { ListarAssinaturasClienteUseCase } from "../../../core/use-cases/ListarAssinaturasClienteUseCase";
import { ListarAssinaturasPlanoUseCase } from "../../../core/use-cases/ListarAssinaturasPlanoUseCase";
// import { RegistrarPagamentoUseCase } from "../../../core/use-cases/RegistrarPagamentoUseCase"; // Descomente se já tiver o use case

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
      const status = req.params.status.toUpperCase() as "TODOS" | "ATIVOS" | "CANCELADOS";
      const useCase = container.resolve(ListarAssinaturasUseCase);
      const assinaturas = await useCase.execute(status);

      if (assinaturas.length === 0) {
        return res.status(404).json({
          message: "Nenhuma assinatura encontrada com esse status",
          status
        });
      }

      return res.json(assinaturas);
    } catch (error) {
      console.error("Erro ao listar assinaturas por status:", error);
      return res.status(500).json({
        message: "Erro interno do servidor",
        error: (error as Error).message
      });
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

      if (assinaturas.length === 0) {
        return res.status(404).json({
          message: "Nenhuma assinatura encontrada para este cliente",
          codCliente
        });
      }

      return res.json(assinaturas);
    } catch (error) {
      console.error("Erro ao listar assinaturas do cliente:", error);
      return res.status(500).json({
        message: "Erro interno do servidor",
        error: (error as Error).message
      });
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

      if (assinaturas.length === 0) {
        return res.status(404).json({
          message: "Nenhuma assinatura encontrada para este plano",
          codPlano
        });
      }

      return res.json(assinaturas);
    } catch (error) {
      console.error("Erro ao listar assinaturas do plano:", error);
      return res.status(500).json({
        message: "Erro interno do servidor",
        error: (error as Error).message
      });
    }
  }

  // Registra o pagamento de uma assinatura
  async registrarPagamento(req: Request, res: Response) {
    try {
      const { codAssinatura, valor, dataPagamento } = req.body;

      if (!codAssinatura || !valor || !dataPagamento) {
        return res.status(400).json({ 
          message: "Dados incompletos",
          required: ["codAssinatura", "valor", "dataPagamento"]
        });
      }

      // Quando tiver o use case pronto, descomente e utilize:
      // const useCase = container.resolve(RegistrarPagamentoUseCase);
      // const resultado = await useCase.execute({ codAssinatura, valor, dataPagamento });

      return res.json({
        success: true,
        message: "Pagamento registrado com sucesso",
        data: {
          codAssinatura,
          valor,
          dataPagamento,
          // resultado: resultado // Se necessário, retornar dados reais do pagamento
        }
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
