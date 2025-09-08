"use client";

import Image from "next/image";
import Link from "next/link";
import FadeInElement from "../components/FadeInElement";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiCanva,
  SiSketch,
  SiInkscape,
  SiGimp,
  SiBlender,
} from "react-icons/si";

export default function Branding() {
  const { t, lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

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

  // Închide dropdown-ul de limbă când se face click în afara lui
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".language-dropdown")) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguageDropdown = () =>
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

  const changeLanguage = (newLang: "ro" | "en") => {
    setLang(newLang);
    setIsLanguageDropdownOpen(false);
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
                  width={220}
                  height={55}
                  className="object-contain transition-all duration-500 md:w-[280px] md:h-[65px]"
                />
              </Link>
            </div>

            {/* Meniu în navbar - în dreapta */}
            <div
              className={`hidden md:flex items-center space-x-8 transition-all duration-700 ease-out ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href="/#servicii"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_services")}
              </Link>
              <Link
                href="/#portofoliu"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_portfolio")}
              </Link>
              <Link
                href="/#despre"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_about")}
              </Link>
              <Link
                href="/#contact"
                className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                {t("nav_contact")}
              </Link>

              {/* Buton de limbă cu dropdown */}
              <div className="relative language-dropdown">
                <button
                  onClick={toggleLanguageDropdown}
                  className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  aria-label="Language selector"
                >
                  <span className="font-medium">
                    {lang === "ro" ? "RO" : "EN"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isLanguageDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown pentru limbă */}
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-[#0d0d0e] border border-white/20 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] backdrop-blur-md overflow-hidden z-50">
                    <button
                      onClick={() => changeLanguage("ro")}
                      className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                        lang === "ro"
                          ? "text-[#ffed88] bg-white/5"
                          : "text-white/80"
                      }`}
                    >
                      RO
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                        lang === "en"
                          ? "text-[#ffed88] bg-white/5"
                          : "text-white/80"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
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
                {t("nav_services")}
              </Link>
              <Link
                href="/#portofoliu"
                onClick={closeMobileMenu}
                className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4"
              >
                {t("nav_portfolio")}
              </Link>
              <Link
                href="/#despre"
                onClick={closeMobileMenu}
                className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4"
              >
                {t("nav_about")}
              </Link>
              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-xl mt-8"
              >
                {t("nav_contact")}
              </Link>

              {/* Buton de limbă pentru mobile */}
              <div className="mt-8 flex justify-center">
                <div className="relative language-dropdown">
                  <button
                    onClick={toggleLanguageDropdown}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
                    aria-label="Language selector"
                  >
                    <span className="text-2xl font-medium">
                      {lang === "ro" ? "RO" : "EN"}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isLanguageDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown pentru limbă - mobile */}
                  {isLanguageDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#0d0d0e] border border-white/20 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] backdrop-blur-md overflow-hidden z-50 min-w-[80px]">
                      <button
                        onClick={() => changeLanguage("ro")}
                        className={`w-full px-4 py-3 text-center hover:bg-white/10 transition-colors duration-200 ${
                          lang === "ro"
                            ? "text-[#ffed88] bg-white/5"
                            : "text-white/80"
                        }`}
                      >
                        RO
                      </button>
                      <button
                        onClick={() => changeLanguage("en")}
                        className={`w-full px-4 py-3 text-center hover:bg-white/10 transition-colors duration-200 ${
                          lang === "en"
                            ? "text-[#ffed88] bg-white/5"
                            : "text-white/80"
                        }`}
                      >
                        EN
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section pentru Branding */}
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
                  width={220}
                  height={55}
                  className="object-contain transition-all duration-700 ease-out md:w-[280px] md:h-[65px]"
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
                {t("nav_services")}
              </Link>
              <Link
                href="/#portofoliu"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_portfolio")}
              </Link>
              <Link
                href="/#despre"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {t("nav_about")}
              </Link>
              <Link
                href="/#contact"
                className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                {t("nav_contact")}
              </Link>

              {/* Buton de limbă cu dropdown */}
              <div className="relative language-dropdown">
                <button
                  onClick={toggleLanguageDropdown}
                  className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  aria-label="Language selector"
                >
                  <span className="font-medium">
                    {lang === "ro" ? "RO" : "EN"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isLanguageDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown pentru limbă */}
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-[#0d0d0e] border border-white/20 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] backdrop-blur-md overflow-hidden z-50">
                    <button
                      onClick={() => changeLanguage("ro")}
                      className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                        lang === "ro"
                          ? "text-[#ffed88] bg-white/5"
                          : "text-white/80"
                      }`}
                    >
                      RO
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                        lang === "en"
                          ? "text-[#ffed88] bg-white/5"
                          : "text-white/80"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
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
              {t("brand_hero_t1")}
              <span className="text-[#ffed88]">{t("brand_hero_h1")}</span>{" "}
              <br />
              <span className="text-[#ffed88]">{t("brand_hero_h2")}</span>
              {t("brand_hero_t2")}
              <span className="text-[#ffed88]">{t("brand_hero_h3")}</span>
            </h1>
            <p className="nohemi-medium text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              {t("brand_hero_p")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg"
              >
                {t("brand_cta_start")}
              </Link>
              <Link
                href="/#portofoliu"
                className="bg-transparent text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20 text-lg"
              >
                {t("brand_cta_portfolio")}
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
        {/* Secțiunea Servicii Branding */}
        <FadeInElement delay={0}>
          <div className="text-center mb-16">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t("brand_services_h_t1")}
              <span className="text-[#ffed88]">{t("brand_services_h_h1")}</span>
            </h2>
            <p className="nohemi-medium text-lg text-white/80 max-w-4xl mx-auto">
              {t("brand_services_desc")}
            </p>
          </div>
        </FadeInElement>

        {/* Grid cu servicii */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Identitate Vizuală */}
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
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="nohemi-medium text-xl text-white mb-3">
                  {t("brand_card_identity_title")}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t("brand_card_identity_desc")}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-white/60">
                <li>{t("brand_card_identity_li1")}</li>
                <li>{t("brand_card_identity_li2")}</li>
                <li>{t("brand_card_identity_li3")}</li>
                <li>{t("brand_card_identity_li4")}</li>
              </ul>
            </div>
          </FadeInElement>

          {/* Materiale Promoționale */}
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="nohemi-medium text-xl text-white mb-3">
                  {t("brand_card_promo_title")}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t("brand_card_promo_desc")}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-white/60">
                <li>{t("brand_card_promo_li1")}</li>
                <li>{t("brand_card_promo_li2")}</li>
                <li>{t("brand_card_promo_li3")}</li>
                <li>{t("brand_card_promo_li4")}</li>
              </ul>
            </div>
          </FadeInElement>

          {/* Strategie de Brand */}
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="nohemi-medium text-xl text-white mb-3">
                  {t("brand_card_strategy_title")}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t("brand_card_strategy_desc")}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-white/60">
                <li>{t("brand_card_strategy_li1")}</li>
                <li>{t("brand_card_strategy_li2")}</li>
                <li>{t("brand_card_strategy_li3")}</li>
                <li>{t("brand_card_strategy_li4")}</li>
              </ul>
            </div>
          </FadeInElement>
        </div>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Secțiunea Proces de Branding */}
        <FadeInElement delay={800}>
          <div className="text-center mb-16">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t("brand_process_h_t1")}
              <span className="text-[#ffed88]">{t("brand_process_h_h1")}</span>
            </h2>
            <p className="nohemi-medium text-lg text-white/80 max-w-4xl mx-auto">
              {t("brand_process_desc")}
            </p>
          </div>
        </FadeInElement>

        {/* Proces de branding - 4 pași */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Pasul 1 */}
          <FadeInElement delay={1000} direction="up">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">1</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                {t("brand_step1_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("brand_step1_desc")}
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
                {t("brand_step2_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("brand_step2_desc")}
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
                {t("brand_step3_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("brand_step3_desc")}
              </p>
            </div>
          </FadeInElement>

          {/* Pasul 4 */}
          <FadeInElement delay={1600} direction="up">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">4</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                {t("brand_step4_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("brand_step4_desc")}
              </p>
            </div>
          </FadeInElement>
        </div>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Secțiunea Instrumente Design */}
        <FadeInElement delay={1800}>
          <div className="text-center mb-16">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t("brand_tools_h_t1")}
              <span className="text-[#ffed88]">{t("brand_tools_h_h1")}</span>
            </h2>
            <p className="nohemi-medium text-lg text-white/80 max-w-4xl mx-auto">
              {t("brand_tools_desc")}
            </p>
          </div>
        </FadeInElement>

        {/* Grid cu instrumente design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            {
              name: "Adobe Illustrator",
              icon: <SiAdobeillustrator className="w-8 h-8 text-white" />,
            },
            {
              name: "Adobe Photoshop",
              icon: <SiAdobephotoshop className="w-8 h-8 text-white" />,
            },
            { name: "Figma", icon: <SiFigma className="w-8 h-8 text-white" /> },
            { name: "Canva", icon: <SiCanva className="w-8 h-8 text-white" /> },
            {
              name: "Sketch",
              icon: <SiSketch className="w-8 h-8 text-white" />,
            },
            {
              name: "Inkscape",
              icon: <SiInkscape className="w-8 h-8 text-white" />,
            },
            { name: "GIMP", icon: <SiGimp className="w-8 h-8 text-white" /> },
            {
              name: "Blender",
              icon: <SiBlender className="w-8 h-8 text-white" />,
            },
          ].map((tool, index) => (
            <FadeInElement
              key={tool.name}
              delay={2000 + index * 100}
              direction="up"
            >
              <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-xl p-6 border border-gray-300/20 text-center transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">{tool.icon}</div>
                <h3 className="nohemi-medium text-white text-sm">
                  {tool.name}
                </h3>
              </div>
            </FadeInElement>
          ))}
        </div>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Secțiunea Rezultate */}
        <FadeInElement delay={2200}>
          <div className="text-center mb-16">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t("brand_results_h_t1")}
              <span className="text-[#ffed88]">{t("brand_results_h_h1")}</span>
            </h2>
            <p className="nohemi-medium text-lg text-white/80 max-w-4xl mx-auto">
              {t("brand_results_desc")}
            </p>
          </div>
        </FadeInElement>

        {/* Grid cu rezultate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Rezultat 1 */}
          <FadeInElement delay={2400} direction="up">
            <div className="text-center">
              <div className="w-25 h-25 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">
                  2,000+
                </span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                {t("brand_res_posts_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("brand_res_posts_desc")}
              </p>
            </div>
          </FadeInElement>

          {/* Rezultat 2 */}
          <FadeInElement delay={2600} direction="up">
            <div className="text-center">
              <div className="w-25 h-25 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">
                  100+
                </span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                {t("brand_res_campaigns_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("brand_res_campaigns_desc")}
              </p>
            </div>
          </FadeInElement>

          {/* Rezultat 3 */}
          <FadeInElement delay={2800} direction="up">
            <div className="text-center">
              <div className="w-25 h-25 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">9</span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                {t("brand_res_types_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("brand_res_types_desc")}
              </p>
            </div>
          </FadeInElement>

          {/* Rezultat 4 */}
          <FadeInElement delay={3000} direction="up">
            <div className="text-center">
              <div className="w-25 h-25 bg-[#ffed88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="nohemi-black text-2xl text-[#ffed88]">
                  24h
                </span>
              </div>
              <h3 className="nohemi-medium text-xl text-white mb-4">
                {t("brand_res_response_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("brand_res_response_desc")}
              </p>
            </div>
          </FadeInElement>
        </div>

        {/* Linie subțire cu umbră */}
        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Secțiunea CTA */}
        <FadeInElement delay={3200}>
          <div className="text-center mb-24">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t("brand_cta_h_t1")}
              <span className="text-[#ffed88]">{t("brand_cta_h_h1")}</span>
              {t("brand_cta_h_t2")}
            </h2>
            <p className="nohemi-medium text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t("brand_cta_p")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg"
              >
                {t("brand_cta_primary")}
              </Link>
              <Link
                href="/#portofoliu"
                className="bg-transparent text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20 text-lg"
              >
                {t("brand_cta_secondary")}
              </Link>
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
                  {t("brand_footer_tagline")}
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
                    <Link
                      href="/#despre"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      {t("footer_nav_about")}
                    </Link>
                    <Link
                      href="/#servicii"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      {t("footer_nav_services")}
                    </Link>
                    <Link
                      href="/#portofoliu"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      {t("footer_nav_portfolio")}
                    </Link>
                    <Link
                      href="/#contact"
                      className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm"
                    >
                      {t("footer_nav_contact")}
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
                        href="mailto:contact@grizzlymediapro.ro"
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
                        contact@grizzlymediapro.ro
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm mb-4 md:mb-0">
                {t("footer_rights")}
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  href="/politica-confidentialitate"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  {t("privacy_policy")}
                </Link>
                <Link
                  href="/politica-cookies"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  {t("cookies_policy")}
                </Link>
                <Link
                  href="/termeni-conditii"
                  className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
                >
                  {t("terms_conditions")}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
