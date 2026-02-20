import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const calculateDealProbability = async (prospect: any) => {
  const config = await prisma.scoringConfig.findFirst();

  const GrowthIntentScore =
    (prospect.fundingAmount || 0) +
    (prospect.hiringSignals || 0) +
    (prospect.adActivityLevel || 0);

  const AuthorityGapScore = prospect.authorityGap || 0;
  const IndustryAffinityScore = 70;
  const WebsiteWeaknessScore = prospect.conversionWeakness || 0;

  const score =
    GrowthIntentScore * config!.growthIntentWeight +
    AuthorityGapScore * config!.authorityGapWeight +
    IndustryAffinityScore * config!.industryAffinityWeight +
    WebsiteWeaknessScore * config!.websiteWeaknessWeight;

  return score;
};
