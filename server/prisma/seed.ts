import marketing from "../src/seeder/marketing";
import penjualan from "../src/seeder/penjualan";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");
  console.log("🗑️ Deleting existing records...");
  await prisma.penjualan.deleteMany({});
  await prisma.marketing.deleteMany({});
  await prisma.pembayaran.deleteMany({});

  const sold = penjualan.map((el) => ({
    ...el,
    date: new Date(el.date),
  }));

  const customers = marketing.map((el) => el);

  console.log("🚀 Inserting new records...");
  await prisma.marketing.createMany({ data: customers });
  await prisma.penjualan.createMany({ data: sold });

  console.log("✅ Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
