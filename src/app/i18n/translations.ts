export type LanguageCode = "ro" | "en";

export type TranslationDictionary = Record<string, { ro: string; en: string }>; // values to be filled by user

// IDs centralizate pentru toate textele. Completează valorile EN/RO după preferință.
export const translations: TranslationDictionary = {
  // Navbar & Hero
  nav_services: { ro: "Servicii", en: "Services" },
  nav_portfolio: { ro: "Proiecte", en: "Projects" },
  nav_about: { ro: "Despre", en: "About" },
  nav_contact: { ro: "Contact", en: "Contact" },
  cta_schedule: { ro: "Programează o întâlnire!", en: "Schedule a meeting!" },
  hero_title: {
    ro: "Dezvoltăm software care rezolvă probleme reale de business.",
    en: "We develop software that solves real business problems.",
  },
  // Hero segmented (pentru părți evidențiate)
  hero_t1: { ro: "Dezvoltăm ", en: "We develop " },
  hero_h1: { ro: "software", en: "software" },
  hero_t2: { ro: " care rezolvă ", en: " that solves " },
  hero_h2: { ro: "probleme reale de business", en: "real business problems" },
  hero_t3: { ro: ".", en: "." },
  hero_subheading: {
    ro: "De la platforme web și aplicații mobile la AI, automatizări și strategie digitală.",
    en: "From web platforms and mobile apps to AI, automation, and digital strategy.",
  },

  // Hero description
  hero_desc_t1: { ro: "Grizzly Media Pro este un partener de dezvoltare software și strategie digitală. Construim soluții ", en: "Grizzly Media Pro is a software development and digital strategy partner. We build " },
  hero_desc_h1: { ro: "web și mobile", en: "web and mobile" },
  hero_desc_t2: { ro: ", integrăm ", en: " solutions, integrate " },
  hero_desc_h2: { ro: "AI", en: "AI" },
  hero_desc_t3: { ro: " și ", en: " and " },
  hero_desc_h3: { ro: "automatizăm procese", en: "automate processes" },
  hero_desc_t4: { ro: ", pornind de la nevoile reale ale fiecărui business.", en: ", starting from each business's real needs." },
  
  prefs_heading: { ro: "Mai întâi, alege-ți preferințele", en: "First, choose your preferences" },

  // Stakes section
  stakes_title: {
    ro: "Tehnologia ar trebui să simplifice business-ul, nu să îl complice.",
    en: "Technology should simplify business, not complicate it.",
  },
  // Stakes segmented (pentru evidențiere)
  stakes_h1: { ro: "Tehnologia", en: "Technology" },
  stakes_t1: { ro: " ar trebui să ", en: " should " },
  stakes_h2: { ro: "simplifice", en: "simplify" },
  stakes_t2: { ro: " business-ul, nu să îl ", en: " business, not " },
  stakes_h3: { ro: "complice.", en: "complicate it." },
  stake_1_title: { ro: "1. Procese care consumă timp", en: "1. Processes that waste time" },
  stake_1_desc: {
    ro: "Task-urile repetitive și procesele manuale încetinesc echipa și consumă resurse care pot fi folosite mai eficient.",
    en: "Repetitive tasks and manual processes slow the team down and consume resources that could be used more effectively.",
  },
  stake_1_highlight1: { ro: "încetinesc echipa", en: "slow the team down" },
  stake_1_highlight2: { ro: "consumă resurse", en: "consume resources" },
  stake_1_text1: { ro: "Task-urile repetitive și procesele manuale ", en: "Repetitive tasks and manual processes " },
  stake_1_text2: { ro: " și consumă resurse care pot fi folosite mai eficient.", en: " and consume resources that could be used more effectively." },
  stake_2_title: { ro: "2. Sisteme care nu comunică", en: "2. Systems that don't talk to each other" },
  stake_2_desc: {
    ro: "Datele și operațiunile sunt împărțite între aplicații, platforme și instrumente care nu funcționează împreună.",
    en: "Data and operations are split across apps, platforms, and tools that don't work together.",
  },
  stake_2_highlight1: { ro: "împărțite", en: "split" },
  stake_2_highlight2: { ro: "nu funcționează împreună", en: "don't work together" },
  stake_2_text1: { ro: "Datele și operațiunile sunt ", en: "Data and operations are " },
  stake_2_text2: { ro: " între aplicații, platforme și instrumente care ", en: " across apps, platforms, and tools that " },
  stake_2_text3: { ro: ".", en: "." },
  stake_3_title: { ro: "3. Idei care au nevoie de tehnologie", en: "3. Ideas that need technology" },
  stake_3_desc: {
    ro: "Ai o idee pentru o platformă, o aplicație sau un produs digital, dar ai nevoie de soluția tehnică potrivită pentru a o transforma în realitate.",
    en: "You have an idea for a platform, an app, or a digital product, but you need the right technical solution to turn it into reality.",
  },
  stake_3_highlight1: { ro: "soluția tehnică potrivită", en: "the right technical solution" },
  stake_3_highlight2: { ro: "transforma în realitate", en: "turn it into reality" },
  stake_3_text1: { ro: "Ai o idee pentru o platformă, o aplicație sau un produs digital, dar ai nevoie de ", en: "You have an idea for a platform, an app, or a digital product, but you need " },
  stake_3_text2: { ro: " pentru a o ", en: " to " },
  stake_3_text3: { ro: ".", en: "." },

  // Beneficii section heading
  benefits_heading: {
    ro: "Pornim de la problemă, nu de la tehnologie.",
    en: "We start from the problem, not from the technology.",
  },
  // Benefits segmented
  benefits_t1: { ro: "Despre ", en: "About " },
  benefits_h1: { ro: "noi", en: "us" },
  benefits_t2: { ro: "", en: "" },
  benefits_h2: { ro: "", en: "" },
  benefits_t3: { ro: "", en: "" },
  benefits_h3: { ro: "", en: "" },

  // About intro
  about_headline_t1: { ro: "Pornim de la ", en: "We start from the " },
  about_headline_h1: { ro: "problemă", en: "problem" },
  about_headline_t2: { ro: ", nu de la ", en: ", not from the " },
  about_headline_h2: { ro: "tehnologie", en: "technology" },
  about_headline_t3: { ro: ".", en: "." },
  about_body: {
    ro: "Înțelegem cum funcționează business-ul tău, identificăm unde tehnologia poate aduce valoare și construim soluția potrivită: software web și mobile, AI, automatizări și integrări.",
    en: "We understand how your business works, identify where technology can add value, and build the right solution: web and mobile software, AI, automation, and integrations.",
  },

  benefit_1_title: { ro: "Configurăm soluții personalizate pentru afacerea ta", en: "We customize solutions for your business" },
  benefit_1_desc: {
    ro: "Fiecare business are particularități proprii, iar soluțiile noastre sunt create să ți se potrivească.",
    en: "Every business has its own specifics, and our solutions are built to fit yours.",
  },
  benefit_2_title: { ro: "Site-uri și aplicații web realizate de la 0", en: "Website and app development from scratch" },
  benefit_2_desc: {
    ro: "Dezvoltate pe măsura brandului tău, cu design modern și funcționalitate clară.",
    en: "Built around your brand, with modern design and clear functionality.",
  },
  benefit_3_title: { ro: "Salvezi timp prețios", en: "Save valuable time" },
  benefit_3_desc: {
    ro: "Ne ocupăm de tot ce ține de imaginea ta în online, astfel încât tu să te concentrezi pe creșterea afacerii.",
    en: "We handle everything related to your online presence so you can focus on growing your business.",
  },
  benefit_4_title: { ro: "Experiență în 10+ domenii de activitate", en: "Experience in 10+ industries" },
  benefit_4_desc: {
    ro: "Am lucrat cu business-uri din multiple industrii și știm ce funcționează pentru fiecare.",
    en: "We've worked with businesses across multiple industries and know what works for each.",
  },
  benefit_5_title: { ro: "Strategii de marketing optimizate", en: "Optimized marketing strategies" },
  benefit_5_desc: {
    ro: "Servicii premium, adaptate la bugetul tău, astfel încât să obții rezultate fără costuri exagerate.",
    en: "Premium services tailored to your budget, so you get results without excessive costs.",
  },
  benefit_6_title: { ro: "Prețuri accesibile", en: "Affordable prices" },
  benefit_6_desc: {
    ro: "Fără promisiuni deșarte. Primești rapoarte clare și o colaborare bazată pe încredere.",
    en: "No false promises. You get clear reports and a partnership based on trust.",
  },

  // Beneficii - carduri cu statistici
  benefit_projects_label: { ro: "Proiecte finalizate", en: "Completed projects" },
  benefit_projects_count: { ro: "50+", en: "50+" },
  benefit_projects_view: { ro: "Vezi", en: "View" },

  benefit_experience_label: { ro: "Domenii de activitate", en: "Industries" },
  benefit_experience_years: { ro: "10+", en: "10+" },

  benefit_clients_label: { ro: "Clienți", en: "Clients" },
  benefit_clients_count: { ro: "25+", en: "25+" },

  benefit_capabilities_label: { ro: "Ce construim", en: "What we build" },
  benefit_capabilities_value: { ro: "Web · Mobile · AI · Automation", en: "Web · Mobile · AI · Automation" },

  benefit_revenue_label: { ro: "Generați de platformele noastre", en: "Generated by our platforms" },
  benefit_revenue_value: { ro: "100.000 €+", en: "€100,000+" },

  // Păstrat pentru pagina Software Development (diferențiator tehnic secundar)
  benefit_no_cms_text: {
    ro: "Nu folosim CMS-uri, nu folosim template-uri, facem doar site-uri scrise în întregime de noi în cod ca designul tău să fie unic și personalizat",
    en: "We don't use CMS, we don't use templates, we only make websites written entirely by us in code so your design is unique and personalized"
  },
  benefit_no_cms_highlight1: { ro: "Nu", en: "We don't" },
  benefit_no_cms_highlight2: { ro: "nu", en: "don't" },
  benefit_no_cms_highlight3: { ro: "unic", en: "unique" },
  benefit_no_cms_text1: { ro: " folosim CMS-uri, ", en: " use CMS, " },
  benefit_no_cms_text2: { ro: " folosim template-uri, facem doar site-uri scrise în întregime de noi în cod ca designul tău să fie ", en: " use templates, we only make websites written entirely by us in code so your design is " },
  benefit_no_cms_text3: { ro: " și personalizat", en: " and personalized" },

  benefit_social_label: { ro: "Rezultate social media", en: "Social media results" },
  benefit_social_views: { ro: "10M+ views", en: "10M+ views" },
  benefit_social_followers: { ro: "10k+ urmăritori", en: "10k+ followers" },
  benefit_social_desc: { ro: "aduse clienților noștri", en: "brought to our clients" },

  benefit_contact_button: { ro: "Contactează-ne", en: "Contact us" },

  // Cum lucrăm — proces în 3 pași
  process_heading: { ro: "De la problemă la soluție.", en: "From problem to solution." },
  process_heading_t1: { ro: "De la problemă la ", en: "From problem to " },
  process_heading_h1: { ro: "soluție", en: "solution" },
  process_heading_t2: { ro: ".", en: "." },
  process_desc: {
    ro: "Nu pornim de la tehnologie. Începem prin a înțelege business-ul, obiectivele și procesele tale, apoi construim soluția potrivită.",
    en: "We don't start from technology. We start by understanding your business, goals, and processes, then build the right solution.",
  },
  process_1_title: { ro: "Înțelegem", en: "Understand" },
  process_1_desc: {
    ro: "Discutăm despre business, obiective, procese și problema pe care vrei să o rezolvi.",
    en: "We talk about your business, goals, processes, and the problem you want to solve.",
  },
  process_2_title: { ro: "Definim", en: "Define" },
  process_2_desc: {
    ro: "Stabilim soluția, funcționalitățile și direcția tehnică potrivită înainte să începem dezvoltarea.",
    en: "We set the solution, the features, and the right technical direction before development begins.",
  },
  process_3_title: { ro: "Construim", en: "Build" },
  process_3_desc: {
    ro: "Dezvoltăm, testăm și lansăm soluția, apoi continuăm să o îmbunătățim atunci când este nevoie.",
    en: "We develop, test, and launch the solution, then keep improving it whenever needed.",
  },

  // Mesajul Grizzly
  explainer_heading: {
    ro: "Nu vindem tehnologie de dragul tehnologiei.",
    en: "We don't sell technology for its own sake.",
  },
  explainer_p1: {
    ro: "Uneori soluția este o aplicație. Alteori este o automatizare, o integrare, AI sau pur și simplu o strategie digitală mai bună.",
    en: "Sometimes the solution is an app. Other times it's an automation, an integration, AI, or simply a better digital strategy.",
  },
  explainer_p2: {
    ro: "Rolul nostru este să înțelegem problema și să alegem soluția care are sens pentru business-ul tău.",
    en: "Our role is to understand the problem and choose the solution that makes sense for your business.",
  },
  explainer_cap_1: { ro: "Web & Mobile Development", en: "Web & Mobile Development" },
  explainer_cap_2: { ro: "AI & Automation", en: "AI & Automation" },
  explainer_cap_3: { ro: "Integrations", en: "Integrations" },
  explainer_cap_4: { ro: "Digital Strategy", en: "Digital Strategy" },
  explainer_cta_primary: { ro: "Discută cu noi", en: "Talk to us" },
  explainer_cta_secondary: { ro: "Vezi proiectele", en: "See our projects" },

  // Services/Portfolio/Contact headings
  services_heading: { ro: "Serviciile noastre", en: "Our services" },
  portfolio_heading: { ro: "Proiectele noastre", en: "Our projects" },
  portfolio_t1: { ro: "Proiectele ", en: "Our " },
  portfolio_h1: { ro: "noastre", en: "projects" },
  contact_heading: { ro: "Contactează-ne", en: "Contact us" },
  contact_t1: { ro: "Contactează-", en: "Contact " },
  contact_h1: { ro: "ne", en: "us" },
  social_follow: { ro: "Ne poți urmări și pe:", en: "You can follow us on:" },
  // Services segmented
  services_t1: { ro: "Serviciile ", en: "Our " },
  services_h1: { ro: "noastre", en: "services" },

  // Service cards — 3 piloni
  svc_software_title: { ro: "SOFTWARE DEVELOPMENT", en: "SOFTWARE DEVELOPMENT" },
  svc_software_sub: { ro: "WEB & MOBILE", en: "WEB & MOBILE" },
  svc_software_desc: {
    ro: "Construim aplicații web și mobile, platforme digitale și soluții software custom, adaptate proceselor și obiectivelor business-ului tău.",
    en: "We build web and mobile apps, digital platforms, and custom software solutions tailored to your business processes and goals.",
  },
  svc_ai_title: { ro: "AI & AUTOMATION", en: "AI & AUTOMATION" },
  svc_ai_sub: { ro: "AI · AUTOMATION · INTEGRATIONS", en: "AI · AUTOMATION · INTEGRATIONS" },
  svc_ai_desc: {
    ro: "Integrăm soluții AI, automatizăm procese repetitive și conectăm sistemele pe care business-ul tău le folosește deja.",
    en: "We integrate AI solutions, automate repetitive processes, and connect the systems your business already uses.",
  },
  svc_strategy_title: { ro: "DIGITAL STRATEGY", en: "DIGITAL STRATEGY" },
  svc_strategy_sub: { ro: "BUSINESS · MARKETING · GROWTH", en: "BUSINESS · MARKETING · GROWTH" },
  svc_strategy_desc: {
    ro: "Combinăm perspectiva de business cu marketingul digital pentru a construi strategii de creștere, promovare și comunicare adaptate fiecărui brand.",
    en: "We combine a business perspective with digital marketing to build growth, promotion, and communication strategies tailored to each brand.",
  },

  // Legacy keys (păstrate pentru compatibilitate)
  svc_web_title: { ro: "SOFTWARE DEVELOPMENT", en: "SOFTWARE DEVELOPMENT" },
  svc_web_sub: { ro: "WEB & MOBILE", en: "WEB & MOBILE" },
  svc_social_title: { ro: "AI & AUTOMATION", en: "AI & AUTOMATION" },
  svc_social_sub: { ro: "AI · AUTOMATION · INTEGRATIONS", en: "AI · AUTOMATION · INTEGRATIONS" },
  svc_brand_title: { ro: "DIGITAL STRATEGY", en: "DIGITAL STRATEGY" },
  svc_brand_sub: { ro: "BUSINESS · MARKETING · GROWTH", en: "BUSINESS · MARKETING · GROWTH" },

  // Pagini piloni — comune
  pillar_cta_start: { ro: "Începe Proiectul", en: "Start Project" },
  pillar_cta_projects: { ro: "Vezi Proiectele", en: "View Projects" },
  pillar_cta_contact: { ro: "Contactează-ne Acum", en: "Contact us now" },

  // ─── Software Development ───
  sd_hero_t1: { ro: "Software ", en: "Software " },
  sd_hero_h1: { ro: "Development", en: "Development" },
  sd_hero_h2: { ro: "Web", en: "Web" },
  sd_hero_t2: { ro: " și ", en: " and " },
  sd_hero_h3: { ro: "Mobile", en: "Mobile" },
  sd_hero_p: {
    ro: "Construim aplicații web și mobile, platforme digitale și soluții software custom, adaptate proceselor și obiectivelor business-ului tău.",
    en: "We build web and mobile apps, digital platforms, and custom software solutions tailored to your business processes and goals.",
  },
  sd_services_t1: { ro: "Ce ", en: "What we " },
  sd_services_h1: { ro: "construim", en: "build" },
  sd_services_desc: {
    ro: "Platforme web, aplicații mobile și magazine online, scrise de la zero pe măsura business-ului tău.",
    en: "Web platforms, mobile apps, and online stores, written from scratch around your business.",
  },
  sd_card1_title: { ro: "Aplicații Web & Platforme", en: "Web Apps & Platforms" },
  sd_card1_desc: {
    ro: "Platforme, dashboard-uri, sisteme interne și aplicații web care digitalizează procesele business-ului.",
    en: "Platforms, dashboards, internal systems, and web apps that digitize your business processes.",
  },
  sd_card1_li1: { ro: "• Platforme și portaluri custom", en: "• Custom platforms and portals" },
  sd_card1_li2: { ro: "• Dashboard-uri și panouri de administrare", en: "• Dashboards and admin panels" },
  sd_card1_li3: { ro: "• Sisteme interne și digitalizarea fluxurilor", en: "• Internal systems and workflow digitization" },
  sd_card1_li4: { ro: "• Autentificare, roluri și permisiuni", en: "• Authentication, roles, and permissions" },
  sd_card2_title: { ro: "Aplicații Mobile", en: "Mobile Apps" },
  sd_card2_desc: {
    ro: "Aplicații iOS și Android, native sau cross-platform, integrate cu backend-ul și restul ecosistemului tău.",
    en: "iOS and Android apps, native or cross-platform, integrated with your backend and the rest of your ecosystem.",
  },
  sd_card2_li1: { ro: "• iOS și Android dintr-un singur codebase", en: "• iOS and Android from a single codebase" },
  sd_card2_li2: { ro: "• Notificări push și funcționalități offline", en: "• Push notifications and offline features" },
  sd_card2_li3: { ro: "• Integrare cu API-uri și servicii externe", en: "• Integration with APIs and external services" },
  sd_card2_li4: { ro: "• Publicare în App Store și Google Play", en: "• App Store and Google Play publishing" },
  sd_card3_title: { ro: "Website-uri & E-commerce", en: "Websites & E-commerce" },
  sd_card3_desc: {
    ro: "Website-uri de prezentare și magazine online rapide, optimizate SEO și construite fără template-uri.",
    en: "Fast presentation websites and online stores, SEO-optimized and built without templates.",
  },
  sd_card3_li1: { ro: "• Design responsive, scris în cod", en: "• Responsive design, written in code" },
  sd_card3_li2: { ro: "• Plăți online, stocuri și comenzi", en: "• Online payments, inventory, and orders" },
  sd_card3_li3: { ro: "• Optimizare SEO tehnică și performanță", en: "• Technical SEO and performance optimization" },
  sd_card3_li4: { ro: "• Panou de administrare propriu", en: "• Custom admin panel" },
  sd_process_t1: { ro: "Procesul nostru de ", en: "Our " },
  sd_process_h1: { ro: "Dezvoltare", en: "Development Process" },
  sd_process_desc: {
    ro: "Un proces clar, cu livrări vizibile la fiecare etapă și fără surprize la final.",
    en: "A clear process with visible deliveries at every stage and no surprises at the end.",
  },
  sd_step1_title: { ro: "Discovery", en: "Discovery" },
  sd_step1_desc: {
    ro: "Înțelegem business-ul, utilizatorii și problema de rezolvat. Definim împreună scopul și prioritățile.",
    en: "We understand the business, the users, and the problem to solve. We define scope and priorities together.",
  },
  sd_step2_title: { ro: "Arhitectură & Design", en: "Architecture & Design" },
  sd_step2_desc: {
    ro: "Stabilim structura tehnică, fluxurile și interfața înainte să scriem prima linie de cod.",
    en: "We define the technical structure, flows, and interface before writing the first line of code.",
  },
  sd_step3_title: { ro: "Dezvoltare", en: "Development" },
  sd_step3_desc: {
    ro: "Construim iterativ, cu demo-uri regulate, teste și feedback pe parcurs.",
    en: "We build iteratively, with regular demos, testing, and feedback along the way.",
  },
  sd_step4_title: { ro: "Lansare & Mentenanță", en: "Launch & Maintenance" },
  sd_step4_desc: {
    ro: "Publicăm, monitorizăm și continuăm să îmbunătățim soluția după lansare.",
    en: "We deploy, monitor, and keep improving the solution after launch.",
  },
  sd_tech_t1: { ro: "Tehnologiile ", en: "Our " },
  sd_tech_h1: { ro: "noastre", en: "Technologies" },
  sd_tech_desc: {
    ro: "Stack modern, ales pentru performanță, securitate și scalabilitate, nu pentru trenduri.",
    en: "A modern stack chosen for performance, security, and scalability, not for trends.",
  },
  sd_cta_t1: { ro: "Ai un proiect ", en: "Have a " },
  sd_cta_h1: { ro: "software", en: "software project" },
  sd_cta_t2: { ro: "?", en: "?" },
  sd_cta_p: {
    ro: "Hai să discutăm despre problema pe care vrei să o rezolvi și despre soluția tehnică potrivită.",
    en: "Let's talk about the problem you want to solve and the right technical solution.",
  },

  // ─── AI & Automation ───
  aia_hero_t1: { ro: "AI & ", en: "AI & " },
  aia_hero_h1: { ro: "Automation", en: "Automation" },
  aia_hero_h2: { ro: "Automatizări", en: "Automation" },
  aia_hero_t2: { ro: " și ", en: " and " },
  aia_hero_h3: { ro: "Integrări", en: "Integrations" },
  aia_hero_p: {
    ro: "Integrăm soluții AI, automatizăm procese repetitive și conectăm sistemele pe care business-ul tău le folosește deja.",
    en: "We integrate AI solutions, automate repetitive processes, and connect the systems your business already uses.",
  },
  aia_services_t1: { ro: "Ce ", en: "What we " },
  aia_services_h1: { ro: "rezolvăm", en: "solve" },
  aia_services_desc: {
    ro: "Pornim de la procesele tale reale și identificăm unde AI-ul și automatizarea aduc cel mai mare câștig de timp și claritate.",
    en: "We start from your real processes and identify where AI and automation bring the biggest gains in time and clarity.",
  },
  aia_card1_title: { ro: "Soluții AI", en: "AI Solutions" },
  aia_card1_desc: {
    ro: "Integrăm modele AI în aplicațiile și fluxurile tale, acolo unde aduc valoare măsurabilă.",
    en: "We integrate AI models into your apps and workflows, where they bring measurable value.",
  },
  aia_card1_li1: { ro: "• Asistenți AI antrenați pe datele companiei", en: "• AI assistants trained on your company data" },
  aia_card1_li2: { ro: "• Extragere și clasificare automată de documente", en: "• Automated document extraction and classification" },
  aia_card1_li3: { ro: "• Generare de conținut operațional: oferte, rapoarte, răspunsuri", en: "• Operational content generation: quotes, reports, replies" },
  aia_card1_li4: { ro: "• Analiză și sumarizare de date", en: "• Data analysis and summarization" },
  aia_card2_title: { ro: "Automatizare Procese", en: "Process Automation" },
  aia_card2_desc: {
    ro: "Eliminăm task-urile repetitive și fluxurile manuale care consumă timpul echipei.",
    en: "We remove the repetitive tasks and manual workflows that eat up your team's time.",
  },
  aia_card2_li1: { ro: "• Fluxuri automate între aplicații", en: "• Automated workflows between apps" },
  aia_card2_li2: { ro: "• Notificări, alerte și rapoarte programate", en: "• Notifications, alerts, and scheduled reports" },
  aia_card2_li3: { ro: "• Procesare automată de comenzi, facturi și formulare", en: "• Automated processing of orders, invoices, and forms" },
  aia_card2_li4: { ro: "• Sincronizare de date fără intervenție manuală", en: "• Data sync without manual intervention" },
  aia_card3_title: { ro: "Integrări de Sisteme", en: "System Integrations" },
  aia_card3_desc: {
    ro: "Conectăm instrumentele pe care le folosești deja într-un singur flux coerent de date.",
    en: "We connect the tools you already use into a single coherent data flow.",
  },
  aia_card3_li1: { ro: "• CRM, ERP și platforme de facturare", en: "• CRM, ERP, and invoicing platforms" },
  aia_card3_li2: { ro: "• API-uri și servicii externe", en: "• APIs and external services" },
  aia_card3_li3: { ro: "• E-commerce, plăți și logistică", en: "• E-commerce, payments, and logistics" },
  aia_card3_li4: { ro: "• Tool-uri interne și baze de date", en: "• Internal tools and databases" },
  aia_process_t1: { ro: "Cum ", en: "How we " },
  aia_process_h1: { ro: "implementăm", en: "implement" },
  aia_process_desc: {
    ro: "Automatizarea bună începe cu înțelegerea procesului, nu cu alegerea tool-ului.",
    en: "Good automation starts with understanding the process, not with picking the tool.",
  },
  aia_step1_title: { ro: "Audit Procese", en: "Process Audit" },
  aia_step1_desc: {
    ro: "Mapăm fluxurile actuale și identificăm unde se pierde timp sau apar erori.",
    en: "We map current workflows and identify where time is lost or errors appear.",
  },
  aia_step2_title: { ro: "Prioritizare", en: "Prioritization" },
  aia_step2_desc: {
    ro: "Alegem automatizările cu cel mai mare impact și cel mai mic risc, cu obiective măsurabile.",
    en: "We pick the automations with the highest impact and lowest risk, with measurable goals.",
  },
  aia_step3_title: { ro: "Implementare", en: "Implementation" },
  aia_step3_desc: {
    ro: "Construim și integrăm soluția, testată pe date reale, cu echipa ta implicată.",
    en: "We build and integrate the solution, tested on real data, with your team involved.",
  },
  aia_step4_title: { ro: "Măsurare & Optimizare", en: "Measure & Optimize" },
  aia_step4_desc: {
    ro: "Urmărim rezultatele, ajustăm și extindem automatizarea acolo unde are sens.",
    en: "We track results, adjust, and extend automation where it makes sense.",
  },
  aia_diff_t1: { ro: "Nu implementăm AI ", en: "We don't implement AI " },
  aia_diff_h1: { ro: "de dragul AI-ului", en: "for its own sake" },
  aia_diff_t2: { ro: ". Dacă problema se rezolvă cu o ", en: ". If the problem can be solved with a " },
  aia_diff_h2: { ro: "automatizare simplă", en: "simple automation" },
  aia_diff_t3: { ro: " sau o integrare, ", en: " or an integration, " },
  aia_diff_h3: { ro: "asta propunem", en: "that's what we propose" },
  aia_diff_t4: { ro: ".", en: "." },
  aia_tech_t1: { ro: "Instrumente și ", en: "Tools and " },
  aia_tech_h1: { ro: "tehnologii", en: "technologies" },
  aia_tech_desc: {
    ro: "Combinăm modele AI, platforme de automatizare și cod custom, în funcție de ce are sens pentru fiecare proces.",
    en: "We combine AI models, automation platforms, and custom code, depending on what makes sense for each process.",
  },
  aia_cta_t1: { ro: "Ce proces ai vrea să ", en: "Which process would you like to " },
  aia_cta_h1: { ro: "automatizezi", en: "automate" },
  aia_cta_t2: { ro: "?", en: "?" },
  aia_cta_p: {
    ro: "Povestește-ne cum lucrează echipa ta acum și îți spunem sincer unde AI-ul și automatizarea au sens, și unde nu.",
    en: "Tell us how your team works today and we'll tell you honestly where AI and automation make sense, and where they don't.",
  },

  // ─── Digital Strategy ───
  ds_hero_t1: { ro: "Digital ", en: "Digital " },
  ds_hero_h1: { ro: "Strategy", en: "Strategy" },
  ds_hero_h2: { ro: "Business", en: "Business" },
  ds_hero_t2: { ro: ", ", en: ", " },
  ds_hero_h3: { ro: "Marketing", en: "Marketing" },
  ds_hero_t3: { ro: " & ", en: " & " },
  ds_hero_h4: { ro: "Growth", en: "Growth" },
  ds_hero_p: {
    ro: "Combinăm perspectiva de business cu marketingul digital pentru a construi strategii de creștere, promovare și comunicare adaptate fiecărui brand.",
    en: "We combine a business perspective with digital marketing to build growth, promotion, and communication strategies tailored to each brand.",
  },
  ds_services_t1: { ro: "Ce ", en: "What we " },
  ds_services_h1: { ro: "oferim", en: "offer" },
  ds_services_desc: {
    ro: "Strategie înainte de execuție: definim obiectivele și direcția, apoi alegem canalele și tacticile care contează.",
    en: "Strategy before execution: we define the goals and direction, then choose the channels and tactics that matter.",
  },
  ds_card1_title: { ro: "Strategie & Poziționare", en: "Strategy & Positioning" },
  ds_card1_desc: {
    ro: "Clarificăm cine ești, cui te adresezi și ce te diferențiază, înainte să investești în promovare.",
    en: "We clarify who you are, who you're talking to, and what sets you apart, before you invest in promotion.",
  },
  ds_card1_li1: { ro: "• Audit al prezenței digitale actuale", en: "• Audit of your current digital presence" },
  ds_card1_li2: { ro: "• Definirea audienței și a mesajului", en: "• Audience and message definition" },
  ds_card1_li3: { ro: "• Poziționare și direcție de comunicare", en: "• Positioning and communication direction" },
  ds_card1_li4: { ro: "• Plan de acțiune cu obiective măsurabile", en: "• Action plan with measurable goals" },
  ds_card2_title: { ro: "Marketing Digital", en: "Digital Marketing" },
  ds_card2_desc: {
    ro: "Social media, ads și conținut care lucrează împreună, nu izolat.",
    en: "Social media, ads, and content that work together, not in isolation.",
  },
  ds_card2_li1: { ro: "• Management social media și conținut", en: "• Social media and content management" },
  ds_card2_li2: { ro: "• Campanii Meta Ads și Google Ads", en: "• Meta Ads and Google Ads campaigns" },
  ds_card2_li3: { ro: "• Producție video, reels și materiale vizuale", en: "• Video production, reels, and visual assets" },
  ds_card2_li4: { ro: "• Email marketing și automatizări de comunicare", en: "• Email marketing and communication automation" },
  ds_card3_title: { ro: "Branding & Comunicare", en: "Branding & Communication" },
  ds_card3_desc: {
    ro: "Identitate vizuală și mesaj coerent pe toate canalele, online și offline.",
    en: "Visual identity and a coherent message across all channels, online and offline.",
  },
  ds_card3_li1: { ro: "• Logo, identitate vizuală și brand guidelines", en: "• Logo, visual identity, and brand guidelines" },
  ds_card3_li2: { ro: "• Materiale de prezentare și comunicare", en: "• Presentation and communication materials" },
  ds_card3_li3: { ro: "• Tone of voice și mesaje-cheie", en: "• Tone of voice and key messages" },
  ds_card3_li4: { ro: "• Consistență între website, social și offline", en: "• Consistency across website, social, and offline" },
  ds_process_t1: { ro: "Cum ", en: "How we " },
  ds_process_h1: { ro: "lucrăm", en: "work" },
  ds_process_desc: {
    ro: "Fără tactici la întâmplare. Fiecare acțiune pornește dintr-un obiectiv clar și se măsoară.",
    en: "No random tactics. Every action starts from a clear goal and gets measured.",
  },
  ds_step1_title: { ro: "Analiză", en: "Analysis" },
  ds_step1_desc: {
    ro: "Înțelegem business-ul, piața, competiția și situația actuală a brandului.",
    en: "We understand the business, the market, the competition, and the brand's current state.",
  },
  ds_step2_title: { ro: "Strategie", en: "Strategy" },
  ds_step2_desc: {
    ro: "Stabilim obiectivele, canalele, mesajul și planul de acțiune.",
    en: "We define the goals, channels, message, and action plan.",
  },
  ds_step3_title: { ro: "Execuție", en: "Execution" },
  ds_step3_desc: {
    ro: "Implementăm campanii, conținut și materiale, cu ritm constant și calitate.",
    en: "We deliver campaigns, content, and materials, with consistent rhythm and quality.",
  },
  ds_step4_title: { ro: "Măsurare", en: "Measurement" },
  ds_step4_desc: {
    ro: "Urmărim rezultatele, raportăm transparent și optimizăm continuu.",
    en: "We track results, report transparently, and optimize continuously.",
  },
  ds_results_t1: { ro: "Rezultate ", en: "Real " },
  ds_results_h1: { ro: "reale", en: "results" },
  ds_results_desc: {
    ro: "Cifre din campaniile și conturile clienților noștri.",
    en: "Numbers from our clients' campaigns and accounts.",
  },
  ds_res1_title: { ro: "Vizualizări generate", en: "Views generated" },
  ds_res1_desc: { ro: "pe social media, pentru clienții noștri", en: "on social media, for our clients" },
  ds_res2_title: { ro: "Urmăritori aduși", en: "Followers gained" },
  ds_res2_desc: { ro: "creștere organică și plătită pe conturile clienților", en: "organic and paid growth on client accounts" },
  ds_res3_title: { ro: "Clienți", en: "Clients" },
  ds_res3_desc: { ro: "din 10+ domenii de activitate", en: "across 10+ industries" },
  ds_diff_t1: { ro: "Social media, ads sau branding ", en: "Social media, ads, or branding " },
  ds_diff_h1: { ro: "nu sunt scopul", en: "aren't the goal" },
  ds_diff_t2: { ro: ". Sunt instrumente. Scopul este ", en: ". They're tools. The goal is " },
  ds_diff_h2: { ro: "creșterea business-ului", en: "business growth" },
  ds_diff_t3: { ro: ".", en: "." },
  ds_tech_t1: { ro: "Canale și ", en: "Channels and " },
  ds_tech_h1: { ro: "platforme", en: "platforms" },
  ds_tech_desc: {
    ro: "Alegem canalele în funcție de unde este audiența ta, nu în funcție de trenduri.",
    en: "We choose channels based on where your audience is, not based on trends.",
  },
  ds_cta_t1: { ro: "Vrei o strategie care ", en: "Want a strategy that " },
  ds_cta_h1: { ro: "chiar funcționează", en: "actually works" },
  ds_cta_t2: { ro: "?", en: "?" },
  ds_cta_p: {
    ro: "Hai să discutăm despre obiectivele tale și despre ce are sens să faci în online, și ce nu.",
    en: "Let's talk about your goals and what makes sense to do online, and what doesn't.",
  },

  // Portfolio carousel tabs
  tab_apps: { ro: "Aplicații & Platforme", en: "Apps & Platforms" },
  tab_pages: { ro: "Website-uri", en: "Websites" },
  tab_shops: { ro: "E-commerce", en: "E-commerce" },
  tab_social: { ro: "Digital Growth", en: "Digital Growth" },
  tab_other: { ro: "Altele", en: "Other" },

  // Portfolio slides content
  slide_vera_title: { ro: "Vera Papara Psiholog", en: "Vera Papara Psychologist" },
  slide_vera_subtitle: { ro: "Site pentru psiholog", en: "Website for psychologist" },
  slide_vera_desc: { ro: "Site profesional pentru cabinetul de psihologie.", en: "Professional website for a psychology practice." },

  slide_cmd_title: { ro: "CMD External Group", en: "CMD External Group" },
  slide_cmd_subtitle: { ro: "Web design + Official Event Presentation", en: "Web design + Official Event Presentation" },
  slide_cmd_desc: { ro: "Servicii profesionale de web design și dezvoltare.", en: "Professional web design and development services." },

  slide_curs_title: { ro: "CursPlus", en: "CursPlus" },
  slide_curs_subtitle: { ro: "Landing page", en: "Landing page" },
  slide_curs_desc: { ro: "Platformă educațională și sistem de management al cursurilor.", en: "Educational platform and course management system." },

  slide_hrz_title: { ro: "HRZ Media", en: "HRZ Media" },
  slide_hrz_subtitle: { ro: "Web design & branding", en: "Web design & branding" },
  slide_hrz_desc: { ro: "Agenție creativă de media și soluții de branding.", en: "Creative media agency and branding solutions." },

  // AEF slide
  slide_aef_title: { ro: "AEF Service Auto", en: "AEF Auto Service" },
  slide_aef_subtitle: { ro: "Întreținere și mentenanță", en: "Maintenance & Service" },
  slide_aef_desc: { ro: "Servicii de mentenanță și întreținere pentru toată gama de autoturisme.", en: "Maintenance and service for a wide range of vehicles." },

  // Competizione slide
  slide_comp_title: { ro: "Competizione Detailing", en: "Competizione Detailing" },
  slide_comp_subtitle: { ro: "PPF, Detailing, Protecție", en: "PPF, Detailing, Protection" },
  slide_comp_desc: { ro: "Servicii profesionale PPF, detailing interior/exterior și protecție caroserie.", en: "Professional PPF, interior/exterior detailing and paint protection services." },

  // Abraham & Asociații slide
  slide_abr_title: { ro: "Abraham & Asociații", en: "Abraham & Associates" },
  slide_abr_subtitle: { ro: "Cabinet de avocatură", en: "Law Firm" },
  slide_abr_desc: { ro: "Prezentare cabinet de avocatură și domenii de expertiză.", en: "Law firm presentation and areas of expertise." },

  // Agrodrona slide
  slide_agro_title: { ro: "Agrodrona", en: "Agrodrona" },
  slide_agro_subtitle: { ro: "Drone agricole", en: "Agricultural drones" },
  slide_agro_desc: { ro: "Tehnologie pentru agricultură modernă.", en: "Technology for modern agriculture." },

  // Platinum Events slide
  slide_platinum_title: { ro: "Platinum Events", en: "Platinum Events" },
  slide_platinum_subtitle: { ro: "Organizare evenimente private", en: "Private event planning" },
  slide_platinum_desc: { ro: "Servicii premium de organizare și management pentru evenimente private exclusive.", en: "Premium organization and management services for exclusive private events." },

  // HashtagMEN slide
  slide_hashtagmen_title: { ro: "HashtagMEN", en: "HashtagMEN" },
  slide_hashtagmen_subtitle: { ro: "Frizerie pentru bărbați", en: "Men's barbershop" },
  slide_hashtagmen_desc: { ro: "Site modern pentru frizerie specializată în servicii profesionale pentru bărbați.", en: "Modern website for a barbershop specialized in professional men's grooming services." },

  // QuickLearn slide
  slide_quicklearn_title: { ro: "QuickLearn", en: "QuickLearn" },
  slide_quicklearn_subtitle: { ro: "Platformă e-learning", en: "E-learning platform" },
  slide_quicklearn_desc: { ro: "Platformă e-learning cu credențiale și certificate securizate prin blockchain.", en: "An e-learning platform with blockchain secured credentials and certificates." },

  // Picpossible slide
  slide_picpossible_title: { ro: "Picpossible", en: "Picpossible" },
  slide_picpossible_subtitle: { ro: "Joc mobil multiplayer", en: "Multiplayer mobile game" },
  slide_picpossible_desc: { ro: "Joc mobil de spotting multiplayer, construit cu Expo, folosind web sockets și funcționalități avansate.", en: "A multiplayer mobile spotting game built with Expo, using web sockets and many other functions." },

  // Rouh slide
  slide_rouh_title: { ro: "Rouh", en: "Rouh" },
  slide_rouh_subtitle: { ro: "Magazin online parfumuri", en: "Online perfume store" },
  slide_rouh_desc: { ro: "Magazin online specializat în vânzarea de parfumuri și produse de parfumerie.", en: "Online store specialized in selling perfumes and perfumery products." },

  // SmartHomeMall slide
  slide_smarthomes_title: { ro: "SmartHomeMall", en: "SmartHomeMall" },
  slide_smarthomes_subtitle: { ro: "Magazin online sisteme smart home", en: "Smart home systems online store" },
  slide_smarthomes_desc: { ro: "Magazin online pentru vânzarea de sisteme și produse pentru case inteligente.", en: "Online store for selling smart home systems and products." },

  // Amarg slide
  slide_amarg_title: { ro: "Amarg", en: "Amarg" },
  slide_amarg_subtitle: { ro: "Magazin online haine urbane", en: "Urban clothing online store" },
  slide_amarg_desc: { ro: "Magazin online specializat în haine urbane și fashion contemporan.", en: "Online store specialized in urban clothing and contemporary fashion." },

  // TreasureBoxRomania slide
  slide_treasurebox_title: { ro: "TreasureBoxRomania", en: "TreasureBoxRomania" },
  slide_treasurebox_subtitle: { ro: "Magazin online mystery box-uri", en: "Mystery box online store" },
  slide_treasurebox_desc: { ro: "Magazin online care vindea mystery box-uri cu haine și accesorii fashion.", en: "Online store that sold mystery boxes with clothing and fashion accessories." },

  // ScreenShield slide
  slide_screen_title: { ro: "ScreenShield", en: "ScreenShield" },
  slide_screen_subtitle: { ro: "Magazin online PPF", en: "PPF online store" },
  slide_screen_desc: { ro: "Protecție premium PPF pentru sistemele infotainment auto.", en: "Premium PPF protection for car infotainment systems." },

  // Vocea Campusului slide
  slide_voc_title: { ro: "Vocea Campusului", en: "Vocea Campusului" },
  slide_voc_subtitle: { ro: "Platformă comunitară", en: "Community platform" },
  slide_voc_desc: { ro: "Aplicație web cu forum și conținut pentru comunitate.", en: "Web app with forum and content for the community." },

  // Social media results generic slide
  social_slide_title: { ro: "Rezultat Social Media", en: "Social Media Result" },
  social_slide_desc: { ro: "Eșantion de rezultate din campanii: reach, engagement și conversii.", en: "Sample results from campaigns: reach, engagement and conversions." },

  view_label: { ro: "Vezi", en: "View" },
  prev_slide: { ro: "Slide anterior", en: "Previous slide" },
  next_slide: { ro: "Slide următor", en: "Next slide" },

  // Footer nav
  footer_nav_about: { ro: "Despre noi", en: "About us" },
  footer_nav_services: { ro: "Servicii", en: "Services" },
  footer_nav_portfolio: { ro: "Proiecte", en: "Projects" },

  footer_nav_contact: { ro: "Contact", en: "Contact" },

  footer_nav_label: { ro: "Navigare", en: "Navigation" },
  footer_contact_label: { ro: "Contact", en: "Contact" },
  footer_social_label: { ro: "Social Media", en: "Social Media" },
  footer_tagline: { ro: "Software, AI, automatizări și strategie digitală pentru business-uri care vor rezultate reale.", en: "Software, AI, automation, and digital strategy for businesses that want real results." },
  privacy_policy: { ro: "Politica de Confidențialitate", en: "Privacy Policy" },
  cookies_policy: { ro: "Politica de Cookies", en: "Cookies Policy" },
  terms_conditions: { ro: "Termeni și Condiții", en: "Terms and Conditions" },
  anpc_label: { ro: "ANPC", en: "ANPC" },

  // Contact cards
  label_phone: { ro: "Telefon", en: "Phone" },
  label_email: { ro: "Email", en: "Email" },
  label_whatsapp: { ro: "WhatsApp", en: "WhatsApp" },
  btn_contact_us: { ro: "Contactează-ne", en: "Contact us" },

  // Explainer lead label
  explainer_lead: { ro: "Iată cum funcționează:", en: "Here's how it works:" },

  // ===== Pagina Dezvoltare Web =====
  devweb_hero_t1: { ro: "Dezvoltare ", en: "Web " },
  devweb_hero_h1: { ro: "Web", en: "Development" },
  devweb_hero_t2: { ro: " ", en: " " },
  devweb_hero_h2: { ro: "Modernă", en: "Modern" },
  devweb_hero_t3: { ro: " și ", en: " and " },
  devweb_hero_h3: { ro: "Personalizată", en: "Custom" },
  devweb_hero_p: {
    ro: "Construim site-uri web moderne, rapide și optimizate pentru conversii.",
    en: "We build modern, fast websites optimized for conversions.",
  },
  devweb_cta_start: { ro: "Începe Proiectul", en: "Start Project" },
  devweb_cta_portfolio: { ro: "Vezi Portofoliul", en: "View Portfolio" },

  devweb_services_h_t1: { ro: "Serviciile Noastre de ", en: "Our " },
  devweb_services_h_h1: { ro: "Web Development", en: "Web Development" },
  devweb_services_desc: {
    ro: "Oferim soluții complete de dezvoltare web, de la site-uri simple până la aplicații complexe",
    en: "We provide end‑to‑end web development solutions, from simple sites to complex apps",
  },

  devweb_card_corp_title: { ro: "Site-uri de Prezentare", en: "Corporate websites" },
  devweb_card_corp_desc: {
    ro: "Site-uri profesionale pentru companii, cu design modern și funcționalități avansate",
    en: "Professional company sites with modern design and advanced features",
  },
  devweb_card_corp_li1: { ro: "• Design responsive și modern", en: "• Modern, responsive design" },
  devweb_card_corp_li2: { ro: "• Optimizare SEO", en: "• SEO optimization" },
  devweb_card_corp_li3: { ro: "• Integrare cu sisteme de management", en: "• Integrations with management systems" },
  devweb_card_corp_li4: { ro: "• Suport tehnic continuu", en: "• Ongoing technical support" },

  devweb_card_ecom_title: { ro: "E-commerce", en: "E-commerce" },
  devweb_card_ecom_desc: {
    ro: "Magazin online complet cu sistem de plăți, gestionare produse și analytics",
    en: "Complete online store with payments, product management and analytics",
  },
  devweb_card_ecom_li1: { ro: "• Sistem de plăți securizat", en: "• Secure payment system" },
  devweb_card_ecom_li2: { ro: "• Gestionare produse și stoc", en: "• Product and inventory management" },
  devweb_card_ecom_li3: { ro: "• Dashboard administrativ", en: "• Admin dashboard" },
  devweb_card_ecom_li4: { ro: "• Integrare cu transportatori", en: "• Carrier integrations" },

  devweb_card_app_title: { ro: "Web/Mobile", en: "Web/Mobile" },
  devweb_card_app_desc: {
    ro: "Aplicații web complexe și personalizate pentru nevoile specifice ale afacerii tale",
    en: "Complex, custom web apps tailored to your business",
  },
  devweb_card_app_li1: { ro: "• Aplicații custom", en: "• Custom applications" },
  devweb_card_app_li2: { ro: "• API-uri și integrații", en: "• APIs and integrations" },
  devweb_card_app_li3: { ro: "• Baze de date complexe", en: "• Complex databases" },
  devweb_card_app_li4: { ro: "• Scalabilitate avansată", en: "• Advanced scalability" },

  devweb_process_h_t1: { ro: "Procesul Nostru de ", en: "Our " },
  devweb_process_h_h1: { ro: "Dezvoltare", en: "Development Process" },
  devweb_process_desc: {
    ro: "Un proces clar, cu livrări vizibile la fiecare etapă.",
    en: "A clear process with visible deliveries at every stage.",
  },
  devweb_step1_title: { ro: "Consultare", en: "Consultation" },
  devweb_step1_desc: { ro: "Înțelegem nevoile tale, analizăm concurența și stabilim obiectivele proiectului", en: "We understand your needs, analyze competition and set project goals" },
  devweb_step2_title: { ro: "Design", en: "Design" },
  devweb_step2_desc: { ro: "Creăm mockup-uri și prototipuri interactive pentru a vizualiza rezultatul final", en: "We create mockups and interactive prototypes to visualize the final result" },
  devweb_step3_title: { ro: "Dezvoltare", en: "Development" },
  devweb_step3_desc: { ro: "Programăm site-ul folosind tehnologii moderne și optimizăm pentru performanță", en: "We build using modern tech and optimize for performance" },
  devweb_step4_title: { ro: "Lansare", en: "Launch" },
  devweb_step4_desc: { ro: "Deployăm site-ul, testăm funcționalitățile și oferim suport post-lansare", en: "We deploy, test features and provide post-launch support" },

  devweb_tech_h_t1: { ro: "Tehnologiile ", en: "Our " },
  devweb_tech_h_h1: { ro: "Noastre", en: "Technologies" },
  devweb_tech_desc: { ro: "Folosim cele mai moderne tehnologii pentru a crea site-uri rapide, securizate și scalabile", en: "We use modern technologies to build fast, secure and scalable websites" },
  devweb_custom_diff_t1: { ro: "Nu", en: "We don't" },
  devweb_custom_diff_h1: { ro: " folosim CMS-uri", en: " use CMS platforms" },
  devweb_custom_diff_t2: { ro: " și ", en: " or " },
  devweb_custom_diff_h2: { ro: "template-uri", en: "templates" },
  devweb_custom_diff_t3: { ro: ". Scriem software custom, ca soluția să fie ", en: ". We write custom software so the solution is " },
  devweb_custom_diff_h3: { ro: "potrivită", en: "right" },
  devweb_custom_diff_t4: { ro: " pentru business-ul tău.", en: " for your business." },

  devweb_cta_h_t1: { ro: "Gata să începem ", en: "Ready to start your " },
  devweb_cta_h_h1: { ro: "proiectul", en: "project" },
  devweb_cta_h_t2: { ro: " tău?", en: "?" },
  devweb_cta_p: { ro: "Contactează-ne pentru o consultație și hai să discutăm despre ce vrei să construiești.", en: "Contact us for a consultation and let's talk about what you want to build." },
  devweb_cta_primary: { ro: "Contactează-ne Acum", en: "Contact us now" },
  devweb_cta_secondary: { ro: "Vezi Portofoliul", en: "View portfolio" },

  // Footer
  footer_rights: { ro: "© 2025 Grizzly Media Pro. Toate drepturile rezervate.", en: "© 2025 Grizzly Media Pro. All rights reserved." },
  
  // ===== Pagina Social Media =====git add .
  
  // Hero
  social_hero_t1: { ro: "Social Media ", en: "Social Media " },
  social_hero_h1: { ro: "Marketing", en: "Marketing" },
  social_hero_h2: { ro: "Strategic", en: "Strategic" },
  social_hero_t2: { ro: " și ", en: " and " },
  social_hero_h3: { ro: "Creativ", en: "Creative" },
  social_hero_p: { ro: "Transformăm brandul tău într-o prezență digitală puternică cu strategii personalizate și conținut viral", en: "We turn your brand into a powerful digital presence with tailored strategies and viral content" },
  social_hero_cta_start: { ro: "Începe Campania", en: "Start Campaign" },
  social_hero_cta_results: { ro: "Vezi Rezultatele", en: "View Results" },

  // Services section
  social_services_h_t1: { ro: "Serviciile Noastre de ", en: "Our " },
  social_services_h_h1: { ro: "Social Media", en: "Social Media" },
  social_services_desc: { ro: "Oferim soluții complete de marketing pe social media, de la strategie până la conținut viral", en: "We offer end-to-end social media marketing, from strategy to viral content" },

  // Service cards: Strategy & Planning
  social_card_strategy_title: { ro: "Strategie și Planificare", en: "Strategy & Planning" },
  social_card_strategy_desc: { ro: "Dezvoltăm strategii personalizate pentru fiecare platformă social media", en: "We craft tailored strategies for each social media platform" },
  social_card_strategy_li1: { ro: "• Analiză concurență și piață", en: "• Competitor and market analysis" },
  social_card_strategy_li2: { ro: "• Planificare editorială", en: "• Editorial planning" },
  social_card_strategy_li3: { ro: "• Strategii de creștere", en: "• Growth strategies" },
  social_card_strategy_li4: { ro: "• Calendar de conținut", en: "• Content calendar" },

  // Service cards: Content Creation
  social_card_content_title: { ro: "Creare Conținut", en: "Content Creation" },
  social_card_content_desc: { ro: "Conținut creativ și viral adaptat pentru fiecare platformă social media", en: "Creative, viral content tailored to each platform" },
  social_card_content_li1: { ro: "• Postări și stories", en: "• Posts and stories" },
  social_card_content_li2: { ro: "• Video-uri și reels", en: "• Videos and reels" },
  social_card_content_li3: { ro: "• Design grafic", en: "• Graphic design" },
  social_card_content_li4: { ro: "• Conținut viral", en: "• Viral content" },

  // Service cards: Management & Monitoring
  social_card_manage_title: { ro: "Gestionare și Monitorizare", en: "Management & Monitoring" },
  social_card_manage_desc: { ro: "Gestionăm toate conturile tale și monitorizăm performanța în timp real", en: "We manage all your accounts and monitor performance in real-time" },
  social_card_manage_li1: { ro: "• Gestionare conturi", en: "• Account management" },
  social_card_manage_li2: { ro: "• Răspuns comentarii", en: "• Comment replies" },
  social_card_manage_li3: { ro: "• Rapoarte performanță", en: "• Performance reports" },
  social_card_manage_li4: { ro: "• Optimizare continuă", en: "• Continuous optimization" },

  // Platforms section
  social_platforms_h_t1: { ro: "Platformele ", en: "Our " },
  social_platforms_h_h1: { ro: "Noastre", en: "Platforms" },
  social_platforms_desc: { ro: "Lucrăm cu toate platformele sociale pentru a-ți maximiza prezența digitală", en: "We work across all major platforms to maximize your digital presence" },

  // Results section
  social_results_h_t1: { ro: "Rezultatele ", en: "Our " },
  social_results_h_h1: { ro: "Noastre", en: "Results" },
  social_results_desc: { ro: "Transformăm brandurile în influențatori digitali cu rezultate măsurabile", en: "We turn brands into digital influencers with measurable results" },
  social_res_views_title: { ro: "Views", en: "Views" },
  social_res_views_desc: { ro: "Vizualizări generate pentru clienții noștri", en: "Views generated for our clients" },
  social_res_followers_title: { ro: "Followers", en: "Followers" },
  social_res_followers_desc: { ro: "Urmăritori adăugați clienților noștri", en: "Followers added for our clients" },
  social_res_growth_title: { ro: "Creștere", en: "Growth" },
  social_res_growth_desc: { ro: "Creștere medie în engagement", en: "Average engagement growth" },
  social_res_clients_title: { ro: "Clienți", en: "Clients" },
  social_res_clients_desc: { ro: "Clienți mulțumiți cu rezultate", en: "Satisfied clients with results" },

  // CTA section
  social_cta_h_t1: { ro: "Gata să începem ", en: "Ready to start your " },
  social_cta_h_h1: { ro: "campania", en: "campaign" },
  social_cta_h_t2: { ro: " ta?", en: "?" },
  social_cta_p: { ro: "Contactează-ne pentru o consultație gratuită și să discutăm despre cum putem transforma brandul tău într-o prezență virală pe social media", en: "Contact us for a free consultation and let's discuss how to make your brand go viral on social media" },
  social_cta_primary: { ro: "Contactează-ne Acum", en: "Contact Us Now" },
  social_cta_secondary: { ro: "Vezi Rezultatele", en: "View Results" },

  // Footer
  social_footer_tagline: { ro: "Transformăm brandurile în influențatori digitali cu strategii personalizate și conținut viral.", en: "We transform brands into digital influencers with tailored strategies and viral content." },

  // ===== Pagina Branding =====
  // Hero
  brand_hero_t1: { ro: "Branding și ", en: "Branding and " },
  brand_hero_h1: { ro: "Design", en: "Design" },
  brand_hero_h2: { ro: "Identitate", en: "Identity" },
  brand_hero_t2: { ro: " și ", en: " and " },
  brand_hero_h3: { ro: "Viziune", en: "Vision" },
  brand_hero_p: { ro: "Creăm identități vizuale puternice care transformă brandurile în experiențe memorabile și recunoscute", en: "We craft strong visual identities that turn brands into memorable, recognizable experiences" },
  brand_cta_start: { ro: "Începe Proiectul", en: "Start Project" },
  brand_cta_portfolio: { ro: "Vezi Portofoliul", en: "View Portfolio" },

  // Services section
  brand_services_h_t1: { ro: "Serviciile Noastre de ", en: "Our " },
  brand_services_h_h1: { ro: "Branding", en: "Branding" },
  brand_services_desc: { ro: "Oferim soluții complete de branding, de la identitate vizuală până la strategii de brand", en: "We provide end‑to‑end branding solutions, from visual identity to brand strategy" },

  // Service cards
  brand_card_identity_title: { ro: "Identitate Vizuală", en: "Visual Identity" },
  brand_card_identity_desc: { ro: "Logo-uri, culori, tipografii și elemente vizuale care definesc brandul tău", en: "Logos, colors, typography and visual elements that define your brand" },
  brand_card_identity_li1: { ro: "• Design logo și simboluri", en: "• Logo and symbol design" },
  brand_card_identity_li2: { ro: "• Paletă de culori", en: "• Color palette" },
  brand_card_identity_li3: { ro: "• Tipografie personalizată", en: "• Custom typography" },
  brand_card_identity_li4: { ro: "• Elemente grafice", en: "• Graphic elements" },

  brand_card_promo_title: { ro: "Materiale Promoționale", en: "Promotional Materials" },
  brand_card_promo_desc: { ro: "Design pentru toate materialele promoționale și de marketing", en: "Design for all promotional and marketing materials" },
  brand_card_promo_li1: { ro: "• Carduri de vizită", en: "• Business cards" },
  brand_card_promo_li2: { ro: "• Broșuri și cataloage", en: "• Brochures and catalogs" },
  brand_card_promo_li3: { ro: "• Banner-e și afișe", en: "• Banners and posters" },
  brand_card_promo_li4: { ro: "• Materiale digitale", en: "• Digital materials" },

  brand_card_strategy_title: { ro: "Strategie de Brand", en: "Brand Strategy" },
  brand_card_strategy_desc: { ro: "Dezvoltăm strategii complete pentru a-ți construi un brand puternic și memorabil", en: "We develop comprehensive strategies to build a strong, memorable brand" },
  brand_card_strategy_li1: { ro: "• Poziționare brand", en: "• Brand positioning" },
  brand_card_strategy_li2: { ro: "• Mesaj și ton de voce", en: "• Messaging and tone of voice" },
  brand_card_strategy_li3: { ro: "• Strategii de comunicare", en: "• Communication strategies" },
  brand_card_strategy_li4: { ro: "• Planificare pe termen lung", en: "• Long‑term planning" },

  // Process section
  brand_process_h_t1: { ro: "Procesul Nostru de ", en: "Our " },
  brand_process_h_h1: { ro: "Branding", en: "Branding Process" },
  brand_process_desc: { ro: "O metodologie clară și transparentă pentru a crea identități vizuale puternice", en: "A clear, transparent methodology to create strong visual identities" },
  brand_step1_title: { ro: "Research", en: "Research" },
  brand_step1_desc: { ro: "Analizăm piața, concurența și audiența țintă pentru a înțelege contextul", en: "We analyze the market, competition and target audience to understand the context" },
  brand_step2_title: { ro: "Concept", en: "Concept" },
  brand_step2_desc: { ro: "Dezvoltăm concepte creative și direcții vizuale pentru brandul tău", en: "We develop creative concepts and visual directions for your brand" },
  brand_step3_title: { ro: "Design", en: "Design" },
  brand_step3_desc: { ro: "Creăm toate elementele vizuale și materialele de brand", en: "We create all visual elements and brand materials" },
  brand_step4_title: { ro: "Implementare", en: "Implementation" },
  brand_step4_desc: { ro: "Lansăm brandul și oferim suport pentru implementarea pe toate canalele", en: "We launch the brand and support implementation across all channels" },

  // Tools section
  brand_tools_h_t1: { ro: "Instrumentele ", en: "Our " },
  brand_tools_h_h1: { ro: "Noastre", en: "Tools" },
  brand_tools_desc: { ro: "Folosim cele mai moderne instrumente de design pentru a crea identități vizuale de calitate", en: "We use modern design tools to craft high‑quality visual identities" },

  // Results section
  brand_results_h_t1: { ro: "Rezultatele ", en: "Our " },
  brand_results_h_h1: { ro: "Noastre", en: "Results" },
  brand_results_desc: { ro: "Transformăm brandurile în experiențe vizuale memorabile și recunoscute", en: "We turn brands into memorable, recognized visual experiences" },
  brand_res_posts_title: { ro: "Postări", en: "Posts" },
  brand_res_posts_desc: { ro: "Postări create pentru branduri diverse", en: "Posts created for diverse brands" },
  brand_res_campaigns_title: { ro: "Campanii", en: "Campaigns" },
  brand_res_campaigns_desc: { ro: "Campanii rulate pentru clienții noștri", en: "Campaigns run for our clients" },
  brand_res_types_title: { ro: "Tipuri de branding", en: "Branding types" },
  brand_res_types_desc: { ro: "Branding adaptat exact nevoilor afacerilor clienților", en: "Branding tailored precisely to clients' business needs" },
  brand_res_response_title: { ro: "Răspuns", en: "Response" },
  brand_res_response_desc: { ro: "Timp de răspuns pentru modificări", en: "Response time for changes" },

  // CTA final
  brand_cta_h_t1: { ro: "Gata să începem ", en: "Ready to start your " },
  brand_cta_h_h1: { ro: "proiectul", en: "project" },
  brand_cta_h_t2: { ro: " tău?", en: "?" },
  brand_cta_p: { ro: "Contactează-ne pentru o consultație gratuită și să discutăm despre cum putem transforma brandul tău într-o identitate vizuală puternică", en: "Contact us for a free consultation and let's discuss how we can turn your brand into a strong visual identity" },
  brand_cta_primary: { ro: "Contactează-ne Acum", en: "Contact Us Now" },
  brand_cta_secondary: { ro: "Vezi Portofoliul", en: "View Portfolio" },

  // Footer tagline
  brand_footer_tagline: { ro: "Creăm identități vizuale puternice care transformă brandurile în experiențe memorabile și recunoscute.", en: "We craft strong visual identities that turn brands into memorable, recognizable experiences." },
  
  // ===== Pagina Politica de Confidențialitate =====
  privacy_title: { ro: "Politică de Confidențialitate", en: "Privacy Policy" },
  privacy_updated: { ro: "Ultima actualizare: 1 August 2025", en: "Last updated: August 1, 2025" },

  privacy_general_h: { ro: "Informații generale", en: "General information" },
  privacy_general_p: {
    ro: "Confidențialitatea datelor dumneavoastră cu caracter personal reprezintă una dintre preocupările principale ale GRIZZLY DIGITAL S.R.L., cu sediul în Județul Dolj, Municipiul Craiova, Strada Constantin Lecca 66, în calitate de operator de date. Acest document are rolul de a vă informa cu privire la prelucrarea datelor dumneavoastră cu caracter personal, în contextul utilizării paginii de internet a companiei.",
    en: "The confidentiality of your personal data is one of the main concerns of GRIZZLY DIGITAL S.R.L., headquartered in Dolj County, Craiova Municipality, 66 Constantin Lecca Street, as data controller. This document is intended to inform you about the processing of your personal data in the context of using the company's website."
  },

  privacy_cat_h: { ro: "Categoriile de date cu caracter personal prelucrate", en: "Categories of processed personal data" },
  privacy_cat_client_h: { ro: "II.1. Dacă sunteți client al Site-ului", en: "II.1. If you are a customer of the Website" },
  privacy_cat_client_p1: {
    ro: "GRIZZLY DIGITAL S.R.L. va prelucra datele dumneavoastră cu caracter personal, cum ar fi nume și prenume, telefon, adresa de e-mail, adresa de facturare, adresa de livrare, date referitoare la modul în care utilizați Site-ul, de exemplu comportamentul/preferințele/obișnuințele dumneavoastră în cadrul GRIZZLY DIGITAL S.R.L., precum și orice alte categorii de date pe care le furnizați în mod direct în contextul creării contului de utilizator, în contextul plasării unei comenzi prin intermediul site-ului sau în orice alt mod care rezultă din utilizarea Site-ului.",
    en: "GRIZZLY DIGITAL S.R.L. will process your personal data such as name and surname, phone number, email address, billing address, delivery address, data regarding how you use the Website (e.g., your behavior/preferences/habits within GRIZZLY DIGITAL S.R.L.), as well as any other categories of data you provide directly in the context of creating a user account, placing an order through the website, or otherwise resulting from your use of the Website."
  },
  privacy_cat_client_p2: {
    ro: "Dacă pentru a vă crea cont de utilizator pe Site, utilizați contul dumneavoastră de Facebook sau Google, GRIZZLY DIGITAL S.R.L. va prelucra următoarele date publice de profil afișate de aplicațiile respective: nume utilizator, adresa de e-mail.",
    en: "If to create a user account on the Website you use your Facebook or Google account, GRIZZLY DIGITAL S.R.L. will process the following public profile data displayed by those applications: username, email address."
  },
  privacy_cat_client_p3: {
    ro: "În cazul în care alegeți să vă creați cont de utilizator doar înainte de a finaliza comanda unui produs disponibil pe Site, se va solicita adresa dumneavoastră de e-mail în baza căreia va fi creat automat un cont. În cazul în care nu finalizați comanda, adresa de e-mail și celelalte date furnizate nu vor fi stocate de GRIZZLY DIGITAL S.R.L., iar contul creat va fi șters automat.",
    en: "If you choose to create a user account only before completing the purchase of a product available on the Website, your email address will be requested based on which an account will be created automatically. If you do not complete the order, the email address and other data provided will not be stored by GRIZZLY DIGITAL S.R.L., and the account created will be deleted automatically."
  },
  privacy_cat_visitor_h: { ro: "II.2. Dacă sunteți vizitator al Site-ului", en: "II.2. If you are a visitor of the Website" },
  privacy_cat_visitor_p1: {
    ro: "GRIZZLY DIGITAL S.R.L. va prelucra datele dumneavoastră cu caracter personal pe care le furnizați în mod direct în contextul utilizării Site-ului, cum ar fi datele pe care le furnizați în cadrul secțiunii de contact/întrebări/reclamații, în măsura în care ne contactați în acest fel.",
    en: "GRIZZLY DIGITAL S.R.L. will process the personal data you provide directly in the context of using the Website, such as the data you provide in the contact/questions/complaints section, to the extent you contact us in this way."
  },

  privacy_purposes_h: { ro: "Scopurile și temeiurile prelucrării", en: "Purposes and legal grounds of processing" },
  privacy_purposes_client_h: { ro: "III.1. Dacă sunteți client al Site-ului", en: "III.1. If you are a customer of the Website" },
  privacy_purposes_client_intro: { ro: "GRIZZLY DIGITAL S.R.L. prelucrează datele dumneavoastră cu caracter personal astfel:", en: "GRIZZLY DIGITAL S.R.L. processes your personal data as follows:" },
  privacy_purposes_client_li1: {
    ro: "Pentru desfășurarea relației contractuale dintre dumneavoastră și GRIZZLY DIGITAL S.R.L., respectiv pentru preluarea, validarea, expedierea și facturarea comenzii plasate pe Site, informarea dumneavoastră asupra stării comenzii, organizarea returului de produse comandate etc. Temei: Prelucrarea datelor dumneavoastră în acest scop are la bază contractul încheiat între dumneavoastră și GRIZZLY DIGITAL S.R.L., definit în cuprinsul Termenelor și Condițiilor. Furnizarea datelor dumneavoastră cu caracter personal este necesară pentru executarea acestui contract. Refuzul furnizării datelor poate avea drept consecință imposibilitatea derulării raporturilor contractuale dintre dumneavoastră și GRIZZLY DIGITAL S.R.L.",
    en: "To perform the contractual relationship between you and GRIZZLY DIGITAL S.R.L., namely to receive, validate, ship, and invoice the order placed on the Website, inform you about the order status, organize product returns, etc. Legal ground: The processing is based on the contract concluded between you and GRIZZLY DIGITAL S.R.L., as defined in the Terms and Conditions. Providing your personal data is necessary for executing this contract. Refusal may result in the impossibility of carrying out the contractual relationship."
  },
  privacy_purposes_client_li2: {
    ro: "Pentru îndeplinirea obligațiilor legale care incumbă GRIZZLY DIGITAL S.R.L. în contextul serviciilor prestate prin intermediul Site-ului, inclusiv a obligațiilor în materie fiscală, precum și în materie de arhivare. Temei: Prelucrarea datelor dumneavoastră pentru acest scop este necesară în baza unor obligații legale. Furnizarea datelor dumneavoastră în acest scop este necesară. Refuzul furnizării datelor poate avea drept consecință imposibilitatea GRIZZLY DIGITAL S.R.L. de a respecta obligațiile legale care îi revin și deci în imposibilitatea de a vă oferi serviciile prin intermediul Site-ului.",
    en: "To fulfill the legal obligations incumbent on GRIZZLY DIGITAL S.R.L. in the context of services provided via the Website, including tax obligations and archiving. Legal ground: Processing is necessary for compliance with legal obligations. Refusal may result in GRIZZLY DIGITAL S.R.L. being unable to comply with legal obligations and to provide services through the Website."
  },
  privacy_purposes_client_li3: {
    ro: "Pentru activități de marketing, respectiv pentru transmiterea, prin intermediul mijloacelor de comunicare la distanță (e-mail, sms) de comunicări comerciale privind produsele și serviciile oferite de GRIZZLY DIGITAL S.R.L., prin intermediul Site-ului. Temei: Prelucrarea datelor în acest scop are la bază consimțământul dumneavoastră, dacă alegeți să-l furnizați. Vă puteți exprima consimțământul prin bifarea căsuței corespunzătoare la crearea contului sau ulterior, în secțiunea Informațiile contului meu. Pentru dezabonare puteți folosi opțiunea de la finalul fiecărui e-mail/sms.",
    en: "For marketing activities, namely sending commercial communications regarding products and services offered by GRIZZLY DIGITAL S.R.L. via remote communication means (email, SMS). Legal ground: Processing is based on your consent, if you choose to provide it. You can give consent at account creation or later in My Account Information. You can unsubscribe using the option at the end of each email/SMS."
  },
  privacy_purposes_client_li4: {
    ro: "În scopul efectuării diverselor analize, raportări privind modul de funcționare a Site-ului, realizarea de profiluri de preferințe de consum, în principal, în vederea îmbunătățirii experienței oferite pe Site. Temei: Interesul legitim al GRIZZLY DIGITAL S.R.L. de a îmbunătăți permanent experiența clienților pe Site. Furnizarea datelor în acest scop este voluntară.",
    en: "For various analyses and reports on the operation of the Website, building consumer preference profiles, mainly to improve the experience on the Website. Legal ground: The legitimate interest of GRIZZLY DIGITAL S.R.L. to continuously improve the customer experience. Providing data for this purpose is voluntary."
  },

  privacy_purposes_visitor_h: { ro: "III.2. Dacă sunteți vizitator al Site-ului", en: "III.2. If you are a visitor of the Website" },
  privacy_purposes_visitor_li1: {
    ro: "Pentru activități de marketing, respectiv pentru transmiterea, prin intermediul mijloacelor de comunicare la distanță (e-mail, sms), de comunicări comerciale privind produsele și serviciile oferite de GRIZZLY DIGITAL S.R.L., prin intermediul Site-ului. Temei: consimțământul dumneavoastră, dacă alegeți să-l furnizați.",
    en: "For marketing activities, sending commercial communications via remote communication means (email, SMS) regarding products and services offered by GRIZZLY DIGITAL S.R.L. via the Website. Legal ground: your consent, if you choose to provide it."
  },
  privacy_purposes_visitor_li2: {
    ro: "Pentru rezolvarea plângerilor, reclamațiilor și pentru a monitoriza traficul și a îmbunătăți experiența dumneavoastră oferită pe Site. Temei: interesul legitim al GRIZZLY DIGITAL S.R.L. de a asigura funcționarea corectă a Site-ului și îmbunătățirea experienței vizitatorilor.",
    en: "To resolve complaints and to monitor traffic and improve your experience on the Website. Legal ground: the legitimate interest of GRIZZLY DIGITAL S.R.L. to ensure proper functioning of the Website and to improve visitor experience."
  },

  privacy_duration_h: { ro: "Durata pentru care vă prelucrăm datele", en: "Data retention period" },
  privacy_duration_p1: {
    ro: "Ca principiu, GRIZZLY DIGITAL S.R.L. va prelucra datele dumneavoastră cu caracter personal atât cât este necesar pentru realizarea scopurilor de prelucrare menționate mai sus. În cazul în care sunteți client, vom prelucra datele dumneavoastră pe întreaga durată a raporturilor contractuale și ulterior conform obligațiilor legale care revin în sarcina GRIZZLY DIGITAL S.R.L. (de ex., documente financiar-contabile ce se păstrează 10 ani).",
    en: "As a rule, GRIZZLY DIGITAL S.R.L. will process your personal data for as long as necessary to fulfill the purposes mentioned above. If you are a customer, we will process your data for the duration of the contractual relationship and subsequently according to legal obligations (e.g., financial-accounting documents retained for 10 years)."
  },
  privacy_duration_p2: {
    ro: "În situația în care sunteți client și vă exercitați opțiunea de ștergere a contului de utilizator, prin email la contact@grizzlymediapro.ro, GRIZZLY DIGITAL S.R.L. va interpreta această acțiune ca opțiunea dumneavoastră de a vă dezabona de la comunicări comerciale. Ștergerea contului nu are ca efect automat ștergerea datelor. Pentru încetarea prelucrării sau ștergerea datelor, vă puteți exercita drepturile detaliate mai jos. Dacă solicitați ștergerea contului, dar există comenzi active, cererea va fi înregistrată după finalizarea acestora. Dacă vă retrageți consimțământul pentru marketing, vom înceta prelucrarea în acest scop, fără a afecta prelucrările anterioare retragerii.",
    en: "If you are a customer and exercise the option to delete your user account by email at contact@grizzlymediapro.ro, GRIZZLY DIGITAL S.R.L. will treat this as an unsubscribe from commercial communications. Deleting the account does not automatically delete your personal data. To stop processing or to delete your data, you can exercise your rights detailed below. If you request account deletion but have active orders, the request will be recorded after their completion. If you withdraw consent for marketing, we will stop processing for that purpose without affecting processing carried out before withdrawal."
  },

  privacy_disclosure_h: { ro: "Dezvăluirea datelor cu caracter personal", en: "Disclosure of personal data" },
  privacy_disclosure_intro: {
    ro: "Pentru îndeplinirea scopurilor de prelucrare, GRIZZLY DIGITAL S.R.L. poate dezvălui datele dumneavoastră către parteneri, terțe persoane sau autorități publice, în următoarele cazuri exemplificativ enumerate:",
    en: "To fulfill the processing purposes, GRIZZLY DIGITAL S.R.L. may disclose your data to partners, third parties or public authorities, in the following illustrative cases:"
  },
  privacy_disclosure_li1: { ro: "Pentru administrarea Site-ului;", en: "For administration of the Website;" },
  privacy_disclosure_li2: { ro: "Pentru atribuirea de premii sau alte facilități în campanii promoționale organizate de GRIZZLY DIGITAL S.R.L.;", en: "For awarding prizes or other facilities in promotional campaigns organized by GRIZZLY DIGITAL S.R.L.;" },
  privacy_disclosure_li3: { ro: "Pentru menținerea, personalizarea și îmbunătățirea Site-ului și a serviciilor;", en: "For maintenance, personalization and improvement of the Website and services;" },
  privacy_disclosure_li4: { ro: "Pentru analiza datelor, testare și cercetare, monitorizarea tendințelor de utilizare, dezvoltarea caracteristicilor de siguranță și autentificare;", en: "For data analysis, testing and research, monitoring usage trends, developing safety features and authentication;" },
  privacy_disclosure_li5: { ro: "Pentru transmiterea de comunicări comerciale de marketing, în condițiile legii;", en: "For sending marketing communications, under the law;" },
  privacy_disclosure_li6: { ro: "Atunci când dezvăluirea este prevăzută de lege.", en: "When disclosure is required by law." },

  privacy_transfer_h: { ro: "Transferul datelor cu caracter personal", en: "Transfer of personal data" },
  privacy_transfer_p: { ro: "Datele cu caracter personal furnizate către GRIZZLY DIGITAL S.R.L. nu vor fi transferate în afara României.", en: "Personal data provided to GRIZZLY DIGITAL S.R.L. will not be transferred outside Romania." },

  privacy_rights_h: { ro: "Drepturile de care beneficiați", en: "Your rights" },
  privacy_rights_intro: { ro: "În condițiile legislației aplicabile, beneficiați de următoarele drepturi:", en: "Under applicable law, you have the following rights:" },
  privacy_rights_li_info: { ro: "Dreptul la informare – să primiți detalii privind activitățile de prelucrare efectuate de GRIZZLY DIGITAL S.R.L.;", en: "Right to be informed – to receive details regarding the processing activities carried out by GRIZZLY DIGITAL S.R.L.;" },
  privacy_rights_li_access: { ro: "Dreptul de acces – confirmarea prelucrării și detalii privind modul de prelucrare;", en: "Right of access – confirmation of processing and details about how your data is processed;" },
  privacy_rights_li_rect: { ro: "Dreptul la rectificare – corectarea fără întârzieri a datelor inexacte și completarea celor incomplete;", en: "Right to rectification – prompt correction of inaccurate data and completion of incomplete data;" },
  privacy_rights_li_delete_intro: { ro: "Dreptul la ștergerea datelor (\"dreptul de a fi uitat\") atunci când: ", en: "Right to erasure (\"right to be forgotten\") where:" },
  privacy_rights_li_delete_li1: { ro: "datele nu mai sunt necesare scopurilor;", en: "the data are no longer necessary for the purposes;" },
  privacy_rights_li_delete_li2: { ro: "consimțământul este retras și nu există alt temei;", en: "consent is withdrawn and there is no other legal ground;" },
  privacy_rights_li_delete_li3: { ro: "vă opuneți prelucrării și nu există motive legitime care să prevaleze;", en: "you object to processing and there are no overriding legitimate grounds;" },
  privacy_rights_li_delete_li4: { ro: "datele au fost prelucrate ilegal;", en: "the data have been processed unlawfully;" },
  privacy_rights_li_delete_li5: { ro: "datele trebuie șterse pentru respectarea unei obligații legale;", en: "the data must be erased for compliance with a legal obligation;" },
  privacy_rights_li_delete_li6: { ro: "datele au fost colectate în legătură cu servicii ale societății informaționale.", en: "the data were collected in relation to the offer of information society services." },
  privacy_rights_li_delete_note: { ro: "În urma solicitării de ștergere, GRIZZLY DIGITAL S.R.L. poate anonimiză datele și continua prelucrarea în scopuri statistice.", en: "Following an erasure request, GRIZZLY DIGITAL S.R.L. may anonymize the data and continue processing for statistical purposes." },
  privacy_rights_li_restrict_intro: { ro: "Dreptul la restricționarea prelucrării când:", en: "Right to restriction of processing when:" },
  privacy_rights_li_restrict_li1: { ro: "contestați exactitatea datelor;", en: "you contest the accuracy of the data;" },
  privacy_rights_li_restrict_li2: { ro: "prelucrarea este ilegală și vă opuneți ștergerii;", en: "processing is unlawful and you oppose erasure;" },
  privacy_rights_li_restrict_li3: { ro: "datele nu mai sunt necesare operatorului, dar le solicitați pentru apărarea unui drept;", en: "the controller no longer needs the data but you require them for legal claims;" },
  privacy_rights_li_restrict_li4: { ro: "vă opuneți prelucrării până la verificarea prevalenței intereselor legitime.", en: "you object to processing while verifying whether the controller's legitimate grounds override yours." },
  privacy_rights_li_port: { ro: "Dreptul la portabilitatea datelor – primirea și transmiterea datelor într-un format structurat;", en: "Right to data portability – to receive and transmit your data in a structured format;" },
  privacy_rights_li_object_intro: { ro: "Dreptul la obiecție:", en: "Right to object:" },
  privacy_rights_li_object_li1: { ro: "oricând, din motive legate de situația particulară, la prelucrări întemeiate pe interes legitim sau sarcină publică (inclusiv profilare);", en: "at any time, for reasons related to your particular situation, to processing based on legitimate interest or public task (including profiling);" },
  privacy_rights_li_object_li2: { ro: "oricând, în mod gratuit, la prelucrări în scop de marketing direct.", en: "at any time, free of charge, to processing for direct marketing purposes." },
  privacy_rights_li_object_note: { ro: "După exercitarea dreptului la obiecție, datele nu vor mai fi prelucrate în aceste scopuri.", en: "After exercising the right to object, the data will no longer be processed for these purposes." },
  privacy_rights_li_auto: { ro: "Dreptul de a nu fi supus unei decizii individuale automate cu efecte juridice sau similare semnificative.", en: "Right not to be subject to a decision based solely on automated processing producing legal or similarly significant effects." },

  privacy_complaints_h: { ro: "Reclamații", en: "Complaints" },
  privacy_complaints_p: { ro: "Dacă aveți sesizări privind modul de prelucrare a datelor, vă puteți adresa Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal sau puteți depune o plângere la instanțele de judecată. De asemenea, vă puteți adresa Autorității pentru Protecția Consumatorilor.", en: "If you have complaints about how your data has been processed, you may contact the National Supervisory Authority for Personal Data Processing or file a complaint with the courts. You may also contact the Consumer Protection Authority." },

  privacy_contact_h: { ro: "Contact", en: "Contact" },
  privacy_contact_p1: { ro: "Pentru orice solicitare sau întrebare legată de prelucrarea datelor, ne puteți scrie la adresa: Județul Dolj, Municipiul Craiova, Strada Constantin Lecca 66, sau la e-mail: contact@grizzlymediapro.ro, ori telefonic: +40750227013.", en: "For any request or question regarding data processing, please write to: Dolj County, Craiova Municipality, 66 Constantin Lecca Street, or email: contact@grizzlymediapro.ro, or by phone: +40750227013." },
  privacy_cookies_note_intro: { ro: "Această pagină de internet folosește fișiere de tip cookie. Pentru mai multe informații, vă rugăm să accesați:", en: "This website uses cookies. For more information, please see:" },

  // ===== Pagina Politica de Cookies =====
  cookies_title: { ro: "Politică privind fișierele cookies", en: "Cookies Policy" },
  cookies_updated: { ro: "Ultima actualizare: 1 septembrie 2023", en: "Last updated: September 1, 2023" },

  cookies_intro_h: { ro: "Introducere", en: "Introduction" },
  cookies_intro_p: {
    ro: "Prezenta Politică privind fișierele cookies se aplică tuturor utilizatorilor paginii de internet a GRIZZLY DIGITAL S.R.L. Informațiile de mai jos au ca scop informarea utilizatorilor cu privire la plasarea, utilizarea și administrarea cookie-urilor în contextul navigării.",
    en: "This Cookies Policy applies to all users of GRIZZLY DIGITAL S.R.L.'s website. The information below aims to inform users about the placement, use and administration of cookies in the context of browsing."
  },

  cookies_what_h: { ro: "Ce sunt cookie-urile?", en: "What are cookies?" },
  cookies_what_p1: {
    ro: "Folosim termenul 'cookie' pentru a ne referi la modulele cookie și la tehnologii similare prin care pot fi colectate informații automat. Un 'Internet Cookie' reprezintă un fișier mic, format din litere și numere, stocat pe computerul, terminalul mobil sau pe alte echipamente ale unui utilizator.",
    en: "We use the term 'cookie' to refer to cookies and similar technologies through which information can be collected automatically. An 'Internet Cookie' is a small file consisting of letters and numbers, stored on a user's computer, mobile terminal or other equipment."
  },
  cookies_what_p2: {
    ro: "Cookie-urile sunt instalate la solicitarea unui web-server către un browser (de ex.: Chrome, Firefox). Odată instalate, rămân 'pasive': nu conțin programe software, viruși sau spyware și nu accesează informațiile de pe hard disk.",
    en: "Cookies are installed at the request of a web server to a browser (e.g., Chrome, Firefox). Once installed, they remain 'passive': they do not contain software, viruses or spyware and do not access information on the hard drive."
  },
  cookies_what_list_h: { ro: "Un cookie este format din două părți:", en: "A cookie consists of two parts:" },
  cookies_what_li1: { ro: "numele cookie-ului;", en: "the cookie name;" },
  cookies_what_li2: { ro: "conținutul sau valoarea cookie-ului.", en: "the cookie content or value." },
  cookies_what_p3: {
    ro: "Din punct de vedere tehnic, doar web-serverul care a trimis cookie-ul îl poate accesa din nou când utilizatorul revine pe pagina asociată acelui server.",
    en: "From a technical perspective, only the web server that sent the cookie can access it again when the user returns to the page associated with that server."
  },

  cookies_purposes_h: { ro: "Pentru ce scopuri sunt utilizate cookie-urile", en: "For what purposes are cookies used" },
  cookies_purposes_intro: {
    ro: "Cookie-urile oferă o experiență de navigare mai bună și servicii adaptate nevoilor fiecărui utilizator, de exemplu:",
    en: "Cookies provide a better browsing experience and services tailored to each user's needs, for example:"
  },
  cookies_purposes_li1: { ro: "îmbunătățirea utilizării paginii (inclusiv identificarea erorilor);", en: "improving the use of the site (including identifying errors);" },
  cookies_purposes_li2: { ro: "statistici anonime privind modul de utilizare, pentru GRIZZLY DIGITAL S.R.L.;", en: "anonymous statistics on usage for GRIZZLY DIGITAL S.R.L.;" },
  cookies_purposes_li3: { ro: "anticiparea unor bunuri/servicii viitoare, în funcție de cele accesate.", en: "anticipating future goods/services based on those accessed." },
  cookies_purposes_note: {
    ro: "Utilizarea cookie-urilor permite memorarea anumitor setări/preferințe stabilite de utilizatori.",
    en: "Using cookies allows remembering certain settings/preferences set by users."
  },
  cookies_prefs_list_h: { ro: "Exemple de setări memorate:", en: "Examples of stored settings:" },
  cookies_prefs_li1: { ro: "limba în care este vizualizată pagina;", en: "the language in which the page is viewed;" },
  cookies_prefs_li2: { ro: "moneda în care se exprimă prețurile/tarifele;", en: "the currency in which prices/fees are expressed;" },
  cookies_prefs_li3: { ro: "facilitarea accesului în contul utilizatorilor;", en: "facilitating user account login;" },
  cookies_prefs_li4: { ro: "postarea comentariilor pe site.", en: "posting comments on the site." },

  cookies_lifetime_h: { ro: "Care este durata de viață a cookie-urilor?", en: "What is the lifespan of cookies?" },
  cookies_lifetime_intro: {
    ro: "Durata de viață a cookie-urilor variază în funcție de scopul plasării. Există următoarele categorii:",
    en: "The lifespan of cookies varies depending on the purpose. The following categories exist:"
  },
  cookies_lifetime_li1: { ro: "Cookie-uri de sesiune – se șterg automat la închiderea browserului;", en: "Session cookies – automatically deleted when the browser is closed;" },
  cookies_lifetime_li2: { ro: "Cookie-uri persistente/fixe – rămân stocate până la data de expirare sau ștergerea manuală.", en: "Persistent/fixed cookies – remain stored until their expiry date or manual deletion." },

  cookies_thirdparty_h: { ro: "Ce sunt cookie-urile plasate de terți?", en: "What are third‑party cookies?" },
  cookies_thirdparty_p: {
    ro: "Anumite secțiuni pot fi furnizate de terți, caz în care cookie-urile sunt denumite 'third‑party cookies'. Terții trebuie să respecte regulile de protecție a datelor și Politica de Confidențialitate. Exemple: Google Analytics, Facebook.",
    en: "Certain sections may be provided by third parties, in which case the cookies are called 'third‑party cookies'. Third parties must comply with data protection rules and the Privacy Policy. Examples: Google Analytics, Facebook."
  },

  cookies_types_used_h: { ro: "Ce cookie-uri sunt folosite", en: "What cookies are used" },
  cookies_types_list_h: { ro: "Prin vizitarea site-ului pot fi plasate:", en: "By visiting the site, the following may be placed:" },
  cookies_types_li1: { ro: "Cookie-uri de performanță a paginii;", en: "Page performance cookies;" },
  cookies_types_li2: { ro: "Cookie-uri de analiză a utilizatorilor;", en: "User analytics cookies;" },
  cookies_types_li3: { ro: "Cookie-uri pentru geotargetting;", en: "Geotargeting cookies;" },
  cookies_types_li4: { ro: "Cookie-uri de înregistrare;", en: "Registration cookies;" },
  cookies_types_li5: { ro: "Cookie-uri pentru publicitate;", en: "Advertising cookies;" },
  cookies_types_li6: { ro: "Cookie-uri ale furnizorilor de publicitate.", en: "Advertising provider cookies." },

  cookies_perf_h: { ro: "Cookie-uri de performanță", en: "Performance cookies" },
  cookies_perf_p: { ro: "Memorează preferințele astfel încât să nu fie necesară reconfigurarea la vizite ulterioare.", en: "Remember preferences so reconfiguration is not required on subsequent visits." },

  cookies_ua_h: { ro: "Cookie-uri de analiză a utilizatorilor", en: "User analytics cookies" },
  cookies_ua_p: { ro: "Indică dacă un utilizator a mai vizitat site-ul; utilizate doar în scopuri statistice.", en: "Indicate whether a user has visited the site before; used for statistical purposes only." },

  cookies_geo_h: { ro: "Cookie-uri pentru geotargetting", en: "Geotargeting cookies" },
  cookies_geo_p: { ro: "Utilizate de un soft care stabilește țara de proveniență a utilizatorului. Reclamele pot rămâne aceleași indiferent de limba selectată.", en: "Used by software that determines the user's country of origin. Ads may remain the same regardless of selected language." },

  cookies_reg_h: { ro: "Cookie-uri pentru înregistrare", en: "Registration cookies" },
  cookies_reg_p: { ro: "Se generează la înregistrarea pe site pentru a memora acest demers și pentru a afișa contul cu care sunteți logat. Dacă nu a fost selectată opțiunea 'păstrează-mă înregistrat', se șterg la terminarea sesiunii.", en: "Generated when registering on the site to remember this step and to display the account you are logged in with. If 'keep me logged in' is not selected, they are deleted at session end." },

  cookies_adv_h: { ro: "Cookie-uri pentru publicitate", en: "Advertising cookies" },
  cookies_adv_p: { ro: "Permit aflarea vizualizării unei reclame, tipul acesteia și timpul scurs. Sunt folosite pentru targetarea publicității. Stochează informații despre conținutul vizualizat, nu despre utilizatori.", en: "Allow determining whether an ad was viewed, its type and elapsed time. Used for ad targeting. They store information about viewed content, not about users." },

  cookies_info_h: { ro: "Ce tip de informații sunt stocate?", en: "What kind of information is stored?" },
  cookies_info_p: { ro: "Cookie-urile păstrează informații într-un fișier text mic ce permite recunoașterea browserului până la expirare sau ștergere.", en: "Cookies store information in a small text file that allows the browser to be recognized until expiry or deletion." },

  cookies_browser_h: { ro: "Particularizarea setărilor browserului", en: "Customizing browser settings" },
  cookies_browser_p: { ro: "Dacă dispozitivul este folosit doar de dumneavoastră, pot fi setate termene lungi de expirare. Dacă este folosit de mai multe persoane, luați în calcul ștergerea datelor la închiderea browserului.", en: "If the device is used only by you, long expiry terms may be set. If used by multiple people, consider deleting data on browser close." },

  cookies_disable_h: { ro: "Cum pot fi oprite cookie-urile?", en: "How can cookies be disabled?" },
  cookies_disable_p: { ro: "Dezactivarea/refuzul cookie-urilor poate îngreuna vizitarea și limita utilizarea. Toate browserele moderne permit schimbarea setărilor pentru cookie-uri în secțiunea 'opțiuni' sau 'preferințe'. Refuzarea cookie-urilor nu înseamnă că nu veți mai primi publicitate online, ci că nu va fi adaptată preferințelor.", en: "Disabling/refusing cookies may make the site harder to use and limit functionality. All modern browsers allow changing cookie settings in 'options' or 'preferences'. Refusing cookies does not mean you will no longer receive online ads, only that they will not be tailored to your preferences." },
  cookies_disable_links_h: { ro: "Setări cookie pentru browsere populare:", en: "Cookie settings for popular browsers:" },
  cookies_disable_li_ie: { ro: "Cookie settings in Internet Explorer", en: "Cookie settings in Internet Explorer" },
  cookies_disable_li_ff: { ro: "Cookie settings in Firefox", en: "Cookie settings in Firefox" },
  cookies_disable_li_ch: { ro: "Cookie settings in Chrome", en: "Cookie settings in Chrome" },
  cookies_disable_li_sa: { ro: "Cookie settings in Safari", en: "Cookie settings in Safari" },

  // ===== Pagina Termeni și Condiții =====
  terms_title: { ro: "Termeni și Condiții", en: "Terms and Conditions" },
  terms_updated: { ro: "Ultima actualizare: 1 august 2025", en: "Last updated: August 1, 2025" },

  terms_intro_h: { ro: "Introducere", en: "Introduction" },
  terms_intro_p: {
    ro: "Prezenții Termeni și Condiții guvernează utilizarea site-ului și a serviciilor oferite de GRIZZLY DIGITAL S.R.L. Prin accesarea sau utilizarea site-ului, confirmați că ați citit, înțeles și acceptat acești termeni.",
    en: "These Terms and Conditions govern the use of the website and services provided by GRIZZLY DIGITAL S.R.L. By accessing or using the website, you confirm that you have read, understood and accepted these terms."
  },

  terms_services_h: { ro: "Servicii", en: "Services" },
  terms_services_p: {
    ro: "GRIZZLY DIGITAL S.R.L. oferă servicii de dezvoltare web, social media și branding. Detaliile fiecărui proiect (scop, livrabile, termene) sunt stabilite în contract sau ofertă acceptată.",
    en: "GRIZZLY DIGITAL S.R.L. provides web development, social media and branding services. Project details (scope, deliverables, timelines) are defined in the contract or accepted offer."
  },

  terms_account_h: { ro: "Cont și acces", en: "Account and access" },
  terms_account_p: {
    ro: "Pentru anumite funcționalități poate fi necesară crearea unui cont. Sunteți responsabil pentru păstrarea confidențialității datelor de autentificare și pentru toate activitățile desfășurate prin cont.",
    en: "Certain features may require creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities performed through the account."
  },

  terms_orders_h: { ro: "Comenzi și contractare", en: "Orders and contracting" },
  terms_orders_p: {
    ro: "Plasarea unei comenzi sau acceptarea unei oferte nu creează obligații până la confirmarea scrisă de către GRIZZLY DIGITAL S.R.L. Contractul se consideră încheiat la confirmarea comenzii și/sau semnarea documentelor.",
    en: "Placing an order or accepting an offer does not create obligations until written confirmation by GRIZZLY DIGITAL S.R.L. The contract is concluded upon order confirmation and/or signing the documents."
  },

  terms_pricing_h: { ro: "Prețuri și plăți", en: "Pricing and payments" },
  terms_pricing_p: {
    ro: "Prețurile sunt exprimate în moneda indicată în ofertă și pot include sau nu TVA. Plata se efectuează conform termenilor agreați. Întârzierea la plată poate suspenda livrările până la achitare.",
    en: "Prices are expressed in the currency indicated in the offer and may include or exclude VAT. Payment is made according to agreed terms. Late payment may suspend deliveries until settlement."
  },

  terms_ip_h: { ro: "Proprietate intelectuală", en: "Intellectual property" },
  terms_ip_p: {
    ro: "Conținutul site-ului și materialele livrate (dacă nu se stipulează altfel) sunt protejate de drepturi de autor. Clientul primește drepturile de utilizare prevăzute în contract, după plata integrală.",
    en: "The website content and delivered materials (unless otherwise stipulated) are protected by copyright. The client receives the usage rights specified in the contract upon full payment."
  },

  terms_liability_h: { ro: "Limitarea răspunderii", en: "Limitation of liability" },
  terms_liability_p: {
    ro: "În măsura permisă de lege, GRIZZLY DIGITAL S.R.L. nu răspunde pentru pierderi indirecte, de oportunitate sau profit. Răspunderea totală este limitată la valoarea sumelor plătite pentru serviciul relevant.",
    en: "To the extent permitted by law, GRIZZLY DIGITAL S.R.L. is not liable for indirect, opportunity or profit losses. Total liability is limited to the amounts paid for the relevant service."
  },

  terms_force_h: { ro: "Forță majoră", en: "Force majeure" },
  terms_force_p: {
    ro: "Nicio parte nu răspunde pentru neexecutare când aceasta se datorează unui eveniment de forță majoră, așa cum este definit de lege. Executarea va fi reluată după încetarea evenimentului.",
    en: "No party is liable for non-performance when due to a force majeure event as defined by law. Performance will resume after the event ends."
  },

  terms_privacy_h: { ro: "Date personale", en: "Personal data" },
  terms_privacy_p: {
    ro: "Prelucrarea datelor personale se realizează conform Politicii de Confidențialitate. Vă rugăm să consultați {policy} pentru detalii.",
    en: "Personal data processing is carried out according to the Privacy Policy. Please see {policy} for details."
  },

  terms_cookies_h: { ro: "Cookies", en: "Cookies" },
  terms_cookies_p: {
    ro: "Acest site utilizează cookies conform Politicii de Cookies. Detalii în {policy}.",
    en: "This site uses cookies in accordance with the Cookies Policy. Details in {policy}."
  },

  terms_changes_h: { ro: "Modificări", en: "Changes" },
  terms_changes_p: {
    ro: "Ne rezervăm dreptul de a modifica Termenii și Condițiile. Versiunea curentă este disponibilă pe această pagină și se aplică din momentul publicării.",
    en: "We reserve the right to modify the Terms and Conditions. The current version is available on this page and applies from the time of publication."
  },

  terms_law_h: { ro: "Legea aplicabilă și jurisdicția", en: "Governing law and jurisdiction" },
  terms_law_p: {
    ro: "Acești termeni sunt guvernați de legea română. Orice dispută va fi soluționată de instanțele competente din Craiova, România.",
    en: "These terms are governed by Romanian law. Any dispute will be settled by the competent courts in Craiova, Romania."
  },

  terms_contact_h: { ro: "Contact", en: "Contact" },
  terms_contact_p: {
    ro: "GRIZZLY DIGITAL S.R.L., Județul Dolj, Municipiul Craiova, Strada Constantin Lecca 66. E-mail: contact@grizzlymediapro.ro, Tel: +40750227013.",
    en: "GRIZZLY DIGITAL S.R.L., Dolj County, Craiova Municipality, 66 Constantin Lecca Street. Email: contact@grizzlymediapro.ro, Phone: +40750227013."
  },

  // Testimonials section — ordine: software/product partner first
  testimonials_title: { ro: "Ce spun clienții noștri", en: "What our clients say" },
  testimonials_highlight: { ro: " despre noi", en: " about us" },

  testimonial_1_quote: {
    ro: "Interacțiunea mea cu Grizzly Media Pro a fost una super profesionistă și productivă. Am apelat la ei pentru platforma de studenți Vocea Campusului. Au făcut proiectul de la zero și nu doar că au reușit să implementeze toate ideile mele, dar au și contribuit la dezvoltarea lor. Chiar și după finalizarea proiectului m-au susținut cu tot ce am avut nevoie (promovare pe social media) și mi-au oferit consultanță gratuită în momentele de impas. Colaborarea cu ei nu a fost doar contractuală, ci și o experiență de socializare și prietenie. Pot spune că oricând am apelat la ei pentru modificări aduse platformei au fost foarte prompți și m-au ajutat fără vreo obligație. Întotdeauna răspunsul lor era „suntem la început de drum și un client fericit ne aduce și nouă mulțumire că am putut ajuta”. Încă un lucru pe care trebuie să îl menționez este că în momentul în care spun că vor face ceva, se țin de cuvânt, chiar dacă unele lucruri nu sunt menționate în contractul de colaborare. În concluzie, recomand serviciile Grizzly Media Pro.",
    en: "My interaction with Grizzly Media Pro was highly professional and productive. I turned to them for the Vocea Campusului student platform. They built the project from scratch and not only implemented all my ideas, but also helped develop them further. Even after the project was finished, they supported me with everything I needed (social media promotion) and offered free consulting when I hit dead ends. Working with them wasn't just contractual; it was also a genuine, friendly experience. Whenever I asked for platform changes, they were prompt and helped without any obligation. Their answer was always that they're at the beginning of their journey and a happy client brings them satisfaction too. Another thing worth mentioning: when they say they'll do something, they keep their word, even for things not in the contract. In short, I recommend Grizzly Media Pro."
  },
  testimonial_1_name: { ro: "Liviu C.", en: "Liviu C." },
  testimonial_1_company: { ro: "Vocea Campusului", en: "Vocea Campusului" },

  testimonial_2_quote: {
    ro: "Am colaborat cu Grizzly Media Pro pentru dezvoltarea website-ului SmartHomeMall și pentru activități conexe de comunicare. Am apreciat în mod special abordarea lor structurată: au clarificat cerințele de la început, au propus soluții concrete și au gestionat modificările apărute pe parcurs fără întârzieri inutile. Comunicarea a fost constantă și profesionistă, iar livrările au fost făcute cu atenție la detalii. Pentru noi, Grizzly Media Pro a fost un partener pe care te poți baza atunci când ai nevoie de rezultate, nu doar de execuție.",
    en: "We worked with Grizzly Media Pro on developing the SmartHomeMall website and related communication activities. I especially appreciated their structured approach: they clarified requirements from the start, proposed concrete solutions, and handled changes along the way without unnecessary delays. Communication was consistent and professional, and deliveries were done with attention to detail. For us, Grizzly Media Pro was a partner you can rely on when you need results, not just execution."
  },
  testimonial_2_name: { ro: "Jean Velicu", en: "Jean Velicu" },
  testimonial_2_company: { ro: "SmartHomeMall", en: "SmartHomeMall" },

  testimonial_3_quote: {
    ro: "Colaborarea a fost una excelentă de la început până la sfârșit. Echipa a fost profesionistă, promptă și atentă la toate detaliile, iar comunicarea a fost foarte bună pe tot parcursul. Rezultatul final a fost exact așa cum mi-am dorit. Recomand cu încredere oricui își dorește servicii de calitate și o experiență fără griji!",
    en: "The collaboration was excellent from start to finish. The team was professional, prompt, and attentive to every detail, and communication was great throughout. The final result was exactly what I wanted. I confidently recommend them to anyone looking for quality services and a worry-free experience!"
  },
  testimonial_3_name: { ro: "Mihai", en: "Mihai" },
  testimonial_3_company: { ro: "Gama Invest", en: "Gama Invest" },

  testimonial_4_quote: {
    ro: "Colaborarea a fost foarte bună pe tot parcursul proiectului. A fost foarte simplu să lucrăm datorită comunicării eficiente și prin prisma acestui lucru au livrat un site exact cum mi-am imaginat. Recomand cu încredere oricui caută seriozitate și profesionalism.",
    en: "The collaboration was very good throughout the project. It was easy to work together thanks to efficient communication, and through that they delivered a website exactly as I imagined. I confidently recommend them to anyone looking for seriousness and professionalism."
  },
  testimonial_4_name: { ro: "Mihai C.", en: "Mihai C." },
  testimonial_4_company: { ro: "RealImob", en: "RealImob" },

  testimonial_5_quote: {
    ro: "Am avut o colaborare excelentă cu echipa Grizzly Media Pro pentru dezvoltarea magazinului meu online de produse coreene. M-au ajutat cu realizarea site-ului, cu reclamele și administrarea lor, dar și cu filmarea conținutului. Totul a decurs foarte ușor, iar comunicarea a fost mereu deschisă și eficientă. Mi-a plăcut că s-au implicat cu adevărat, au venit cu idei bune și au fost atenți la detalii. Se vede că pun pasiune în ceea ce fac și că își doresc să obțină rezultate, nu doar să bifeze niște task-uri. Îi recomand cu drag oricui caută o echipă de încredere și profesionistă cu care să lucreze.",
    en: "I had an excellent collaboration with the Grizzly Media Pro team for developing my online store of Korean products. They helped with the website, ads and their management, as well as content filming. Everything went smoothly, and communication was always open and efficient. I liked that they truly got involved, came up with good ideas, and paid attention to detail. You can tell they put passion into what they do and aim for results, not just checking off tasks. I gladly recommend them to anyone looking for a trustworthy, professional team."
  },
  testimonial_5_name: { ro: "Cristi V.", en: "Cristi V." },
  testimonial_5_company: { ro: "K-Wonderland", en: "K-Wonderland" },

  testimonial_6_quote: {
    ro: "Colaborarea noastră cu Grizzly Media Pro (website, social media și ads) a fost exact genul de parteneriat pe care îl cauți când vrei să crești sănătos: comunicare ușoară, reacție rapidă și multă răbdare. Ce am apreciat cel mai mult a fost focusul lor real pe client: indiferent de situație, de câte modificări au apărut pe parcurs sau de cât de multe solicitări am avut, au rămas implicați, flexibili și orientați pe soluții. Pentru noi, Grizzly Media Pro a însemnat nu doar execuție bună, ci și suport constant și o atitudine profesionistă, prietenoasă.",
    en: "Our collaboration with Grizzly Media Pro (website, social media, and ads) was exactly the kind of partnership you want when you're looking to grow healthily: easy communication, quick response, and a lot of patience. What I appreciated most was their real focus on the client: no matter the situation, how many changes came up, or how many requests we had, they stayed involved, flexible, and solution-oriented. For us, Grizzly Media Pro meant not just good execution, but constant support and a professional, friendly attitude."
  },
  testimonial_6_name: { ro: "Anamaria Velicu", en: "Anamaria Velicu" },
  testimonial_6_company: { ro: "C.M.D. EXTERNAL GROUP SRL", en: "C.M.D. EXTERNAL GROUP SRL" },

  testimonial_7_quote: {
    ro: "Colaborarea cu Grizzly Media Pro a fost una excelentă încă de la început. M-au impresionat prin profesionalism, seriozitate și implicarea de care dau dovadă în fiecare proiect. M-au ajutat atât cu realizarea și dezvoltarea site-ului, cât și cu promovarea în mediul online și crearea de reel-uri pentru activitatea mea din domeniul stomatologic. Fiecare material este realizat cu atenție la detalii, creativitate și înțelegerea foarte bună a imaginii pe care îmi doresc să o transmit. Îi recomand cu toată încrederea oricui își dorește servicii de marketing și promovare realizate la un nivel înalt.",
    en: "Working with Grizzly Media Pro was excellent from the start. They impressed me with their professionalism, seriousness, and involvement in every project. They helped both with building and developing the website, and with online promotion and creating reels for my dental practice. Every piece of content is made with attention to detail, creativity, and a strong understanding of the image I want to convey. I wholeheartedly recommend them to anyone looking for high-level marketing and promotion services."
  },
  testimonial_7_name: { ro: "Andreea H.", en: "Andreea H." },
  testimonial_7_company: { ro: "Stomatologie", en: "Dental practice" },

  // 404 Not Found Page
  not_found_title: { ro: "Pagina nu a fost găsită", en: "Page not found" },
  not_found_description: { ro: "Se pare că pagina pe care o cauți nu există sau a fost mutată. Nu te îngrijora, te ajutăm să găsești ceea ce cauți!", en: "It seems the page you're looking for doesn't exist or has been moved. Don't worry, we'll help you find what you're looking for!" },
  not_found_home_button: { ro: "Înapoi acasă", en: "Back to home" },
  not_found_contact_button: { ro: "Contactează-ne", en: "Contact us" },
  not_found_helpful_links: { ro: "Linkuri utile:", en: "Helpful links:" },
  not_found_need_help: { ro: "Ai nevoie de ajutor?", en: "Need help?" }
};


