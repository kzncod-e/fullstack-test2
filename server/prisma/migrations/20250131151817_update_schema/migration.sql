/*
  Warnings:

  - A unique constraint covering the columns `[transaction_number]` on the table `Penjualan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Penjualan_transaction_number_key" ON "Penjualan"("transaction_number");

-- AddForeignKey
ALTER TABLE "Penjualan" ADD CONSTRAINT "Penjualan_marketing_Id_fkey" FOREIGN KEY ("marketing_Id") REFERENCES "Marketing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
