import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

/**
 * Configuração de rotas para clientes
 */
const router = Router();
const controller = new ClienteController();

// Define endpoint para listar clientes
router.get("/", controller.listar);

export default router;