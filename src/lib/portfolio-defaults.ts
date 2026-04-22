import { PortfolioCategory } from "./portfolio-types";

type DefaultPortfolioItem = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  category: PortfolioCategory;
  url?: string;
  embedUrl?: string;
};

export const DEFAULT_PORTFOLIO_ITEMS: DefaultPortfolioItem[] = [
  {
    title: "Vera Papara Psiholog",
    subtitle: "Site pentru psiholog",
    image: "/verasite.png",
    description: "Site profesional pentru cabinetul de psihologie.",
    category: "PAGINI_PREZENTARE",
    url: "https://www.verapapara.ro/",
  },
  {
    title: "CMD External Group",
    subtitle: "Web design + Official Event Presentation",
    image: "/cmdsite.png",
    description: "Servicii profesionale de web design si dezvoltare.",
    category: "PAGINI_PREZENTARE",
    url: "https://www.cmdexternalgroup.ro/",
  },
  {
    title: "CursPlus",
    subtitle: "Landing page",
    image: "/cursplussite.png",
    description: "Platforma educationala si sistem de management al cursurilor.",
    category: "PAGINI_PREZENTARE",
    url: "https://www.cursplus.ro/",
  },
  {
    title: "HRZ Media",
    subtitle: "Web design & branding",
    image: "/hrzmediasite.png",
    description: "Agentie creativa de media si solutii de branding.",
    category: "PAGINI_PREZENTARE",
    url: "https://www.hrz-media.com/",
  },
  {
    title: "AEF Service Auto",
    subtitle: "Intretinere si mentenanta",
    image: "/aef.png",
    description: "Servicii de mentenanta si intretinere pentru autoturisme.",
    category: "PAGINI_PREZENTARE",
    url: "https://aef-one.vercel.app/",
  },
  {
    title: "Competizione Detailing",
    subtitle: "PPF, Detailing, Protectie",
    image: "/comp.png",
    description: "Servicii profesionale PPF, detailing si protectie caroserie.",
    category: "PAGINI_PREZENTARE",
    url: "https://www.competizione.ro/",
  },
  {
    title: "Abraham & Asociatii",
    subtitle: "Cabinet de avocatura",
    image: "/abr.png",
    description: "Prezentare cabinet de avocatura si domenii de expertiza.",
    category: "PAGINI_PREZENTARE",
    url: "https://abraham-asociatii.ro/",
  },
  {
    title: "Agrodrona",
    subtitle: "Drone agricole",
    image: "/agro.png",
    description: "Tehnologie de varf pentru o agricultura de succes.",
    category: "PAGINI_PREZENTARE",
    url: "https://agrodrona.ro/",
  },
  {
    title: "ScreenShield",
    subtitle: "Magazin online PPF",
    image: "/screen.png",
    description: "Protectie premium PPF pentru sistemele infotainment auto.",
    category: "MAGAZINE_ONLINE",
    url: "https://screenshield.ro/",
  },
  {
    title: "Vocea Campusului",
    subtitle: "Platforma comunitara",
    image: "/voc.png",
    description: "Aplicatie web cu forum si continut pentru comunitate.",
    category: "APLICATII",
    url: "https://www.voceacampusului.ro/",
  },
  {
    title: "Rezultat Social Media",
    subtitle: "",
    image: "/rez1.png",
    description: "Esantion de rezultate din campanii: reach, engagement si conversii.",
    category: "SOCIAL_MEDIA",
  },
  {
    title: "Rezultat Social Media",
    subtitle: "",
    image: "/rez2.png",
    description: "Esantion de rezultate din campanii: reach, engagement si conversii.",
    category: "SOCIAL_MEDIA",
  },
  {
    title: "Rezultat Social Media",
    subtitle: "",
    image: "/rez3.png",
    description: "Esantion de rezultate din campanii: reach, engagement si conversii.",
    category: "SOCIAL_MEDIA",
  },
  {
    title: "Rezultat Social Media",
    subtitle: "",
    image: "/rez4.png",
    description: "Esantion de rezultate din campanii: reach, engagement si conversii.",
    category: "SOCIAL_MEDIA",
  },
  {
    title: "Rezultat Social Media",
    subtitle: "",
    image: "/rez5.png",
    description: "Esantion de rezultate din campanii: reach, engagement si conversii.",
    category: "SOCIAL_MEDIA",
  },
  {
    title: "Rezultat Social Media",
    subtitle: "",
    image: "/rez6.png",
    description: "Esantion de rezultate din campanii: reach, engagement si conversii.",
    category: "SOCIAL_MEDIA",
  },
];
