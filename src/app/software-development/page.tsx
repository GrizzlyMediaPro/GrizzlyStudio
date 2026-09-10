import { Metadata } from "next";
import ServicePillarPage from "../components/ServicePillarPage";

export const metadata: Metadata = {
  title: "Software Development | Grizzly Media Pro",
  description:
    "Construim aplicații web și mobile, platforme digitale și soluții software custom, adaptate proceselor și obiectivelor business-ului tău. Fără CMS-uri, fără template-uri.",
  keywords: [
    "software development",
    "dezvoltare software",
    "aplicații web custom",
    "aplicații mobile React Native",
    "platforme digitale",
    "dashboard-uri și sisteme interne",
    "dezvoltare e-commerce",
    "Grizzly Media Pro",
  ],
  openGraph: {
    title: "Software Development | Grizzly Media Pro",
    description:
      "Aplicații web și mobile, platforme digitale și soluții software custom, scrise de la zero.",
    url: "https://grizzlymediapro.ro/software-development",
    type: "website",
  },
  alternates: {
    canonical: "https://grizzlymediapro.ro/software-development",
  },
};

export default function SoftwareDevelopmentPage() {
  return <ServicePillarPage pillar="software" />;
}
