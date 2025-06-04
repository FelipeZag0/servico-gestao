import { Router } from "express";
import { AssinaturaController } from "../controllers/AssinaturaController";

const router = Router();
const controller = new AssinaturaController();

router.post("/assinaturas", controller.criar);
router.post("/assinaturas/:status", controller.listarPorStatus);

export default router;