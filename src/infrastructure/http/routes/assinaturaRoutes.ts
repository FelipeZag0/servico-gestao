import { Router } from "express";
import { AssinaturaController } from "../controllers/AssinaturaController";

/**
 * Configuração de rotas para assinaturas
 */
const router = Router();
const controller = new AssinaturaController();

// Define todos os endpoints para assinaturas
router.post("/", controller.criar);
router.get("/:status", controller.listarPorStatus);
router.get("/cliente/:codcli", controller.listarPorCliente);
router.get("/plano/:codplano", controller.listarPorPlano);

export default router;