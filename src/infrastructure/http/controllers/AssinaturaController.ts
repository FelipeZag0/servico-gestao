import { Request, Response } from "express";
import { container } from "tsyringe";
import { CriarAssinaturaUseCase } from "../../../core/use-cases/CriarAssinaturaUseCase";
import { ListarAssinaturasUseCase } from "../../../core/use-cases/ListarAssinaturasUseCase";

export class AssinaturaController {
    async criar(req: Request, res: Response) {
        const { codCliente, codPlano } = req.body;
        const useCase = container.resolve(CriarAssinaturaUseCase);
        const assinatura = await useCase.execute(codCliente, codPlano);
        res.json(assinatura);
    }

    async listarPorStatus(req: Request, res: Response) {
        const { status } = req.params;
        const useCase = container.resolve(ListarAssinaturasUseCase);
        const assinaturas = await useCase.execute(status as any);
        res.json(assinaturas);
    }

    async listarPorCliente(req: Request, res: Response) {
        const { codcli } = req.params;
        const useCase = container.resolve(ListarAssinaturasPorClienteUseCase);
        const assinaturas = await useCase.execute(parseInt(codcli));
        res.json(assinaturas);
    }

    async listarPorPlano(req: Request, res: Response) {
        const { codplano } = req.params;
        const useCase = container.resolve(ListarAssinaturasPorPlanoUseCase);
        const assinaturas = await useCase.execute(parseInt(codplano));
        res.json(assinaturas);
    }

    
}