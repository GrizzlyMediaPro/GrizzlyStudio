import { Metadata } from "next";
import ServicePillarPage from "../components/ServicePillarPage";

export const metadata: Metadata = {
  title: "AI & Automation | Grizzly Media Pro",
  description:
    "Integrăm soluții AI, automatizăm procese repetitive și conectăm sistemele pe care business-ul tău le folosește deja: CRM, ERP, e-commerce, tool-uri interne.",
  keywords: [
    "AI automation",
    "automatizări business",
    "integrări sisteme CRM ERP",
    "asistenți AI",
    "procesare automată documente",
    "n8n Make Zapier",
    "Grizzly Media Pro",
  ],
  openGraph: {
    title: "AI & Automation | Grizzly Media Pro",
    description:
      "AI, automatizări și integrări pentru procese de business mai eficiente.",
    url: "https://grizzlymediapro.ro/ai-automation",
    type: "website",
  },
  alternates: {
    canonical: "https://grizzlymediapro.ro/ai-automation",
  },
};

export default function AiAutomationPage() {
  return <ServicePillarPage pillar="ai" />;
}
