import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTodayRecommendations = async (_: any, res: any) => {
  const prospects = await prisma.prospect.findMany({
    orderBy: { dealProbabilityScore: "desc" },
    take: 10
  });

  res.json(prospects);
};
