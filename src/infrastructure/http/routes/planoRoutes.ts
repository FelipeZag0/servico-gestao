import { Router } from "express";
import { PlanoController } from "../controllers/PlanoController";

/**
 * Configuração de rotas para planos
 */
const router = Router();
const controller = new PlanoController();

// Endpoint para listar planos
router.get("/", controller.listar);
// Endpoint para atualizar custo de um plano
router.patch("/:idPlano", controller.atualizarCusto);

export default router;