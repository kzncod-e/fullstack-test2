import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getMarketingCommissions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Ambil total omzet per marketing dan bulan
    const sales: {
      marketing_Id: number;
      marketing: string;
      bulan: string;
      omzet: BigInt;
    }[] = await prisma.$queryRaw`
      SELECT 
    m.id, 
    m.name AS "marketing",
    TO_CHAR(p.date, 'FMMonth') AS bulan,
    SUM(p.grand_total)::BIGINT AS omzet
    FROM "Penjualan" p
    JOIN "Marketing" m ON m.id = p."marketing_Id"
    GROUP BY m.id, m.name, TO_CHAR(p.date, 'FMMonth'), TO_CHAR(p.date, 'MM')
    ORDER BY m.id, TO_CHAR(p.date, 'MM');

    `;

    if (!sales || sales.length === 0) {
      res.status(404).json({ message: "Data penjualan tidak ditemukan" });
    }

    const result = sales.map((sale) => {
      const { marketing_Id, marketing, bulan, omzet } = sale;
      let komisiPersen = 0;
      const Omzet = Number(omzet);

      if (Omzet >= 500_000_000) {
        komisiPersen = 10;
      } else if (Omzet >= 200_000_000) {
        komisiPersen = 5;
      } else if (Omzet >= 100_000_000) {
        komisiPersen = 2.5;
      }

      const komisiNominal = (komisiPersen / 100) * Omzet;
      // const Omzet = omzet.toString();
      return {
        marketing,
        bulan,
        Omzet,
        komisiPersen,
        komisiNominal,
      };
    });

    // Kirim response
    res.status(200).json({
      message: "Data komisi berhasil diambil",
      data: result,
    });
  } catch (error) {
    console.error("Error fetching commissions:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  } finally {
    await prisma.$disconnect();
  }
};
