import { PortfolioCategory } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/admin-access";
import { prisma } from "@/lib/prisma";

type ReorderBody = {
  category?: string;
  orderedIds?: string[];
};

export async function POST(request: NextRequest) {
  const { isAdmin } = await requireAdminUser();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as ReorderBody;
  if (
    !body.category ||
    !Object.values(PortfolioCategory).includes(body.category as PortfolioCategory) ||
    !Array.isArray(body.orderedIds) ||
    body.orderedIds.length === 0
  ) {
    return NextResponse.json({ error: "Date invalide." }, { status: 400 });
  }

  const existing = await prisma.portfolioItem.findMany({
    where: { category: body.category as PortfolioCategory },
    select: { id: true },
  });

  const existingIds = new Set(existing.map((item) => item.id));
  const sentIds = new Set(body.orderedIds);

  if (existingIds.size !== sentIds.size || body.orderedIds.some((id) => !existingIds.has(id))) {
    return NextResponse.json({ error: "Lista de ordine nu corespunde categoriei." }, { status: 400 });
  }

  await prisma.$transaction(
    body.orderedIds.map((id, index) =>
      prisma.portfolioItem.update({
        where: { id },
        data: { position: index },
      })
    )
  );

  return NextResponse.json({ ok: true });
}
