"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Verifică dacă utilizatorul a acceptat deja cookies-urile
    const cookieConsent = localStorage.getItem("cookieConsent");

    if (!cookieConsent) {
      // Așteaptă ca animația hero să se termine (2.5 secunde)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsAccepted(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Nu salvăm nimic în localStorage când utilizatorul refuză
    setIsAccepted(true);
    setIsVisible(false);
  };

  if (!isVisible || isAccepted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-4 pointer-events-none">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-md w-full mx-4 md:max-w-2xl md:p-8 shadow-[0_0_50px_rgba(255,237,136,0.3)] animate-fade-in-up pointer-events-auto relative z-10">
        {/* Icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffed88]/10 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-[#ffed88]"
              fill="none"
              stroke="currentColor"
              viewBox="0 -0.5 25 25"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.41875 12C4.41875 5.6 9.77705 4 12.4562 4H13.4609V8H16.4749V11H20.4936V12C20.4936 18.4 15.4702 20 12.4562 20C9.44215 20 4.41875 18.4 4.41875 12Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.44214 8H9.44314"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7.43277 12H7.43377"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12.4562 13H12.4572"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.4468 16H10.4478"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16.4749 15H16.4759"
              />
            </svg>
          </div>
        </div>

        {/* Titlu */}
        <h3 className="nohemi-heading text-xl md:text-2xl text-white text-center mb-3">
          Utilizarea Cookie-urilor
        </h3>

        {/* Text */}
        <p className="nohemi-medium text-sm md:text-base text-white/80 text-center mb-6 leading-relaxed">
          Utilizăm localStorage pentru a salva preferințele tale de limbă și
          pentru a îmbunătăți experiența ta pe site. Prin acceptarea acestor
          cookie-uri, ne permiți să salvăm setările tale și să îți oferim o
          experiență personalizată.
        </p>

        {/* Butoane */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-[#ffed88] text-black px-6 py-3 rounded-full font-medium hover:bg-[#ffed88]/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,237,136,0.3)] hover:shadow-[0_0_25px_rgba(255,237,136,0.4)] text-sm md:text-base"
          >
            Accept toate cookie-urile
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 bg-transparent text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20 text-sm md:text-base"
          >
            Refuz
          </button>
        </div>

        {/* Text informativ */}
        <div className="mt-4 text-center">
          <p className="text-white/60 text-xs md:text-sm mb-2">
            Poți modifica aceste setări oricând din preferințele browserului.
          </p>
          <a
            href="/privacy"
            className="text-[#ffed88] hover:text-[#ffed88]/80 transition-colors duration-300 text-xs md:text-sm underline"
          >
            Politica de Cookie-uri
          </a>
        </div>
      </div>
    </div>
  );
}
