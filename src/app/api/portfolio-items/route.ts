import { PortfolioCategory } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/admin-access";
import { normalizeSocialEmbedUrl } from "@/lib/social-embed";
import { getPortfolioItems } from "@/lib/portfolio-service";
import { prisma } from "@/lib/prisma";

type CreateBody = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  url?: string | null;
  embedUrl?: string | null;
  category?: PortfolioCategory;
};

export async function GET() {
  const items = await getPortfolioItems();
  return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
  const { isAdmin } = await requireAdminUser();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as CreateBody;
  const hasImage = Boolean(body.image?.trim());
  const hasEmbed = Boolean(body.embedUrl?.trim());
  const requiresImage = body.category !== "SOCIAL_MEDIA";

  if (
    !body.title ||
    !body.description ||
    !body.category ||
    (requiresImage ? !hasImage : !hasImage && !hasEmbed) ||
    !Object.values(PortfolioCategory).includes(body.category)
  ) {
    return NextResponse.json({ error: "Date invalide." }, { status: 400 });
  }

  const last = await prisma.portfolioItem.findFirst({
    where: { category: body.category },
    orderBy: { position: "desc" },
    select: { position: true },
  });

  const created = await prisma.portfolioItem.create({
    data: {
      title: body.title.trim(),
      subtitle: body.subtitle?.trim() ?? "",
      description: body.description.trim(),
      image: body.image?.trim() ?? "",
      url: body.url?.trim() ? body.url.trim() : null,
      embedUrl: normalizeSocialEmbedUrl(body.embedUrl),
      category: body.category,
      position: (last?.position ?? -1) + 1,
    },
  });

  return NextResponse.json(created, { status: 201 });
}
