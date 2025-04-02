import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const seed = async () => {
  try {
    const hashedPassword = await bcrypt.hash("pass@5657", 10);

    const user = await prisma.user.upsert({
      where: { email: "temp2@example.com" },
      update: {},
      create: {
        email: "temp2@example.com",
        password: hashedPassword,
      },
    });

    console.log("✅ User seeded:", user);
  } catch (error) {
    console.error("❌ Error seeding user:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
