/*
  Warnings:

  - You are about to drop the column `penjualan_id` on the `Pembayaran` table. All the data in the column will be lost.
  - Added the required column `penjualan_Id` to the `Pembayaran` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pembayaran" DROP CONSTRAINT "Pembayaran_penjualan_id_fkey";

-- AlterTable
ALTER TABLE "Pembayaran" DROP COLUMN "penjualan_id",
ADD COLUMN     "penjualan_Id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Pembayaran" ADD CONSTRAINT "Pembayaran_penjualan_Id_fkey" FOREIGN KEY ("penjualan_Id") REFERENCES "Penjualan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
