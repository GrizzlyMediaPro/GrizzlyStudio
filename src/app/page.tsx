"use client";

import Image from "next/image";
import PortfolioCarousel from "./components/PortfolioCarousel";
import FadeInElement from "./components/FadeInElement";
import { useState, useEffect } from "react";
import { useLanguage } from "./i18n/LanguageProvider";

export default function Home() {
  const { t, lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Închide meniul mobil când se face scroll
    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Efect de glow în centru */}
      <div className="absolute inset-0 glow-effect pointer-events-none"></div>

      {/* Navbar care apare după scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div
          className="bg-[#0d0d0e80] border-b border-gray-600/30"
          style={{
            WebkitBackdropFilter: "blur(50px)",
            backdropFilter: "blur(50px)",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
            {/* Logo în navbar - în stânga */}
            <div className="flex items-center">
              <Image
                src="/grizzlylogo.png"
                alt="Grizzly Media Pro Logo"
                width={280}
                height={65}
                className="object-contain transition-all duration-500"
              />
            </div>

            {/* Meniu în navbar - în dreapta */}
            <div
              className={`hidden md:flex items-center space-x-8 transition-all duration-700 ease-out ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                href="#servicii"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_services")}
              </a>
              <a
                href="#portofoliu"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_portfolio")}
              </a>
              <a
                href="#despre"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_about")}
              </a>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                {t("nav_contact")}
              </a>
              {/* Toggle limbă mutat sub navbar */}
            </div>

            {/* Hamburger menu pentru mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 transition-all duration-700 ease-out"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "80px" }}
      >
        {/* Menu content - full screen */}
        <div
          className={`absolute inset-0 bg-[#0d0d0e] transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Menu items */}
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex flex-col space-y-8 text-center">
              <a
                href="#servicii"
                onClick={closeMobileMenu}
                className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4"
              >
                Servicii
              </a>
              <a
                href="#portofoliu"
                onClick={closeMobileMenu}
                className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4"
              >
                Portofoliu
              </a>
              <a
                href="#despre"
                onClick={closeMobileMenu}
                className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4"
              >
                Despre
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-xl mt-8"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Fullscreen cu imaginea de contact în partea de jos */}
      <section className="relative h-screen flex flex-col">
        {/* Header cu logo și meniu - poziționat absolut în partea de sus */}
        <header
          className={`absolute top-0 left-0 right-0 z-20 transition-all duration-700 ease-out ${
            isScrolled ? "p-6 pt-6" : "p-6 pt-8"
          }`}
        >
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto relative">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/grizzlylogo.png"
                alt="Grizzly Media Pro Logo"
                width={280}
                height={65}
                className="object-contain transition-all duration-700 ease-out"
              />
            </div>

            {/* Meniu în hero - în dreapta */}
            <div
              className={`hidden md:flex items-center space-x-8 transition-all duration-700 ease-out ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              <a
                href="#servicii"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_services")}
              </a>
              <a
                href="#portofoliu"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_portfolio")}
              </a>
              <a
                href="#despre"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_about")}
              </a>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                Programeaza o intalnire!
              </a>
            </div>

            {/* Hamburger menu pentru mobile - în dreapta ca în navbar */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 transition-all duration-700 ease-out ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </header>

        {/* Toggle limbă sub navbar, centrat (non-fixed) */}
        <div className="mt-24 flex justify-center z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <span
              className={`text-xs font-medium ${
                lang === "ro" ? "text-white" : "text-white/60"
              }`}
            >
              RO
            </span>
            <button
              onClick={() => setLang(lang === "ro" ? "en" : "ro")}
              className="w-12 h-7 bg-white/10 border border-white/20 rounded-full p-1 flex items-center hover:bg-white/20 transition"
              aria-label="Language toggle"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-lg transition-transform ${
                  lang === "en" ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
            <span
              className={`text-xs font-medium ${
                lang === "en" ? "text-white" : "text-white/60"
              }`}
            >
              EN
            </span>
          </div>
        </div>

        {/* Conținut centrat în partea de sus */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center px-6 max-w-6xl mx-auto">
            <h1 className="nohemi-heading text-4xl md:text-6xl text-white mb-6 leading-tight">
              {t("hero_t1")}
              <span className="text-[#ffed88]">{t("hero_h1")}</span>
              {t("hero_t2")}
              <span className="text-[#ffed88]">{t("hero_h2")}</span>
              {t("hero_t3")}
            </h1>
            <div className="mt-6">
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg"
              >
                Programeaza o intalnire!
              </a>
            </div>
          </div>
        </div>

        {/* Imaginea hero absolută care începe în jumătatea de jos */}
        <div className="absolute top-1/2 left-0 right-0 h-[90%] z-0 md:top-1/2 top-1/3">
          <div className="max-w-6xl mx-auto h-full relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/heroedge2.PNG"
                alt="Hero Background"
                fill
                className="object-contain opacity-25"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conținut principal */}
      <main className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Descriere agentie */}
        <FadeInElement delay={0}>
          <div className="text-center mb-16">
            <h2 className="nohemi-heading font-bold text-2xl md:text-3xl text-white mb-6">
              <span className="text-[#ffed88]">Fără</span> o prezență digitală
              clară, clienții <span className="text-[#ffed88]">te uită</span> și
              competiția<span className="text-[#ffed88]">te depășește.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left group card-group">
              <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 cursor-pointer card">
                <div className="text-2xl mb-3">🚫</div>
                <h4 className="nohemi-black text-white text-lg mb-2">
                  1. Ești invizibil pentru clienți noi
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Fără un website modern și o prezență activă în social media,
                  afacerea ta nici nu există în ochii celor care te caută
                  online.
                </p>
              </div>
              <div className="bg-gradient-to-b from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 cursor-pointer card">
                <div className="text-2xl mb-3">💔</div>
                <h4 className="nohemi-black text-white text-lg mb-2">
                  2. Pierzi încrederea celor care te găsesc
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Un brand incoerent, un site neprofesionist sau lipsa
                  activității transmit nesiguranță. Clienții aleg concurența,
                  chiar dacă produsele sau serviciile tale sunt mai bune.
                </p>
              </div>
              <div className="bg-gradient-to-bl from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 cursor-pointer card">
                <div className="text-2xl mb-3">⏳</div>
                <h4 className="nohemi-black text-white text-lg mb-2">
                  3. Ratezi oportunități de creștere
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Fără o strategie digitală, pierzi timp și bani pe tactici care
                  nu dau rezultate. Între timp, competiția ta avansează și
                  câștigă piața.
                </p>
              </div>
            </div>
          </div>
        </FadeInElement>

        {/* Secțiunea de preferințe a fost eliminată; toggle-ul de limbă e în navbar */}

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Secțiunea "Despre noi" */}
        <FadeInElement delay={400}>
          <div id="despre" className="text-center mb-8">
            <h3 className="nohemi-heading text-2xl md:text-4xl text-white mb-8">
              Afacerea ta merită vizibilitate, încredere și creștere.
            </h3>
          </div>

          {/* Grid cu 6 carduri "Despre noi" */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            {/* Card 1 - Fără CMS */}
            <FadeInElement delay={100} direction="up">
              <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 cursor-pointer card min-h-[240px]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#ffed88"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="nohemi-black text-white text-lg mb-1">
                      🛠️ Configurăm soluții personalizate pentru afacerea ta
                    </h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Fiecare business are particularități unice – și soluțiile
                      noastre sunt create să ți se potrivească perfect.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInElement>

            {/* Beneficiu 2 */}
            <FadeInElement delay={100} direction="up">
              <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 cursor-pointer card min-h-[240px]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#ffed88"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="nohemi-black text-white text-lg mb-1">
                      💻 Site-uri și aplicații web realizate de la 0
                    </h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Dezvoltate pe măsura brandului tău, cu design modern și
                      funcționalitate impecabilă.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInElement>

            {/* Beneficiu 3 */}
            <FadeInElement delay={200} direction="up">
              <div className="bg-gradient-to-b from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 aspect-square flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-[#ffed88] text-base font-medium mb-3">
                    Finalizate
                  </p>
                  <h4 className="nohemi-black text-2xl text-white mb-4">
                    182 Proiecte
                  </h4>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[#ffed88] text-base font-medium">
                      Vezi
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffed88"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="nohemi-black text-white text-lg mb-1">
                      ⏱️ Salvezi timp prețios
                    </h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Ne ocupăm de tot ce ține de imaginea ta în online, astfel
                      încât tu să te concentrezi pe creșterea afacerii.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInElement>

            {/* Card 3 - Experiență */}
            <FadeInElement delay={300} direction="up">
              <div className="bg-gradient-to-bl from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 cursor-pointer card min-h-[240px]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#ffed88"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="nohemi-black text-white text-lg mb-1">
                      🧠 Experiență în 10+ domenii de activitate
                    </h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Am lucrat cu business-uri din multiple industrii și știm
                      ce funcționează pentru fiecare.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInElement>

            {/* Card 4 - Clienți Mulțumiți */}
            <FadeInElement delay={400} direction="up">
              <div className="bg-gradient-to-tr from-black/50 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 cursor-pointer card min-h-[240px]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#ffed88"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="nohemi-black text-white text-lg mb-1">
                      📈 Strategii de marketing optimizate
                    </h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Servicii premium, adaptate la bugetul tău, astfel încât să
                      obții rezultate fără costuri exagerate.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInElement>

            {/* Card 5 - Social Media */}
            <FadeInElement delay={500} direction="up">
              <div className="bg-gradient-to-tl from-black/50 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 cursor-pointer card min-h-[240px]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#ffed88"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="nohemi-black text-white text-lg mb-1">
                      💰 Prețuri accesibile
                    </h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Fără promisiuni deșarte. Primești rapoarte clare și o
                      colaborare bazată pe încredere.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInElement>

            {/* Card 6 - Contact */}
            <FadeInElement delay={600} direction="up">
              <div className="bg-gradient-to-tl from-black/50 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 shadow-xl transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 aspect-square flex flex-col justify-center">
                <div className="text-center">
                  <button className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-base">
                    Contactează-ne
                  </button>
                </div>
              </div>
            </FadeInElement>
          </div>
        </FadeInElement>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Sub-heading pentru servicii */}
        <FadeInElement delay={600}>
          <div id="servicii" className="text-center mb-8">
            <h3 className="nohemi-heading text-xl md:text-2xl text-white">
              {t("services_t1")}
              <span className="text-[#ffed88]">{t("services_h1")}</span>
            </h3>
          </div>

          {/* Secțiunea cu carduri */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto group card-group">
            {/* Card 1 */}
            <FadeInElement delay={700} direction="up">
              <a href="/dezvoltare-web" className="block">
                <div className="bg-black rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl group-hover:scale-95 hover:scale-110 hover:z-20 card cursor-pointer">
                  <div className="relative h-[500px]">
                    <Image
                      src="/card1.PNG"
                      alt="Web Development"
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {t("svc_web_title")}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {t("svc_web_sub")}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </FadeInElement>

            {/* Card 2 */}
            <FadeInElement delay={800} direction="up">
              <a href="/social-media" className="block">
                <div className="bg-black rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl group-hover:scale-95 hover:scale-110 hover:z-20 card cursor-pointer">
                  <div className="relative h-[500px]">
                    <Image
                      src="/card2.jpg"
                      alt="Social Media"
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {t("svc_social_title")}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {t("svc_social_sub")}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </FadeInElement>

            {/* Card 3 */}
            <FadeInElement delay={900} direction="up">
              <a href="/branding" className="block">
                <div className="bg-black rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl group-hover:scale-95 hover:scale-110 hover:z-20 card cursor-pointer">
                  <div className="relative h-[500px]">
                    <Image
                      src="/card3.PNG"
                      alt="Branding"
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {t("svc_brand_title")}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {t("svc_brand_sub")}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </FadeInElement>
          </div>
        </FadeInElement>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mt-24 mb-16 shadow-lg shadow-white/20"></div>

        {/* Heading pentru portofoliu */}
        <FadeInElement delay={1000} direction="up">
          <div id="portofoliu" className="text-center mb-8">
            <h3 className="nohemi-heading text-xl md:text-2xl text-white">
              {t("portfolio_t1")}
              <span className="text-[#ffed88]">{t("portfolio_h1")}</span>
            </h3>
          </div>
        </FadeInElement>

        {/* Carousel pentru portofoliu */}
        <PortfolioCarousel />

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mt-24 mb-16 shadow-lg shadow-white/20"></div>

        {/* Proces de lucru - 3 pași */}
        <FadeInElement delay={400}>
          <div id="despre" className="text-center mb-8">
            <h3 className="nohemi-heading text-2xl md:text-4xl text-white mb-8">
              Ideentitatea ta in online incepe acum!
            </h3>
          </div>
        </FadeInElement>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-24 justify-items-center">
          {/* Pasul 1 */}
          <FadeInElement delay={1000} direction="up">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">1</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                Intalnire initiala
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Prezentarea afacerii, nevoile clientului, obiectivele
                proiectului
              </p>
            </div>
          </FadeInElement>

          {/* Pasul 2 */}
          <FadeInElement delay={1200} direction="up">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">2</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                Sedinta de Consultare
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Înțelegem nevoile tale, analizăm concurența și stabilim pasii
                spre succes
              </p>
            </div>
          </FadeInElement>

          {/* Pasul 3 */}
          <FadeInElement delay={1400} direction="up">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">3</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                Convertim rezultatele in profit
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Cu ajutorul strategiilor noastre, creștem vizibilitatea și
                încrederea în afacerea ta
              </p>
            </div>
          </FadeInElement>
        </div>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Secțiune explicativă */}
        <FadeInElement delay={300} direction="up">
          <div className="max-w-6xl mx-auto px-6 mb-16">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-8 md:p-12 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#ffed88]/10 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#ffed88]/10 blur-3xl pointer-events-none"></div>
              <h3 className="nohemi-heading text-3xl md:text-4xl text-white mb-2 relative z-10">
                <span className="text-[#ffed88]">Noi înțelegem</span>, să crești
                o afacere nu este ușor.
              </h3>
              <div className="h-px w-16 bg-[#ffed88] mb-6 relative z-10"></div>
              <div className="space-y-5 relative z-10">
                <p className="nohemi-medium text-base md:text-lg text-white/85 leading-8">
                  La Grizzly Media Pro, știm că ești genul de antreprenor care
                  își dorește să își vadă afacerea crescând și să inspire
                  încredere clienților. Pentru asta, ai nevoie de o identitate
                  digitală clară, un site modern și o strategie de marketing
                  care să aducă rezultate.
                </p>
                <p className="nohemi-medium text-base md:text-lg text-white/85 leading-8">
                  Problema este că, fără o prezență bine construită în online,
                  rămâi invizibil, pierzi clienți și ai impresia că business-ul
                  stagnează. Știm cât de frustrant și descurajator poate fi.
                </p>
                <p className="nohemi-medium text-base md:text-lg text-white/85 leading-8">
                  Noi credem că nicio afacere nu ar trebui să piardă
                  oportunități doar pentru că nu are imaginea digitală
                  potrivită. Înțelegem provocările prin care treci și știm cât
                  de greu este să faci totul singur.
                </p>
                <p className="nohemi-medium text-base md:text-lg text-white/85 leading-8">
                  De aceea, configurăm soluții personalizate, dezvoltăm site-uri
                  și aplicații web de la zero, creăm strategii de marketing
                  optimizate și ne ocupăm de întreaga ta prezență online, ca tu
                  să îți salvezi timpul și să te concentrezi pe creșterea
                  afacerii.
                </p>
                <div className="mt-2">
                  <p className="nohemi-medium text-base md:text-lg text-white/90 mb-3">
                    Iată cum funcționează:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <li className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                      <span className="w-7 h-7 rounded-full bg-[#ffed88]/20 text-[#ffed88] nohemi-black flex items-center justify-center text-sm">
                        1
                      </span>
                      <span className="text-white/85 text-sm md:text-base">
                        Ne contactezi și ne spui obiectivele tale
                      </span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                      <span className="w-7 h-7 rounded-full bg-[#ffed88]/20 text-[#ffed88] nohemi-black flex items-center justify-center text-sm">
                        2
                      </span>
                      <span className="text-white/85 text-sm md:text-base">
                        Îți propunem soluția potrivită
                      </span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                      <span className="w-7 h-7 rounded-full bg-[#ffed88]/20 text-[#ffed88] nohemi-black flex items-center justify-center text-sm">
                        3
                      </span>
                      <span className="text-white/85 text-sm md:text-base">
                        Implementăm și monitorizăm pentru rezultate reale
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeInElement>

        {/* Secțiunea de contact */}
        <FadeInElement delay={1100} direction="up">
          <div id="contact" className="text-center mb-12">
            <h3 className="nohemi-heading text-2xl md:text-3xl text-white mb-12">
              {t("contact_t1")}
              <span className="text-[#ffed88]">{t("contact_h1")}</span>
            </h3>
          </div>
        </FadeInElement>

        <div className="max-w-6xl mx-auto mb-24">
          {/* 3 Carduri pentru contact în stilul "Despre noi" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-16">
            {/* Card 1 - Telefon */}
            <FadeInElement delay={1200} direction="up">
              <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 aspect-square flex flex-col justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-[#ffed88]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h4 className="nohemi-medium text-base md:text-lg text-white leading-tight mb-4">
                    {t("label_phone")}
                  </h4>
                  <div className="flex justify-center mt-4">
                    <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg flex items-center justify-center gap-3">
                      <span>{t("btn_contact_us")}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </FadeInElement>

            {/* Card 2 - Email */}
            <FadeInElement delay={1300} direction="up">
              <div className="bg-gradient-to-b from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 aspect-square flex flex-col justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-[#ffed88]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="nohemi-medium text-base md:text-lg text-white leading-tight mb-4">
                    {t("label_email")}
                  </h4>
                  <div className="flex justify-center mt-4">
                    <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg flex items-center justify-center gap-3">
                      <span>{t("btn_contact_us")}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </FadeInElement>

            {/* Card 3 - WhatsApp */}
            <FadeInElement delay={1400} direction="up">
              <div className="bg-gradient-to-bl from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 transition-all duration-800 ease-out transform hover:scale-110 hover:z-10 aspect-square flex flex-col justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-[#ffed88]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <h4 className="nohemi-medium text-base md:text-lg text-white leading-tight mb-4">
                    {t("label_whatsapp")}
                  </h4>
                  <div className="flex justify-center mt-4">
                    <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg flex items-center justify-center gap-3">
                      <span>{t("btn_contact_us")}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </FadeInElement>
          </div>

          {/* Social Media - păstrat ca este */}
          <FadeInElement delay={1500} direction="up">
            <div className="text-center">
              <h4 className="nohemi-medium text-2xl text-white mb-8">
                {t("social_follow")}
              </h4>

              <div className="flex justify-center space-x-8">
                {/* Instagram */}
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

                {/* TikTok */}
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </div>

                {/* Facebook */}
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>

                {/* LinkedIn */}
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
            </div>
          </FadeInElement>
        </div>

        {/* Contact Image Section */}
        <FadeInElement delay={300} direction="up">
          <div className="relative w-full mt-24">
            <div className="max-w-6xl mx-auto">
              <Image
                src="/contact_image.png"
                alt="Contact Background"
                width={1920}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </FadeInElement>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-gray-300/20 mt-24">
          <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Main footer content */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
              {/* Logo și descriere */}
              <div className="flex-1 max-w-md">
                <div className="flex items-center mb-4">
                  <Image
                    src="/grizzlylogo.png"
                    alt="Grizzly Media Pro Logo"
                    width={150}
                    height={38}
                    className="object-contain"
                  />
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t("footer_tagline")}
                </p>
              </div>

              {/* Quick links și contact */}
              <div className="flex flex-col sm:flex-row gap-8">
                {/* Quick Links */}
                <div>
                  <h4 className="nohemi-medium text-white text-sm mb-4">
                    {t("footer_nav_label")}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="#despre"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      {t("footer_nav_about")}
                    </a>
                    <a
                      href="#servicii"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      {t("footer_nav_services")}
                    </a>
                    <a
                      href="#portofoliu"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      {t("footer_nav_portfolio")}
                    </a>
                    <a
                      href="#contact"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      {t("footer_nav_contact")}
                    </a>
                  </div>
                </div>

                {/* Contact și Social */}
                <div>
                  <h4 className="nohemi-medium text-white text-sm mb-4">
                    {t("footer_contact_label")}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <a
                        href="tel:+40750227013"
                        className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.65 3 4.19C3 13.27 10.73 21 19.81 21c.54 0 .99-.45.99-.99v-3.45c0-.54-.45-.99-.99-.99z" />
                        </svg>
                      </a>
                      <span className="text-white/60 text-sm">
                        +40 750 227 013
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a
                        href="mailto:grizzlymediapro@gmail.com"
                        className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </a>
                      <span className="text-white/60 text-sm">
                        grizzlymediapro@gmail.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="nohemi-medium text-white text-sm mb-4">
                    {t("footer_social_label")}
                  </h4>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section with legal links */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm mb-4 md:mb-0">
                {t("footer_rights")}
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="/politica-confidentialitate"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  {t("privacy_policy")}
                </a>
                <a
                  href="/politica-cookies"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  {t("cookies_policy")}
                </a>
                <a
                  href="/termeni-conditii"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  {t("terms_conditions")}
                </a>
                <a
                  href="https://anpc.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  {t("anpc_label")}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
