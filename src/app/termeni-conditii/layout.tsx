import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții | Grizzly Media Pro",
  description:
    "Termenii și condițiile de utilizare pentru serviciile Grizzly Media Pro. Citiți termenii noștri de colaborare și utilizare a serviciilor.",
  keywords: [
    "termeni și condiții servicii",
    "contract colaborare agenție",
    "condiții utilizare site",
    "Grizzly Media Pro termeni",
    "responsabilități client agenție",
    "drepturile și obligațiile părților",
    "politica de returnare",
    "termeni livrare proiecte",
    "modificări contract servicii",
    "jurisdicție conflicte legale",
  ],
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://grizzlymediapro.com/termeni-conditii",
  },
};

export default function TermeniConditiiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
