import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListarClientesUseCase } from "../../../core/use-cases/ListarClientesUseCase";

/**
 * Controller para operações com clientes
 * Responsável por lidar com requisições HTTP e delegar para os casos de uso
 */
export class ClienteController {
  async listar(req: Request, res: Response) {
    try {
      // Resolve a dependência do caso de uso
      const useCase = container.resolve(ListarClientesUseCase);
      const clientes = await useCase.execute();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar clientes" });
    }
  }
}