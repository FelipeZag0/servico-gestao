import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListarClientesUseCase } from "../../../core/use-cases/ListarClientesUseCase";


export class ClienteController {
  async listar(req: Request, res: Response) {
    try {
      
      const useCase = container.resolve(ListarClientesUseCase);
      const clientes = await useCase.execute();
      return res.json(clientes);
    } catch (error) {
      console.error("Erro ao listar clientes:", error);
      return res.status(500).json({ message: "Erro interno do servidor", error: (error as Error).message });
    }
  }
}
