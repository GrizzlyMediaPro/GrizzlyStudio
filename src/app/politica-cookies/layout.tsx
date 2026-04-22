import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookies | Grizzly Media Pro",
  description:
    "Politica de cookies Grizzly Media Pro. Informații despre tipurile de cookies pe care le folosim și cum puteți gestiona preferințele dumneavoastră.",
  keywords: [
    "politica cookies GDPR",
    "managementul cookie-urilor",
    "cookies necesare vs opționale",
    "preferințe privacy cookies",
    "Grizzly Media Pro cookies",
    "acceptare cookies site",
    "tipuri cookies utilizate",
    "cookies analitică Google",
    "cookies marketing personalizare",
    "dezactivare cookies browser",
  ],
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://grizzlymediapro.ro/politica-cookies",
  },
};

export default function PoliticaCookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
