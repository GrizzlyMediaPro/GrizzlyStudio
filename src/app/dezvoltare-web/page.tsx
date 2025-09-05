"use client";

import Image from "next/image";
import Link from "next/link";
import FadeInElement from "../components/FadeInElement";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiExpo,
  SiPrisma,
  SiStripe,
  SiResend,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

export default function DezvoltareWeb() {
  const { t } = useLanguage();
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
              <Link href="/">
                <Image
                  src="/grizzlylogo.png"
                  alt="Grizzly Media Pro Logo"
                  width={280}
                  height={65}
                  className="object-contain transition-all duration-500"
                />
              </Link>
            </div>

            {/* Meniu în navbar - în dreapta */}
            <div
              className={`hidden md:flex items-center space-x-8 transition-all duration-700 ease-out ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link href="/#servicii" className="text-white/80 hover:text-white transition-colors duration-300">{t("nav_services")}</Link>
              <Link href="/#portofoliu" className="text-white/80 hover:text-white transition-colors duration-300">{t("nav_portfolio")}</Link>
              <Link href="/#despre" className="text-white/80 hover:text-white transition-colors duration-300">{t("nav_about")}</Link>
              <Link href="/#contact" className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">{t("nav_contact")}</Link>
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
        <div
          className={`absolute inset-0 bg-[#0d0d0e] transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex flex-col space-y-8 text-center">
              <Link
                href="/#servicii"
                onClick={closeMobileMenu}
                className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4"
              >
                Servicii
              </Link>
              <Link
                href="/#portofoliu"
                onClick={closeMobileMenu}
                className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4"
              >
                Portofoliu
              </Link>
              <Link
                href="/#despre"
                onClick={closeMobileMenu}
                className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4"
              >
                Despre
              </Link>
              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-xl mt-8"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section pentru Dezvoltare Web */}
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
              <Link href="/">
                <Image
                  src="/grizzlylogo.png"
                  alt="Grizzly Media Pro Logo"
                  width={280}
                  height={65}
                  className="object-contain transition-all duration-700 ease-out"
                />
              </Link>
            </div>

            {/* Meniu în hero - în dreapta */}
            <div
              className={`hidden md:flex items-center space-x-8 transition-all duration-700 ease-out ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              <Link
                href="/#servicii"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Servicii
              </Link>
              <Link
                href="/#portofoliu"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Portofoliu
              </Link>
              <Link
                href="/#despre"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Despre
              </Link>
              <Link href="/#contact" className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">{t("cta_schedule")}</Link>
            </div>

            {/* Hamburger menu pentru mobile */}
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

        

        {/* Conținut centrat în partea de sus */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center px-6 max-w-6xl mx-auto">
            <h1 className="nohemi-heading text-4xl md:text-6xl text-white mb-6 leading-tight">
              {t("devweb_hero_t1")}<span className="text-[#ffed88]">{t("devweb_hero_h1")}</span> <br />
              <span className="text-[#ffed88]">{t("devweb_hero_h2")}</span>{t("devweb_hero_t3")}<span className="text-[#ffed88]">{t("devweb_hero_h3")}</span>
            </h1>
            <p className="nohemi-medium text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              {t("devweb_hero_p")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg">
                {t("devweb_cta_start")}
              </Link>
              <Link href="/#portofoliu" className="bg-transparent text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20 text-lg">
                {t("devweb_cta_portfolio")}
              </Link>
            </div>
          </div>
        </div>

        {/* Imaginea hero absolută */}
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
        {/* Secțiunea Servicii Web */}
        <FadeInElement delay={0}>
          <div className="text-center mb-16">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t("devweb_services_h_t1")} 
              <span className="text-[#ffed88]">{t("devweb_services_h_h1")}</span>
            </h2>
            <p className="nohemi-medium text-lg text-white/80 max-w-4xl mx-auto">
              {t("devweb_services_desc")}
            </p>
          </div>
        </FadeInElement>

        {/* Grid cu servicii */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Site-uri Corporate */}
          <FadeInElement delay={200} direction="up">
            <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-8 border border-gray-300/20 shadow-xl transition-all duration-500 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#ffed88]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="nohemi-medium text-xl text-white mb-3">
                  {t("devweb_card_corp_title")}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t("devweb_card_corp_desc")}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-white/60">
                <li>{t("devweb_card_corp_li1")}</li>
                <li>{t("devweb_card_corp_li2")}</li>
                <li>{t("devweb_card_corp_li3")}</li>
                <li>{t("devweb_card_corp_li4")}</li>
              </ul>
            </div>
          </FadeInElement>

          {/* E-commerce */}
          <FadeInElement delay={400} direction="up">
            <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-8 border border-gray-300/20 shadow-xl transition-all duration-500 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#ffed88]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="nohemi-medium text-xl text-white mb-3">
                  {t("devweb_card_ecom_title")}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t("devweb_card_ecom_desc")}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-white/60">
                <li>{t("devweb_card_ecom_li1")}</li>
                <li>{t("devweb_card_ecom_li2")}</li>
                <li>{t("devweb_card_ecom_li3")}</li>
                <li>{t("devweb_card_ecom_li4")}</li>
              </ul>
            </div>
          </FadeInElement>

          {/* Aplicații Web */}
          <FadeInElement delay={600} direction="up">
            <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-8 border border-gray-300/20 shadow-xl transition-all duration-500 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#ffed88]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="nohemi-medium text-xl text-white mb-3">
                  {t("devweb_card_app_title")}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t("devweb_card_app_desc")}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-white/60">
                <li>{t("devweb_card_app_li1")}</li>
                <li>{t("devweb_card_app_li2")}</li>
                <li>{t("devweb_card_app_li3")}</li>
                <li>{t("devweb_card_app_li4")}</li>
              </ul>
            </div>
          </FadeInElement>
        </div>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Secțiunea Proces de Lucru */}
        <FadeInElement delay={800}>
          <div className="text-center mb-16">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t("devweb_process_h_t1")}
              <span className="text-[#ffed88]">{t("devweb_process_h_h1")}</span>
            </h2>
            <p className="nohemi-medium text-lg text-white/80 max-w-4xl mx-auto">
              {t("devweb_process_desc")}
            </p>
          </div>
        </FadeInElement>

        {/* Proces de lucru - 4 pași */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Pasul 1 */}
          <FadeInElement delay={1000} direction="up">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">1</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                {t("devweb_step1_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("devweb_step1_desc")}
              </p>
            </div>
          </FadeInElement>

          {/* Pasul 2 */}
          <FadeInElement delay={1200} direction="up">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">2</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">{t("devweb_step2_title")}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{t("devweb_step2_desc")}</p>
            </div>
          </FadeInElement>

          {/* Pasul 3 */}
          <FadeInElement delay={1400} direction="up">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">3</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                {t("devweb_step3_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("devweb_step3_desc")}
              </p>
            </div>
          </FadeInElement>

          {/* Pasul 4 */}
          <FadeInElement delay={1600} direction="up">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">4</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">{t("devweb_step4_title")}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("devweb_step4_desc")}
              </p>
            </div>
          </FadeInElement>
        </div>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Secțiunea Tehnologii */}
        <FadeInElement delay={1800}>
          <div className="text-center mb-16">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t("devweb_tech_h_t1")}<span className="text-[#ffed88]">{t("devweb_tech_h_h1")}</span>
            </h2>
            <p className="nohemi-medium text-lg text-white/80 max-w-4xl mx-auto">
              {t("devweb_tech_desc")}
            </p>
          </div>
        </FadeInElement>

        {/* Grid cu tehnologii */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-24">
          {[
            { name: "React", icon: <SiReact className="w-8 h-8 text-white" /> },
            {
              name: "Next.js",
              icon: <SiNextdotjs className="w-8 h-8 text-white" />,
            },
            {
              name: "TypeScript",
              icon: <SiTypescript className="w-8 h-8 text-white" />,
            },
            {
              name: "Node.js",
              icon: <SiNodedotjs className="w-8 h-8 text-white" />,
            },
            {
              name: "MongoDB",
              icon: <SiMongodb className="w-8 h-8 text-white" />,
            },
            {
              name: "PostgreSQL",
              icon: <SiPostgresql className="w-8 h-8 text-white" />,
            },
            {
              name: "AWS",
              icon: <SiAmazon className="w-8 h-8 text-white" />,
            },
            {
              name: "Docker",
              icon: <SiDocker className="w-8 h-8 text-white" />,
            },
            {
              name: "Expo",
              icon: <SiExpo className="w-8 h-8 text-white" />,
            },
            {
              name: "React Native",
              icon: <SiReact className="w-8 h-8 text-white" />,
            },
            {
              name: "Prisma",
              icon: <SiPrisma className="w-8 h-8 text-white" />,
            },
            {
              name: "Stripe",
              icon: <SiStripe className="w-8 h-8 text-white" />,
            },
            {
              name: "Resend",
              icon: <SiResend className="w-8 h-8 text-white" />,
            },
            {
              name: "JavaScript",
              icon: <SiJavascript className="w-8 h-8 text-white" />,
            },
            {
              name: "Tailwind CSS",
              icon: <SiTailwindcss className="w-8 h-8 text-white" />,
            },
          ].map((tech, index) => (
            <FadeInElement
              key={tech.name}
              delay={2000 + index * 100}
              direction="up"
            >
              <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-xl p-6 border border-gray-300/20 text-center transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">{tech.icon}</div>
                <h3 className="nohemi-medium text-white text-sm">
                  {tech.name}
                </h3>
              </div>
            </FadeInElement>
          ))}
        </div>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Secțiunea CTA */}
        <FadeInElement delay={2200}>
          <div className="text-center mb-24">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t("devweb_cta_h_t1")}<span className="text-[#ffed88]">{t("devweb_cta_h_h1")}</span>{t("devweb_cta_h_t2")}
            </h2>
            <p className="nohemi-medium text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t("devweb_cta_p")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg">
                {t("devweb_cta_primary")}
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20 text-lg">
                {t("devweb_cta_secondary")}
              </button>
            </div>
          </div>
        </FadeInElement>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-gray-300/20 mt-24">
          <div className="max-w-6xl mx-auto px-6 py-8">
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
                  Transformăm viziunea ta în realitate digitală cu design
                  personalizat și tehnologii de ultimă generație.
                </p>
              </div>

              {/* Quick links și contact */}
              <div className="flex flex-col sm:flex-row gap-8">
                {/* Quick Links */}
                <div>
                  <h4 className="nohemi-medium text-white text-sm mb-4">
                    Navigare
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/#despre"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      Despre noi
                    </Link>
                    <Link
                      href="/#servicii"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      Servicii
                    </Link>
                    <Link
                      href="/#portofoliu"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      Portofoliu
                    </Link>
                    <Link
                      href="/#contact"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="nohemi-medium text-white text-sm mb-4">
                    Contact
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
              </div>
            </div>

            {/* Bottom section */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm mb-4 md:mb-0">
                © 2024 Grizzly Media Pro. Toate drepturile rezervate.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  href="/politica-confidentialitate"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  Politica de Confidențialitate
                </Link>
                <Link
                  href="/politica-cookies"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  Politica de Cookies
                </Link>
                <Link
                  href="/termeni-conditii"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  Termeni și Condiții
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
