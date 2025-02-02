import { Router } from "express";
import { getPenjualan } from "../controllers/penjualanController";

const router = Router();

router.get("/", getPenjualan);

export default router;
