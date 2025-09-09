import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | Grizzly Media Pro",
  description:
    "Politica de confidențialitate Grizzly Media Pro. Aflați cum colectăm, utilizăm și protejăm datele dumneavoastră personale în conformitate cu GDPR.",
  keywords: [
    "politica confidențialitate GDPR",
    "protecția datelor personale",
    "privacy policy România",
    "securitate date clienți",
    "conformitate GDPR business",
    "Grizzly Media Pro confidențialitate",
    "drepturi utilizatori GDPR",
    "procesare date legală",
    "cookie-uri și confidențialitate",
    "transparență colectare date",
  ],
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://grizzlymediapro.ro/politica-confidentialitate",
  },
};

export default function PoliticaConfidentialitateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
