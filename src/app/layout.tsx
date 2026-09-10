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
  title: "Grizzly Media Pro | Software Development, AI & Digital Strategy",
  description:
    "Partener de dezvoltare software, AI, automatizări și strategie digitală. Construim aplicații web și mobile, platforme și soluții adaptate business-ului tău.",
  keywords: [
    "dezvoltare software România",
    "software development Craiova",
    "aplicații web și mobile",
    "AI automation România",
    "automatizare procese business",
    "strategie digitală",
    "Grizzly Media Pro",
    "platforme digitale custom",
    "magazine online e-commerce",
    "integrări sisteme",
    "marketing digital",
    "branding identitate vizuală",
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
    title: "Grizzly Media Pro | Software, AI & Digital Strategy",
    description:
      "Software, AI, automatizări și strategie digitală pentru business-uri care vor rezultate reale.",
    siteName: "Grizzly Media Pro",
    images: [
      {
        url: "/grizzlylogo.png",
        width: 1200,
        height: 630,
        alt: "Grizzly Media Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grizzly Media Pro | Software, AI & Digital Strategy",
    description:
      "Software, AI, automatizări și strategie digitală pentru business-uri care vor rezultate reale.",
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
