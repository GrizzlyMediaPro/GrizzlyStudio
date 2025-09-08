"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function PortfolioCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState("pagini-prezentare");
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Hook pentru detectarea dimensiunii ecranului
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const tabs = [
    { id: "pagini-prezentare", label: t("tab_pages") },
    { id: "magazine-online", label: t("tab_shops") },
    { id: "aplicatii", label: t("tab_apps") },
    { id: "social-media", label: t("tab_social") },
  ];

  type SlideItem = {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    category: string;
    url?: string;
  };

  const slides: SlideItem[] = [
    {
      title: t("slide_vera_title"),
      subtitle: t("slide_vera_subtitle"),
      image: "/verasite.png",
      description: t("slide_vera_desc"),
      category: "pagini-prezentare",
      url: "https://www.verapapara.ro/",
    },
    {
      title: t("slide_cmd_title"),
      subtitle: t("slide_cmd_subtitle"),
      image: "/cmdsite.png",
      description: t("slide_cmd_desc"),
      category: "pagini-prezentare",
      url: "https://www.cmdexternalgroup.ro/",
    },
    {
      title: t("slide_curs_title"),
      subtitle: t("slide_curs_subtitle"),
      image: "/cursplussite.png",
      description: t("slide_curs_desc"),
      category: "pagini-prezentare",
      url: "https://www.cursplus.ro/",
    },
    {
      title: t("slide_hrz_title"),
      subtitle: t("slide_hrz_subtitle"),
      image: "/hrzmediasite.png",
      description: t("slide_hrz_desc"),
      category: "pagini-prezentare",
      url: "https://www.hrz-media.com/",
    },
    {
      title: t("slide_aef_title"),
      subtitle: t("slide_aef_subtitle"),
      image: "/aef.png",
      description: t("slide_aef_desc"),
      category: "pagini-prezentare",
      url: "https://aef-one.vercel.app/",
    },
    {
      title: t("slide_comp_title"),
      subtitle: t("slide_comp_subtitle"),
      image: "/comp.png",
      description: t("slide_comp_desc"),
      category: "pagini-prezentare",
      url: "https://www.competizione.ro/",
    },
    {
      title: t("slide_abr_title"),
      subtitle: t("slide_abr_subtitle"),
      image: "/abr.png",
      description: t("slide_abr_desc"),
      category: "pagini-prezentare",
      url: "https://abraham-asociatii.ro/",
    },
    {
      title: t("slide_agro_title"),
      subtitle: t("slide_agro_subtitle"),
      image: "/agro.png",
      description: t("slide_agro_desc"),
      category: "pagini-prezentare",
      url: "https://agrodrona.ro/",
    },
    {
      title: t("slide_platinum_title"),
      subtitle: t("slide_platinum_subtitle"),
      image: "/platinum.png",
      description: t("slide_platinum_desc"),
      category: "pagini-prezentare",
      url: "",
    },
    {
      title: t("slide_hashtagmen_title"),
      subtitle: t("slide_hashtagmen_subtitle"),
      image: "/HashtagMEN.png",
      description: t("slide_hashtagmen_desc"),
      category: "pagini-prezentare",
      url: "",
    },
    // Magazine online
    {
      title: t("slide_screen_title"),
      subtitle: t("slide_screen_subtitle"),
      image: "/screen.png",
      description: t("slide_screen_desc"),
      category: "magazine-online",
      url: "https://screenshield.ro/",
    },
    {
      title: t("slide_voc_title"),
      subtitle: t("slide_voc_subtitle"),
      image: "/voc.png",
      description: t("slide_voc_desc"),
      category: "aplicatii",
      url: "https://www.voceacampusului.ro/",
    },
    // Social media results (rez1 - rez6)
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez1.png",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez2.png",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez3.png",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez4.png",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez5.png",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez6.png",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
  ];

  const getFilteredSlides = () => {
    return slides.filter((slide) => slide.category === activeTab);
  };

  const getVisibleSlides = () => {
    const filteredSlides = getFilteredSlides();
    if (filteredSlides.length === 0) return [];

    // Numărul de slide-uri în funcție de dimensiunea ecranului
    const maxSlides =
      screenSize === "mobile" ? 1 : screenSize === "tablet" ? 2 : 3;
    const visibleSlides = [];

    for (let i = 0; i < Math.min(maxSlides, filteredSlides.length); i++) {
      const index = (currentIndex + i) % filteredSlides.length;
      visibleSlides.push({
        ...filteredSlides[index],
        originalIndex: index,
      });
    }
    return visibleSlides;
  };

  const nextSlide = () => {
    if (isAnimating) return;
    const filteredSlides = getFilteredSlides();
    if (filteredSlides.length === 0) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    const filteredSlides = getFilteredSlides();
    if (filteredSlides.length === 0) return;

    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length
    );
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentIndex(0); // Reset la primul slide când schimbi tab-ul
  };

  const visibleSlides = getVisibleSlides();

  // Fără animații interne pentru a evita conflictele cu FadeInElement wrapper

  return (
    <div
      className="portfolio-carousel-container max-w-6xl mx-auto mb-16"
      onPointerDown={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Taburi pentru filtrare - responsive */}
      <div className="flex justify-center mb-12">
        <div className="portfolio-tabs flex flex-col sm:flex-row sm:justify-evenly flex-wrap gap-2 bg-black/20 backdrop-blur-md rounded-2xl p-2 border border-white/10 w-full sm:max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`portfolio-tab px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? "bg-white text-black shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Container pentru carduri - responsive cu touch support */}
        <div
          ref={carouselRef}
          className="portfolio-carousel-scroll flex gap-4 sm:gap-6 pb-6 px-0 sm:px-8 justify-center group overflow-visible overscroll-contain touch-pan-x select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {visibleSlides.map((slide, index) => (
            <div
              key={`${slide.originalIndex}-${currentIndex}`}
              className={`portfolio-card flex-shrink-0 transition-all duration-700 ease-out ${
                // Responsive sizing pentru carduri
                index === 1 && visibleSlides.length > 2
                  ? "w-full sm:w-[20rem] md:w-[26rem] lg:w-[26rem]"
                  : "w-full sm:w-72 md:w-80 lg:w-80"
              } bg-black/40 rounded-2xl p-4 sm:p-6 border border-gray-300/20 shadow-xl transform group-hover:scale-95 group-hover:blur-sm hover:blur-none hover:z-20 hover:scale-110`}
              style={{
                animation: "none",
              }}
            >
              <div className="text-center mb-4">
                <h4 className="nohemi-black text-lg sm:text-xl text-white mb-2">
                  {slide.title}
                </h4>
                <p className="text-[#ffed88] text-xs sm:text-sm">
                  {slide.subtitle}
                </p>
              </div>

              {/* Telefon cu screenshot - responsive */}
              <div
                className={`portfolio-phone relative mx-auto ${
                  // Responsive sizing pentru telefon
                  index === 1 && visibleSlides.length > 2
                    ? "w-48 h-[18rem] sm:w-64 sm:h-[20rem] md:w-80 md:h-[24rem] lg:w-80 lg:h-[24rem]"
                    : "w-40 h-[16rem] sm:w-48 sm:h-[18rem] md:w-56 md:h-[26rem] lg:w-56 lg:h-[26rem]"
                } rounded-3xl p-2 sm:p-3 mb-4`}
              >
                <div className="w-full h-full rounded-2xl overflow-visible">
                  <div
                    className="w-full h-full bg-cover bg-center rounded-2xl"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
                    }}
                  ></div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/80 text-xs sm:text-sm mb-3">
                  {slide.description}
                </p>
                {slide.url ? (
                  <a
                    href={slide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-[#ffed88] text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity"
                    aria-label={`${t("view_label")} ${slide.title}`}
                  >
                    <span>{t("view_label")}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffed88"
                      className="size-3 sm:size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                ) : (
                  <div className="inline-flex items-center justify-center gap-2 text-[#ffed88] text-xs sm:text-sm font-medium opacity-50 cursor-not-allowed select-none">
                    <span>{t("view_label")}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffed88"
                      className="size-3 sm:size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots with arrows - responsive */}
        <div className="portfolio-navigation flex justify-center items-center gap-2 sm:gap-4 mt-6">
          <button
            type="button"
            onPointerDown={(e) => {
              e.stopPropagation();
              // @ts-ignore - nativeEvent exists on synthetic events in React DOM
              if (
                e.nativeEvent &&
                typeof e.nativeEvent.stopImmediatePropagation === "function"
              ) {
                // @ts-ignore
                e.nativeEvent.stopImmediatePropagation();
              }
              e.preventDefault();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              // @ts-ignore
              if (
                e.nativeEvent &&
                typeof e.nativeEvent.stopImmediatePropagation === "function"
              ) {
                // @ts-ignore
                e.nativeEvent.stopImmediatePropagation();
              }
              e.preventDefault();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              // @ts-ignore
              if (
                e.nativeEvent &&
                typeof e.nativeEvent.stopImmediatePropagation === "function"
              ) {
                // @ts-ignore
                e.nativeEvent.stopImmediatePropagation();
              }
              e.preventDefault();
            }}
            onClick={(e) => {
              e.stopPropagation();
              // @ts-ignore
              if (
                e.nativeEvent &&
                typeof e.nativeEvent.stopImmediatePropagation === "function"
              ) {
                // @ts-ignore
                e.nativeEvent.stopImmediatePropagation();
              }
              e.preventDefault();
              prevSlide();
            }}
            className="portfolio-nav-button w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 ease-in-out hover:scale-110"
            aria-label={t("prev_slide")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-4 sm:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div className="flex items-center gap-1 sm:gap-2">
            {getFilteredSlides().map((_, index) => (
              <div
                key={index}
                className={`portfolio-dot h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 sm:w-8 bg-white active"
                    : "w-2 bg-white/30"
                }`}
              ></div>
            ))}
          </div>

          <button
            type="button"
            onPointerDown={(e) => {
              e.stopPropagation();
              // @ts-ignore - nativeEvent exists on synthetic events in React DOM
              if (
                e.nativeEvent &&
                typeof e.nativeEvent.stopImmediatePropagation === "function"
              ) {
                // @ts-ignore
                e.nativeEvent.stopImmediatePropagation();
              }
              e.preventDefault();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              // @ts-ignore
              if (
                e.nativeEvent &&
                typeof e.nativeEvent.stopImmediatePropagation === "function"
              ) {
                // @ts-ignore
                e.nativeEvent.stopImmediatePropagation();
              }
              e.preventDefault();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              // @ts-ignore
              if (
                e.nativeEvent &&
                typeof e.nativeEvent.stopImmediatePropagation === "function"
              ) {
                // @ts-ignore
                e.nativeEvent.stopImmediatePropagation();
              }
              e.preventDefault();
            }}
            onClick={(e) => {
              e.stopPropagation();
              // @ts-ignore
              if (
                e.nativeEvent &&
                typeof e.nativeEvent.stopImmediatePropagation === "function"
              ) {
                // @ts-ignore
                e.nativeEvent.stopImmediatePropagation();
              }
              e.preventDefault();
              nextSlide();
            }}
            className="portfolio-nav-button w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 ease-in-out hover:scale-110"
            aria-label={t("next_slide")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-4 sm:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
