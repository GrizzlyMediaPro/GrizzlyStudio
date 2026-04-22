import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "@uploadthing/react/styles.css";
import "./globals.css";
import ClientProviders from "./ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grizzly Media Pro | Dezvoltare Web & Marketing Digital",
  description:
    "Agenție de web development, social media și branding din București. Transformăm viziunea ta în realitate digitală cu site-uri moderne, strategii de marketing și identitate vizuală profesională.",
  keywords: [
    "agenție web development București",
    "dezvoltare web profesională România",
    "social media marketing București",
    "branding si design grafic",
    "agenție digitală București",
    "creare site-uri web moderne",
    "design responsive mobile",
    "marketing online rezultate",
    "Grizzly Media Pro",
    "aplicații web personalizate",
    "magazine online e-commerce",
    "SEO optimizare site",
    "strategie marketing digital",
    "identitate vizuală logo design",
    "Instagram Facebook marketing",
    "dezvoltare aplicații mobile",
    "consultanță digitală business",
    "optimizare performanță site",
    "servicii web complete",
    "agenție marketing București",
    "site",
    "site ieftin",
    "site-uri ieftine",
  ],
  authors: [{ name: "Grizzly Media Pro" }],
  creator: "Grizzly Media Pro",
  publisher: "Grizzly Media Pro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://grizzlymediapro.ro",
    title: "Grizzly Media Pro - Web Development, Social Media & Branding",
    description:
      "Transformăm viziunea ta în realitate digitală cu site-uri moderne, strategii de marketing și identitate vizuală profesională.",
    siteName: "Grizzly Media Pro",
    images: [
      {
        url: "/grizzlylogo.png",
        width: 1200,
        height: 630,
        alt: "Grizzly Media Pro - Agenție Digitală",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grizzly Media Pro - Web Development, Social Media & Branding",
    description:
      "Transformăm viziunea ta în realitate digitală cu site-uri moderne, strategii de marketing și identitate vizuală profesională.",
    images: ["/grizzlylogo.png"],
  },
  alternates: {
    canonical: "https://grizzlymediapro.ro",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ClientProviders>{children}</ClientProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
