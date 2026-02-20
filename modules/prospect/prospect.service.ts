import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProspect = async (data: any) => {
  return prisma.prospect.create({ data });
};
