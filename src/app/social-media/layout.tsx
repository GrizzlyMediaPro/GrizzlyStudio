import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing | Grizzly Media Pro",
  description:
    "Servicii complete de social media marketing și management. Creștem prezența ta online cu strategii personalizate pe Instagram, Facebook, TikTok și LinkedIn.",
  keywords: [
    "social media marketing București",
    "agenție marketing digital România",
    "management Instagram profesional",
    "creare conținut Facebook",
    "TikTok marketing viral",
    "LinkedIn B2B marketing",
    "strategie social media ROI",
    "campanii publicitare Facebook Ads",
    "Instagram growth organic",
    "influencer marketing colaborări",
    "content creator servicii",
    "analitică social media rapoarte",
    "community management",
    "Grizzly Media Pro social media",
    "fotografii produse marketing",
    "video marketing pentru business",
    "branding social media consistent",
    "hashtag research strategie",
    "social media audit complet",
    "creștere followeri autentici",
  ],
  openGraph: {
    title: "Social Media Marketing | Grizzly Media Pro",
    description:
      "Servicii complete de social media marketing și management pentru creșterea prezenței online",
    url: "https://grizzlymediapro.com/social-media",
    type: "website",
  },
  alternates: {
    canonical: "https://grizzlymediapro.com/social-media",
  },
};

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
