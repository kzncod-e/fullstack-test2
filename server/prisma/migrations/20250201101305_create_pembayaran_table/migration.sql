-- CreateTable
CREATE TABLE "Pembayaran" (
    "id" SERIAL NOT NULL,
    "penjualan_id" INTEGER NOT NULL,
    "jumlah_pembayaran" BIGINT NOT NULL,
    "metode_pembayaran" VARCHAR(50) NOT NULL,
    "tanggal_pembayaran" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pembayaran_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pembayaran" ADD CONSTRAINT "Pembayaran_penjualan_id_fkey" FOREIGN KEY ("penjualan_id") REFERENCES "Penjualan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
