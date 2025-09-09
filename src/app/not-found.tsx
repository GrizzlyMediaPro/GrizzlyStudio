"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./i18n/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center">
      {/* Efect de glow în centru */}
      <div className="absolute inset-0 glow-effect pointer-events-none"></div>

      {/* Conținut principal */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <Link href="/">
            <Image
              src="/grizzlylogo.png"
              alt="Grizzly Media Pro Logo"
              width={280}
              height={65}
              className="object-contain mx-auto transition-all duration-300 hover:opacity-80"
            />
          </Link>
        </div>

        {/* Numărul 404 cu stilizare specială */}
        <div className="mb-8">
          <h1 className="nohemi-black text-8xl md:text-9xl text-white mb-4 relative">
            <span className="text-[#ffed88] drop-shadow-2xl">4</span>
            <span className="text-white drop-shadow-2xl">0</span>
            <span className="text-[#ffed88] drop-shadow-2xl">4</span>
            {/* Efect de glow pentru numere */}
            <div className="absolute inset-0 text-[#ffed88] blur-sm opacity-30">
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </div>
          </h1>
        </div>

        {/* Mesaj principal */}
        <div className="mb-8">
          <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-4">
            {t("not_found_title")}
          </h2>
          <p className="nohemi-medium text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            {t("not_found_description")}
          </p>
        </div>

        {/* Ilustrație sau iconiță */}
        <div className="mb-12">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#ffed88]/20 to-[#ffed88]/5 rounded-full flex items-center justify-center border border-[#ffed88]/30 shadow-[0_0_40px_rgba(255,237,136,0.3)]">
            <svg
              className="w-16 h-16 text-[#ffed88]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
        </div>

        {/* Butoane de acțiune */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>{t("not_found_home_button")}</span>
          </Link>

          <Link
            href="/#contact"
            className="bg-[#ffed88]/10 backdrop-blur-md text-[#ffed88] px-8 py-4 rounded-full font-medium hover:bg-[#ffed88]/20 transition-all duration-300 border border-[#ffed88]/30 shadow-[0_0_20px_rgba(255,237,136,0.3)] hover:shadow-[0_0_25px_rgba(255,237,136,0.4)] text-lg flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <span>{t("not_found_contact_button")}</span>
          </Link>
        </div>

        {/* Linkuri utile */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/60 text-sm mb-4">
            {t("not_found_helpful_links")}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/#servicii"
              className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
            >
              {t("nav_services")}
            </Link>
            <Link
              href="/#portofoliu"
              className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
            >
              {t("nav_portfolio")}
            </Link>
            <Link
              href="/#despre"
              className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
            >
              {t("nav_about")}
            </Link>
            <Link
              href="/#contact"
              className="text-white/70 hover:text-[#ffed88] transition-colors duration-300"
            >
              {t("nav_contact")}
            </Link>
          </div>
        </div>

        {/* Informații de contact */}
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-md mx-auto">
          <h3 className="nohemi-medium text-white text-lg mb-4">
            {t("not_found_need_help")}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <svg
                className="w-4 h-4 text-[#ffed88]"
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
              <a
                href="tel:+40750227013"
                className="text-white/80 hover:text-[#ffed88] transition-colors duration-300"
              >
                +40 750 227 013
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <svg
                className="w-4 h-4 text-[#ffed88]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <a
                href="mailto:contact@grizzlymediapro.ro"
                className="text-white/80 hover:text-[#ffed88] transition-colors duration-300"
              >
                contact@grizzlymediapro.ro
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Efecte decorative de fundal */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ffed88]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffed88]/3 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
