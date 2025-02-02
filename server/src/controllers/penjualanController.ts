import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getPenjualan = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const penjualan = await prisma.penjualan.findMany();
    res
      .status(200)
      .json({ message: "success fetch penjualan data", data: penjualan });
  } catch (error) {
    res
      .status(500)
      .json({ message: `error while getting penjualan data ${error}` });
  }
};
