-- CreateTable
CREATE TABLE "Marketing" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Marketing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penjualan" (
    "id" SERIAL NOT NULL,
    "transaction_number" TEXT NOT NULL,
    "marketing_Id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cargo_fee" INTEGER NOT NULL,
    "total_balance" INTEGER NOT NULL,
    "grand_total" INTEGER NOT NULL,

    CONSTRAINT "Penjualan_pkey" PRIMARY KEY ("id")
);
