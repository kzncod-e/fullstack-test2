import express from "express";
import {
  createPembayaran,
  getPembayaran,
} from "../controllers/pembayaranController";

const router = express.Router();

router.post("/", createPembayaran);
router.get("/", getPembayaran);

export default router;
