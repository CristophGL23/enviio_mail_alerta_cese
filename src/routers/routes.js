import { Router } from "express";
import { getSupplier } from "../controllers/Operador.controller";
import { createExcel, sendMailTest } from "../controllers/SendMail.controller";

const router = Router();

router.get('/api/principal', getSupplier)
router.post('/api/sendmail', sendMailTest)
router.post('/api/createexcel', createExcel)

export default router;
