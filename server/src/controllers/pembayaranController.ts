import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createPembayaran = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { penjualan_Id, jumlah_pembayaran, metode_pembayaran } = req.body;

    const penjualan = await prisma.penjualan.findUnique({
      where: { id: penjualan_Id },
    });

    if (!penjualan) {
      res.status(404).json({ message: "Transaksi penjualan tidak ditemukan" });
      return;
    }
    const findPembayaran = await prisma.pembayaran.findFirst({
      where: { penjualan_Id: penjualan_Id },
    });
    if (findPembayaran) {
      res.status(500).json({ message: "this transaction is completed" });
      return;
    }
    const pembayaran = await prisma.pembayaran.create({
      data: {
        penjualan_Id,
        jumlah_pembayaran: BigInt(jumlah_pembayaran),
        metode_pembayaran,
      },
    });

    res.status(201).json({
      message: "Pembayaran berhasil",
      data: {
        ...pembayaran,
        jumlah_pembayaran: pembayaran.jumlah_pembayaran.toString(), // Konversi BigInt ke String
      },
    });
  } catch (error) {
    console.error("Error saat membuat pembayaran:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  } finally {
    await prisma.$disconnect();
  }
};
export const getPembayaran = async (req: Request, res: Response) => {
  try {
    const semuaPembayaran = await prisma.pembayaran.findMany();
    const result = semuaPembayaran.map((el) => ({
      ...el,
      jumlah_pembayaran: el.jumlah_pembayaran.toString(),
    }));

    res.status(200).json({
      message: "berhasil mengambil seluruh transaksi pembayaran",
      data: result,
    });
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: `error ketika mengambil data pembayaran ${error}` });
  }
};
