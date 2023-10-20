import { Router } from "express";
import { getSuppliers } from "../controllers/Operador.controller";
import { createExcel, sendMailTest } from "../controllers/SendMail.controller";

const router = Router();

router.get('/api/principal', getSuppliers)
router.post('/api/sendmail', sendMailTest)
router.post('/api/createexcel', createExcel)

export default router;
