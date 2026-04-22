import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Design | Grizzly Media Pro",
  description:
    "Servicii profesionale de branding și design grafic. Creăm identități vizuale puternice, logo-uri memorabile și materiale de marketing care fac diferența.",
  keywords: [
    "design logo memorabil unic",
    "identitate vizuală completă",
    "rebranding companie modernizare",
    "design grafic profesional",
    "materiale marketing print",
    "brand guidelines manual",
    "design packaging produse",
    "grafică publicitară creativă",
    "design corporate business",
    "vizitke afaceri design",
    "brosuri flyer design",
    "prezentări PowerPoint design",
    "Grizzly Media Pro branding",
    "consultanță brand strategie",
    "design pentru startup",
    "identitate brand digitală",
    "logo design vectorial",
    "brand positioning marketing",
    "design UX UI atrăgător",
  ],
  openGraph: {
    title: "Branding & Design | Grizzly Media Pro",
    description:
      "Servicii profesionale de branding și design grafic pentru identități vizuale puternice",
    url: "https://grizzlymediapro.ro/branding",
    type: "website",
  },
  alternates: {
    canonical: "https://grizzlymediapro.ro/branding",
  },
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
