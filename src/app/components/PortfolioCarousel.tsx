"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import FadeInElement from "./FadeInElement";

export default function PortfolioCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState("pagini-prezentare");
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  // Hook pentru detectarea dimensiunii ecranului
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
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
      url: "https://www.platinumsocial.ro/",
    },
    {
      title: t("slide_hashtagmen_title"),
      subtitle: t("slide_hashtagmen_subtitle"),
      image: "/HashtagMEN.png",
      description: t("slide_hashtagmen_desc"),
      category: "pagini-prezentare",
      url: "https://www.hashtagmen.ro/",
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
      title: t("slide_rouh_title"),
      subtitle: t("slide_rouh_subtitle"),
      image: "/rouh.png",
      description: t("slide_rouh_desc"),
      category: "magazine-online",
      url: "Launching Soon",
    },
    {
      title: t("slide_smarthomes_title"),
      subtitle: t("slide_smarthomes_subtitle"),
      image: "/smarthomes.png",
      description: t("slide_smarthomes_desc"),
      category: "magazine-online",
      url: "https://www.smarthomemall.ro/",
    },
    {
      title: t("slide_amarg_title"),
      subtitle: t("slide_amarg_subtitle"),
      image: "/amarg.png",
      description: t("slide_amarg_desc"),
      category: "magazine-online",
      url: "Inactive",
    },
    {
      title: t("slide_treasurebox_title"),
      subtitle: t("slide_treasurebox_subtitle"),
      image: "/treasurebox.png",
      description: t("slide_treasurebox_desc"),
      category: "magazine-online",
      url: "Inactive",
    },
    {
      title: t("slide_voc_title"),
      subtitle: t("slide_voc_subtitle"),
      image: "/voc.png",
      description: t("slide_voc_desc"),
      category: "aplicatii",
      url: "https://www.voceacampusului.ro/",
    },
    {
      title: t("slide_picpossible_title"),
      subtitle: t("slide_picpossible_subtitle"),
      image: "/picpossible.png",
      description: t("slide_picpossible_desc"),
      category: "aplicatii",
      url: "Launching Soon",
    },
    {
      title: t("slide_quicklearn_title"),
      subtitle: t("slide_quicklearn_subtitle"),
      image: "/quicklearn.png",
      description: t("slide_quicklearn_desc"),
      category: "aplicatii",
      url: "Launching Soon",
    },
    // Social media results (rez1 - rez6)
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez1.jpg",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez4.jpg",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez2.jpg",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez3.jpg",
      description: t("social_slide_desc"),
      category: "social-media",
      url: "",
    },
    {
      title: t("social_slide_title"),
      subtitle: "",
      image: "/rez6.jpg",
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
      <FadeInElement delay={0} direction="up">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="portfolio-tabs grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-row lg:justify-evenly gap-2 bg-black/20 backdrop-blur-md rounded-2xl p-2 border border-white/10 w-full px-4 sm:px-6">
            {tabs.map((tab, index) => (
              <FadeInElement
                key={tab.id}
                delay={index * 100}
                direction="up"
                className="w-full sm:w-auto"
              >
                <button
                  onClick={() => handleTabChange(tab.id)}
                  className={`portfolio-tab w-full px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-white text-black shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              </FadeInElement>
            ))}
          </div>
        </div>
      </FadeInElement>

      <div className="relative px-0 sm:px-4 md:px-6">
        {/* Container pentru carduri - responsive cu touch support */}
        <div
          ref={carouselRef}
          className="portfolio-carousel-scroll flex gap-2 sm:gap-4 md:gap-6 pb-6 justify-center group overflow-visible overscroll-contain select-none"
        >
          {visibleSlides.map((slide, index) => (
            <FadeInElement
              key={`${slide.originalIndex}-${currentIndex}`}
              delay={index * 150}
              direction="up"
              duration={600}
              className={`flex-shrink-0 flex w-full sm:w-auto ${
                screenSize === "mobile" ? "h-[32rem]" : "h-[36rem]"
              }`}
            >
              <div
                className={`portfolio-card transition-all duration-700 ease-out flex flex-col ${
                  // Responsive sizing pentru carduri - mobile-first approach
                  screenSize === "mobile"
                    ? "w-full h-[32rem]"
                    : screenSize === "tablet"
                    ? index === 1 && visibleSlides.length > 2
                      ? "w-full sm:w-[18rem] h-[36rem]"
                      : "w-full sm:w-64 h-[36rem]"
                    : index === 1 && visibleSlides.length > 2
                    ? "w-full sm:w-[20rem] md:w-[26rem] lg:w-[26rem] h-[36rem]"
                    : "w-full sm:w-72 md:w-80 lg:w-80 h-[36rem]"
                } bg-black/40 rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-300/20 shadow-xl transform group-hover:scale-95 group-hover:blur-sm hover:blur-none hover:z-20 hover:scale-110`}
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
                  className={`portfolio-phone relative mx-auto flex-grow ${
                    // Responsive sizing pentru telefon - mobile-first
                    screenSize === "mobile"
                      ? "w-56 h-[20rem] max-w-full"
                      : screenSize === "tablet"
                      ? index === 1 && visibleSlides.length > 2
                        ? "w-48 h-[18rem] sm:w-56 sm:h-[20rem]"
                        : "w-40 h-[16rem] sm:w-48 sm:h-[18rem]"
                      : index === 1 && visibleSlides.length > 2
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

                <div className="text-center mt-auto">
                  <p className="text-white/80 text-xs sm:text-sm mb-3">
                    {slide.description}
                  </p>
                  {slide.url === "Launching Soon" ? (
                    <div className="inline-flex items-center justify-center gap-2 text-[#ffed88] text-xs sm:text-sm font-medium">
                      <span>Launching Soon</span>
                    </div>
                  ) : slide.url === "Inactive" ? (
                    <div className="inline-flex items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm font-medium opacity-50">
                      <span>Inactive</span>
                    </div>
                  ) : slide.url ? (
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
            </FadeInElement>
          ))}
        </div>

        {/* Navigation dots with arrows - responsive */}
        <FadeInElement delay={200} direction="up">
          <div className="portfolio-navigation flex justify-center items-center gap-2 sm:gap-4 mt-6">
            <button
              type="button"
              onPointerDown={(e) => {
                e.stopPropagation();
                if (
                  e.nativeEvent &&
                  typeof e.nativeEvent.stopImmediatePropagation === "function"
                ) {
                  e.nativeEvent.stopImmediatePropagation();
                }
                e.preventDefault();
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                if (
                  e.nativeEvent &&
                  typeof e.nativeEvent.stopImmediatePropagation === "function"
                ) {
                  e.nativeEvent.stopImmediatePropagation();
                }
                e.preventDefault();
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                if (
                  e.nativeEvent &&
                  typeof e.nativeEvent.stopImmediatePropagation === "function"
                ) {
                  e.nativeEvent.stopImmediatePropagation();
                }
                e.preventDefault();
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (
                  e.nativeEvent &&
                  typeof e.nativeEvent.stopImmediatePropagation === "function"
                ) {
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
                if (
                  e.nativeEvent &&
                  typeof e.nativeEvent.stopImmediatePropagation === "function"
                ) {
                  e.nativeEvent.stopImmediatePropagation();
                }
                e.preventDefault();
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                if (
                  e.nativeEvent &&
                  typeof e.nativeEvent.stopImmediatePropagation === "function"
                ) {
                  e.nativeEvent.stopImmediatePropagation();
                }
                e.preventDefault();
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                if (
                  e.nativeEvent &&
                  typeof e.nativeEvent.stopImmediatePropagation === "function"
                ) {
                  e.nativeEvent.stopImmediatePropagation();
                }
                e.preventDefault();
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (
                  e.nativeEvent &&
                  typeof e.nativeEvent.stopImmediatePropagation === "function"
                ) {
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
        </FadeInElement>
      </div>
    </div>
  );
}
