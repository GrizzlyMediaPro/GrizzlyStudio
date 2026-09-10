import { Metadata } from "next";
import ServicePillarPage from "../components/ServicePillarPage";

export const metadata: Metadata = {
  title: "Digital Strategy | Grizzly Media Pro",
  description:
    "Strategie, marketing digital și branding pornind de la obiectivele de business: poziționare, social media, ads, conținut și comunicare coerentă.",
  keywords: [
    "digital strategy",
    "strategie digitală",
    "marketing digital",
    "social media management",
    "Meta Ads Google Ads",
    "branding identitate vizuală",
    "Grizzly Media Pro",
  ],
  openGraph: {
    title: "Digital Strategy | Grizzly Media Pro",
    description:
      "Strategii de creștere, promovare și comunicare: business, marketing și growth.",
    url: "https://grizzlymediapro.ro/digital-strategy",
    type: "website",
  },
  alternates: {
    canonical: "https://grizzlymediapro.ro/digital-strategy",
  },
};

export default function DigitalStrategyPage() {
  return <ServicePillarPage pillar="strategy" />;
}
