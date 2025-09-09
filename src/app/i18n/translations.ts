export type LanguageCode = "ro" | "en";

export type TranslationDictionary = Record<string, { ro: string; en: string }>; // values to be filled by user

// IDs centralizate pentru toate textele. Completează valorile EN/RO după preferință.
export const translations: TranslationDictionary = {
  // Navbar & Hero
  nav_services: { ro: "Servicii", en: "Services" },
  nav_portfolio: { ro: "Portofoliu", en: "Portfolio" },
  nav_about: { ro: "Despre", en: "About" },
  nav_contact: { ro: "Contact", en: "Contact" },
  cta_schedule: { ro: "Programează o întâlnire!", en: "Schedule a meeting!" },
  hero_title: {
    ro: "Nu construim doar site-uri, construim branduri.",
    en: "We don't just build websites, we build brands.",
  },
  // Hero segmented (pentru părți evidențiate)
  hero_t1: { ro: "Nu construim doar ", en: "We don't just build " },
  hero_h1: { ro: "site-uri", en: "websites" },
  hero_t2: { ro: ", construim ", en: ", we build " },
  hero_h2: { ro: "branduri", en: "brands" },
  hero_t3: { ro: ".", en: "." },
  hero_subheading: { 
    ro: "Transformăm viziunea ta în realitate digitală cu design personalizat și tehnologii de ultimă generație.", 
    en: "We turn your vision into digital reality with custom design and cutting-edge technologies." 
  },
  
  // Hero description
  hero_desc_t1: { ro: "Grizzly Media Pro este o agenție de dezvoltare digitală specializată în ", en: "Grizzly Media Pro is a digital development agency specialized in " },
  hero_desc_h1: { ro: "web development", en: "web development" },
  hero_desc_t2: { ro: ", ", en: ", " },
  hero_desc_h2: { ro: "mobile development", en: "mobile development" },
  hero_desc_t3: { ro: " și ", en: " and " },
  hero_desc_h3: { ro: "marketing online", en: "online marketing" },
  hero_desc_t4: { ro: ". Transformăm viziunea ta în realitate digitală cu soluții personalizate și tehnologii de ultimă generație.", en: ". We turn your vision into digital reality with personalized solutions and cutting-edge technologies." },
  
  prefs_heading: { ro: "Mai întâi, alege-ți preferințele", en: "First, choose your preferences" },

  // Stakes section
  stakes_title: {
    ro: "Fără o prezență digitală clară, clienții te uită și competiția te depășește.",
    en: "Without a clear digital presence, clients look elsewhere and your competition gets ahead.",
  },
  // Stakes segmented (pentru evidențiere)
  stakes_h1: { ro: "Fără", en: "Without" },
  stakes_t1: { ro: " o prezență digitală clară, clienții ", en: " a clear digital presence, clients " },
  stakes_h2: { ro: "te uită", en: "look elsewhere" },
  stakes_t2: { ro: " și competiția ", en: " and competition " },
  stakes_h3: { ro: "te depășește.", en: "gets ahead." },
  stake_1_title: { ro: "1. Ești invizibil pentru clienți noi", en: "1. You're invisible to new clients" },
  stake_1_desc: {
    ro: "Fără un website modern și o prezență activă în social media, afacerea ta nici nu există în ochii celor care te caută online.",
    en: "Without a modern website and active social media presence, your business doesn't even exist in the eyes of those searching online.",
  },
  stake_2_title: { ro: "2. Pierzi încrederea clienților", en: "2. You lose faith from clients" },
  stake_2_desc: {
    ro: "Un brand incoerent, un site neprofesionist sau lipsa activității transmit nesiguranță. Clienții aleg concurența, chiar dacă produsele sau serviciile tale sunt mai bune.",
    en: "An inconsistent brand, an unprofessional website, or lack of activity transmit uncertainty. Clients choose the competition, even if your products or services are better.",
  },
  stake_3_title: { ro: "3. Ratezi oportunități de creștere", en: "3. You miss growth opportunities" },
  stake_3_desc: {
    ro: "Fără o strategie digitală, pierzi timp și bani pe tactici care nu dau rezultate. Între timp, competiția ta avansează și câștigă piața.",
    en: "Without a digital strategy, you waste time and money on tactics that don't work. Meanwhile, your competition advances and wins the market.",
  },

  // Beneficii section heading
  benefits_heading: {
    ro: "Afacerea ta merită vizibilitate, încredere și creștere.",
    en: "Your business deserves visibility, credibility, and growth.",
  },
  // Benefits segmented
  benefits_t1: { ro: "Afacerea ta merită ", en: "Your business deserves " },
  benefits_h1: { ro: "vizibilitate", en: "visibility" },
  benefits_t2: { ro: ", ", en: ", " },
  benefits_h2: { ro: "încredere", en: "credibility" },
  benefits_t3: { ro: " și ", en: " and " },
  benefits_h3: { ro: "creștere", en: "growth" },
  benefit_1_title: { ro: "Configurăm soluții personalizate pentru afacerea ta", en: "We customize solutions for your business" },
  benefit_1_desc: {
    ro: "Fiecare business are particularități unice – și soluțiile noastre sunt create să ți se potrivească perfect.",
    en: "Every business is unique – and our solutions are tailored to fit perfectly.",
  },
  benefit_2_title: { ro: "Site-uri și aplicații web realizate de la 0", en: "Website and app development from scratch" },
  benefit_2_desc: {
    ro: "Dezvoltate pe măsura brandului tău, cu design modern și funcționalitate impecabilă.",
    en: "Developed to your brand's scale, with modern design and flawless functionality.",
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

  // Beneficii noi - carduri cu statistici
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

  benefit_projects_label: { ro: "Finalizate", en: "Completed" },
  benefit_projects_count: { ro: "50 Proiecte", en: "50 Projects" },
  benefit_projects_view: { ro: "Vezi", en: "View" },

  benefit_experience_label: { ro: "Domenii de activitate", en: "Domains of activity" },
  benefit_experience_years: { ro: "10+", en: "10+" },

  benefit_clients_label: { ro: "Clienți mulțumiți", en: "Satisfied clients" },
  benefit_clients_count: { ro: "25+ Clienți", en: "25+ Clients" },

  benefit_social_label: { ro: "Rezultate social media", en: "Social media results" },
  benefit_social_views: { ro: "10M+ views", en: "10M+ views" },
  benefit_social_followers: { ro: "10k+ urmăritori", en: "10k+ followers" },
  benefit_social_desc: { ro: "aduse clienților noștri", en: "brought to our clients" },

  benefit_contact_button: { ro: "Contactează-ne", en: "Contact us" },

  // 3-step process
  process_heading: { ro: "Identitatea ta în online începe acum!", en: "Your online identity starts now!" },
  process_1_title: { ro: "Întâlnire inițială", en: "Initial meeting" },
  process_1_desc: {
    ro: "Prezentarea afacerii, nevoile clientului, obiectivele proiectului",
    en: "Business presentation, client needs, project objectives",
  },
  process_2_title: { ro: "Ședința de Consultare", en: "Consultation meeting" },
  process_2_desc: {
    ro: "Înțelegem nevoile tale, analizăm concurența și stabilim pașii spre succes",
    en: "We understand your needs, analyze the competition, and set the steps to success",
  },
  process_3_title: { ro: "Convertim rezultatele în profit", en: "Turn results into profit" },
  process_3_desc: {
    ro: "Cu ajutorul strategiilor noastre, creștem vizibilitatea și încrederea în afacerea ta",
    en: "With our strategies, we increase visibility and credibility in your business",
  },

  // Explainer section
  explainer_title: {
    ro: "Noi înțelegem, să crești o afacere nu este ușor.",
    en: "We understand that growing a business is not easy.",
  },
  // Explainer segmented
  explainer_h1: { ro: "Noi înțelegem", en: "We get it" },
  explainer_t1: { ro: ", să crești o afacere nu este ușor.", en: ", growing a business is not easy." },
  explainer_p1: {
    ro: "La Grizzly Media Pro, știm că ești genul de antreprenor care își dorește să își vadă afacerea crescând și să inspire încredere clienților. Pentru asta, ai nevoie de o identitate digitală clară, un site modern și o strategie de marketing care să aducă rezultate.",
    en: "At Grizzly Media Pro, we know you're the kind of entrepreneur who wants to see your business grow and inspire trust in your clients. For that, you need a clear digital identity, a modern website, and a marketing strategy that delivers results.",
  },
  explainer_p2: {
    ro: "Problema este că, fără o prezență bine construită în online, rămâi invizibil, pierzi clienți și ai impresia că business-ul stagnează. Știm cât de frustrant și descurajator poate fi.",
    en: "The problem is that without a well-built online presence, you remain invisible, lose clients, and feel like your business is stagnating. We know how frustrating and discouraging that can be.",
  },
  explainer_p3: {
    ro: "Noi credem că nicio afacere nu ar trebui să piardă oportunități doar pentru că nu are imaginea digitală potrivită. Înțelegem provocările prin care treci și știm cât de greu este să faci totul singur.",
    en: "We believe that no business should lose opportunities just because it doesn't have the right digital image. We understand the challenges you face and know how difficult it is to do everything yourself.",
  },
  explainer_p4: {
    ro: "De aceea, configurăm soluții personalizate, dezvoltăm site-uri și aplicații web de la zero, creăm strategii de marketing optimizate și ne ocupăm de întreaga ta prezență online, ca tu să îți salvezi timpul și să te concentrezi pe creșterea afacerii.",
    en: "That's why we customize solutions, develop websites and apps from scratch, create optimized marketing strategies, and handle your entire online presence so you can save time and focus on growing your business.",
  },
  explainer_p5: { ro: "Iată cum funcționează:", en: "Here's how it works:" },
  explainer_step1: { ro: "Ne contactezi și ne spui obiectivele tale", en: "Contact us and tell us your objectives" },
  explainer_step2: { ro: "Îți propunem soluția potrivită", en: "We propose the right solution" },
  explainer_step3: { ro: "Implementăm și monitorizăm pentru rezultate reale", en: "We implement and monitor for real results" },

  // Services/Portfolio/Contact headings
  services_heading: { ro: "Serviciile noastre", en: "Our services" },
  portfolio_heading: { ro: "Portofoliul nostru", en: "Our portfolio" },
  portfolio_t1: { ro: "Portofoliul ", en: "Our " },
  portfolio_h1: { ro: "nostru", en: "portfolio" },
  contact_heading: { ro: "Contactează-ne", en: "Contact us" },
  contact_t1: { ro: "Contactează-", en: "Contact " },
  contact_h1: { ro: "ne", en: "us" },
  social_follow: { ro: "Ne poți urmări și pe:", en: "You can follow us on:" },
  // Services segmented
  services_t1: { ro: "Serviciile ", en: "Our " },
  services_h1: { ro: "noastre", en: "services" },

  // Service cards
  svc_web_title: { ro: "WEB DEVELOPMENT", en: "WEB DEVELOPMENT" },
  svc_web_sub: { ro: "SITE-URI MODERNE", en: "MODERN SITES" },
  svc_social_title: { ro: "SOCIAL MEDIA", en: "SOCIAL MEDIA" },
  svc_social_sub: { ro: "STRATEGIE", en: "STRATEGY" },
  svc_brand_title: { ro: "BRANDING", en: "BRANDING" },
  svc_brand_sub: { ro: "IDENTITATE", en: "IDENTITY" },

  // Portfolio carousel tabs
  tab_pages: { ro: "Pagini de prezentare", en: "Presentation pages" },
  tab_shops: { ro: "Magazine online", en: "Online stores" },
  tab_apps: { ro: "Aplicații web/mobile", en: "Web/mobile apps" },
  tab_social: { ro: "Rezultate social media", en: "Social media results" },
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
  slide_agro_desc: { ro: "Tehnologie de vârf pentru o agricultură de succes.", en: "Cutting-edge technology for successful agriculture." },

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
  footer_nav_portfolio: { ro: "Portofoliu", en: "Portfolio" },
  footer_nav_contact: { ro: "Contact", en: "Contact" },

  footer_nav_label: { ro: "Navigare", en: "Navigation" },
  footer_contact_label: { ro: "Contact", en: "Contact" },
  footer_social_label: { ro: "Social Media", en: "Social Media" },
  footer_tagline: { ro: "Transformăm viziunea ta în realitate digitală cu design personalizat și tehnologii de ultimă generație.", en: "We turn your vision into digital reality with custom design and cutting-edge technologies." },
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
    ro: "Transformăm viziunea ta într-un site web modern, rapid și optimizat pentru conversii",
    en: "We turn your vision into a modern, fast website optimized for conversions",
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
    ro: "O metodologie clară și transparentă pentru a transforma ideea ta în realitate digitală",
    en: "A clear, transparent methodology to turn your idea into digital reality",
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

  devweb_cta_h_t1: { ro: "Gata să începem ", en: "Ready to start your " },
  devweb_cta_h_h1: { ro: "proiectul", en: "project" },
  devweb_cta_h_t2: { ro: " tău?", en: "?" },
  devweb_cta_p: { ro: "Contactează-ne pentru o consultație gratuită și să discutăm despre cum putem transforma viziunea ta în realitate digitală", en: "Contact us for a free consultation and let's discuss how we can turn your vision into digital reality" },
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

  // 404 Not Found Page
  not_found_title: { ro: "Pagina nu a fost găsită", en: "Page not found" },
  not_found_description: { ro: "Se pare că pagina pe care o cauți nu există sau a fost mutată. Nu te îngrijora, te ajutăm să găsești ceea ce cauți!", en: "It seems the page you're looking for doesn't exist or has been moved. Don't worry, we'll help you find what you're looking for!" },
  not_found_home_button: { ro: "Înapoi acasă", en: "Back to home" },
  not_found_contact_button: { ro: "Contactează-ne", en: "Contact us" },
  not_found_helpful_links: { ro: "Linkuri utile:", en: "Helpful links:" },
  not_found_need_help: { ro: "Ai nevoie de ajutor?", en: "Need help?" }
};


