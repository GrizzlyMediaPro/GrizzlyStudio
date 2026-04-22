import { PortfolioCategory } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/admin-access";
import { prisma } from "@/lib/prisma";
import { normalizeSocialEmbedUrl } from "@/lib/social-embed";

type UpdateBody = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  url?: string | null;
  embedUrl?: string | null;
  category?: PortfolioCategory;
};

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { isAdmin } = await requireAdminUser();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const existing = await prisma.portfolioItem.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Element inexistent." }, { status: 404 });
  }

  const body = (await request.json()) as UpdateBody;
  const nextCategory = body.category ?? existing.category;
  const changingCategory =
    nextCategory &&
    Object.values(PortfolioCategory).includes(nextCategory) &&
    nextCategory !== existing.category;

  let position = existing.position;
  if (changingCategory) {
    const lastInNewCategory = await prisma.portfolioItem.findFirst({
      where: { category: nextCategory },
      orderBy: { position: "desc" },
      select: { position: true },
    });
    position = (lastInNewCategory?.position ?? -1) + 1;
  }

  const [updated] = await prisma.$transaction(async (tx) => {
    const nextItem = await tx.portfolioItem.update({
      where: { id },
      data: {
        title: body.title?.trim(),
        subtitle: body.subtitle?.trim(),
        description: body.description?.trim(),
        image: body.image?.trim(),
        url: body.url === undefined ? undefined : body.url?.trim() ? body.url.trim() : null,
        embedUrl:
          body.embedUrl === undefined
            ? undefined
            : normalizeSocialEmbedUrl(body.embedUrl),
        category: nextCategory,
        position,
      },
    });

    if (changingCategory) {
      await tx.portfolioItem.updateMany({
        where: {
          category: existing.category,
          position: { gt: existing.position },
        },
        data: {
          position: { decrement: 1 },
        },
      });
    }

    return [nextItem];
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { isAdmin } = await requireAdminUser();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const existing = await prisma.portfolioItem.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Element inexistent." }, { status: 404 });
  }

  await prisma.$transaction([
    prisma.portfolioItem.delete({ where: { id } }),
    prisma.portfolioItem.updateMany({
      where: {
        category: existing.category,
        position: { gt: existing.position },
      },
      data: {
        position: { decrement: 1 },
      },
    }),
  ]);

  return NextResponse.json({ ok: true });
}
