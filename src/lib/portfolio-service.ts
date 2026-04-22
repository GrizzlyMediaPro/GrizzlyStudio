import { PortfolioCategory, PortfolioItem } from "@prisma/client";
import { prisma } from "./prisma";
import { DEFAULT_PORTFOLIO_ITEMS } from "./portfolio-defaults";

export async function ensurePortfolioSeeded() {
  const count = await prisma.portfolioItem.count();

  if (count > 0) {
    return;
  }

  await prisma.portfolioItem.createMany({
    data: DEFAULT_PORTFOLIO_ITEMS.map((item, index) => ({
      ...item,
      category: item.category as PortfolioCategory,
      position: index,
      url: item.url ?? null,
    })),
  });
}

export async function getPortfolioItems() {
  await ensurePortfolioSeeded();

  return prisma.portfolioItem.findMany({
    orderBy: [{ category: "asc" }, { position: "asc" }],
  });
}

export function normalizePositions(items: PortfolioItem[]) {
  return items.map((item, index) => ({
    id: item.id,
    position: index,
  }));
}
