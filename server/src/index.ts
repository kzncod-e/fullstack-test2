import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import komisiRoute from "./router/komisiRoute";
import penjualanRoute from "./router/penjualanRoute";
import pembayaranRoute from "./router/pembayaranRoute";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("/komisi", komisiRoute);
app.use("/penjualan", penjualanRoute);
app.use("/pembayaran", pembayaranRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
