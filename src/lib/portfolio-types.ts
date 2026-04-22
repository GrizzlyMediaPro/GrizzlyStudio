export type PortfolioCategory =
  | "PAGINI_PREZENTARE"
  | "MAGAZINE_ONLINE"
  | "APLICATII"
  | "SOCIAL_MEDIA";

export type PortfolioItemInput = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  url?: string | null;
  category: PortfolioCategory;
};

export const PORTFOLIO_CATEGORY_ORDER: PortfolioCategory[] = [
  "PAGINI_PREZENTARE",
  "MAGAZINE_ONLINE",
  "APLICATII",
  "SOCIAL_MEDIA",
];
