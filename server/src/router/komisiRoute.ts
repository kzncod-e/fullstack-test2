import { Router } from "express";
import { getMarketingCommissions } from "../controllers/komisiController";
const router = Router();

router.get("/", getMarketingCommissions);

export default router;
