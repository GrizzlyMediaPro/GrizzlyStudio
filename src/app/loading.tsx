"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center">
      {/* Efect de glow în centru */}
      <div className="absolute inset-0 glow-effect pointer-events-none"></div>

      {/* Conținut principal */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/grizzlylogo.png"
            alt="Grizzly Media Pro Logo"
            width={280}
            height={65}
            className="object-contain mx-auto transition-all duration-300"
          />
        </div>

        {/* Spinner animat */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto relative">
            {/* Spinner exterior */}
            <div className="w-20 h-20 border-4 border-white/20 rounded-full animate-spin">
              <div className="w-full h-full border-4 border-transparent border-t-[#ffed88] rounded-full animate-spin"></div>
            </div>

            {/* Spinner interior */}
            <div
              className="absolute top-2 left-2 w-16 h-16 border-4 border-white/10 rounded-full animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            >
              <div
                className="w-full h-full border-4 border-transparent border-b-[#ffed88] rounded-full animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "1.5s",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Text de loading */}
        <div className="mb-8">
          <h2 className="nohemi-heading text-2xl md:text-3xl text-white mb-4">
            Se încarcă...
          </h2>
          <p className="nohemi-medium text-lg text-white/80">
            Pregătim experiența ta digitală
          </p>
        </div>

        {/* Dots animați */}
        <div className="flex justify-center space-x-2">
          <div
            className="w-3 h-3 bg-[#ffed88] rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-[#ffed88] rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-[#ffed88] rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 max-w-xs mx-auto">
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#ffed88] to-[#ffed88]/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Efecte decorative de fundal */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ffed88]/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffed88]/3 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#ffed88]/8 rounded-full blur-2xl pointer-events-none animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
}
