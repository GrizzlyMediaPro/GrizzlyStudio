import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dezvoltare Web | Grizzly Media Pro",
  description:
    "Servicii profesionale de dezvoltare web și aplicații mobile. Creăm site-uri moderne, responsive și optimizate pentru performanță cu React, Next.js și tehnologii de ultimă generație.",
  keywords: [
    "dezvoltare web profesională București",
    "creare site-uri web moderne",
    "aplicații mobile React Native",
    "programare React Next.js",
    "dezvoltare e-commerce magazine online",
    "site responsive design",
    "optimizare SEO tehnică",
    "dezvoltare aplicații personalizate",
    "integrare API dezvoltare",
    "TypeScript JavaScript dezvoltare",
    "Node.js backend dezvoltare",
    "MongoDB PostgreSQL baze date",
    "AWS cloud hosting",
    "Grizzly Media Pro web development",
    "programatori web București",
    "servicii dezvoltare software",
    "consultanță tehnică IT",
    "migrare site-uri moderne",
    "întreținere site-uri web",
    "dezvoltare MVP startup",
  ],
  openGraph: {
    title: "Dezvoltare Web | Grizzly Media Pro",
    description:
      "Servicii profesionale de dezvoltare web și aplicații mobile cu tehnologii moderne",
    url: "https://grizzlymediapro.ro/dezvoltare-web",
    type: "website",
  },
  alternates: {
    canonical: "https://grizzlymediapro.ro/dezvoltare-web",
  },
};

export default function DezvoltareWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
