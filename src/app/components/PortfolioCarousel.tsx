"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import type { PortfolioCategory } from "@/lib/portfolio-types";
import { normalizeSocialEmbedUrl } from "@/lib/social-embed";

export default function PortfolioCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState<PortfolioCategory>("PAGINI_PREZENTARE");
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const [slides, setSlides] = useState<SlideItem[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [selectedSlide, setSelectedSlide] = useState<SlideItem | null>(null);
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
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
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

  type SlideItem = {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    category: PortfolioCategory;
    embedUrl?: string | null;
    url?: string;
    position: number;
  };

  const tabs: { id: PortfolioCategory; label: string }[] = [
    { id: "PAGINI_PREZENTARE", label: t("tab_pages") },
    { id: "MAGAZINE_ONLINE", label: t("tab_shops") },
    { id: "APLICATII", label: t("tab_apps") },
    { id: "SOCIAL_MEDIA", label: t("tab_social") },
  ];

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const response = await fetch("/api/portfolio-items", { cache: "no-store" });
        const data = (await response.json()) as SlideItem[];
        setSlides(data);
      } catch {
        setSlides([]);
      }
    };

    void loadSlides();
  }, []);

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
    setSlideDirection("left");
    setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
    setTimeout(() => {
      setSlideDirection(null);
      setIsAnimating(false);
    }, 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    const filteredSlides = getFilteredSlides();
    if (filteredSlides.length === 0) return;

    setIsAnimating(true);
    setSlideDirection("right");
    setCurrentIndex(
      (prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length
    );
    setTimeout(() => {
      setSlideDirection(null);
      setIsAnimating(false);
    }, 800);
  };

  const handleTabChange = (tabId: PortfolioCategory) => {
    setActiveTab(tabId);
    setCurrentIndex(0); // Reset la primul slide când schimbi tab-ul
  };

  const openSlideModal = (slide: SlideItem) => {
    setSelectedSlide(slide);
  };

  const closeSlideModal = () => {
    setSelectedSlide(null);
  };

  useEffect(() => {
    if (!selectedSlide) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSlideModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedSlide]);

  const visibleSlides = getVisibleSlides();
  const selectedSlideEmbedSrc = normalizeSocialEmbedUrl(selectedSlide?.embedUrl);

  // Hook pentru tab-uri
  const { elementRef: tabsRef, isVisible: tabsVisible } =
    useIntersectionObserver({
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      triggerOnce: false,
    }) as { elementRef: React.RefObject<HTMLDivElement>; isVisible: boolean };

  return (
    <div className="portfolio-carousel-container max-w-6xl mx-auto mb-16">
      {/* Taburi pentru filtrare - responsive */}
      <div
        ref={tabsRef}
        className="flex justify-center mb-12 transition-all duration-700 ease-out"
        style={{
          opacity: tabsVisible ? 1 : 0,
          transform: tabsVisible ? "translateY(0)" : "translateY(20px)",
          filter: tabsVisible ? "blur(0px)" : "blur(8px)",
        }}
      >
        <div className="portfolio-tabs flex flex-nowrap sm:justify-evenly gap-3 overflow-x-auto bg-black/20 backdrop-blur-md rounded-2xl p-3 border border-white/10 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`portfolio-tab px-5 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out whitespace-nowrap flex-shrink-0 ${
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
          className="portfolio-carousel-scroll flex gap-4 sm:gap-6 pb-6 px-8 justify-center group overflow-visible"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {visibleSlides.map((slide, index) => {
            const embedSrc = normalizeSocialEmbedUrl(slide.embedUrl);
            return (
              <div
              key={`${slide.id}-${currentIndex}`}
              className={`portfolio-card flex-shrink-0 transition-all duration-700 ease-out ${
                // Responsive sizing pentru carduri
                index === 1 && visibleSlides.length > 2
                  ? "w-full sm:w-[20rem] md:w-[26rem] lg:w-[26rem]"
                  : "w-full sm:w-72 md:w-80 lg:w-80"
              } bg-black/40 rounded-2xl p-4 sm:p-6 border border-gray-300/20 shadow-xl transform group-hover:scale-95 group-hover:blur-sm hover:blur-none hover:z-20 hover:scale-110 cursor-pointer`}
              style={{
                animation:
                  slideDirection === "left"
                    ? "smoothSlideLeft 0.8s ease-out"
                    : slideDirection === "right"
                    ? "smoothSlideRight 0.8s ease-out"
                    : "none",
              }}
              onClick={() => openSlideModal(slide)}
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
                  {slide.category === "SOCIAL_MEDIA" && embedSrc ? (
                    <iframe
                      src={embedSrc}
                      className="w-full h-full rounded-2xl border border-white/20 bg-black"
                      title={slide.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
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
                  )}
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
                    onClick={(event) => event.stopPropagation()}
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
            );
          })}
        </div>

        {/* Navigation dots with arrows - responsive */}
        <div className="portfolio-navigation flex justify-center items-center gap-2 sm:gap-4 mt-6">
          <button
            onClick={prevSlide}
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
            onClick={nextSlide}
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

      {selectedSlide ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
          onClick={closeSlideModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedSlide.title}
        >
          <div
            className="w-full max-w-5xl bg-[#121212] border border-white/20 rounded-2xl p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h4 className="nohemi-black text-xl sm:text-2xl text-white">
                  {selectedSlide.title}
                </h4>
                <p className="text-[#ffed88] text-sm sm:text-base mt-1">
                  {selectedSlide.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={closeSlideModal}
                className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Inchide"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black mb-4">
              {selectedSlide.category === "SOCIAL_MEDIA" && selectedSlideEmbedSrc ? (
                <iframe
                  src={selectedSlideEmbedSrc}
                  className="w-full h-[60vh]"
                  title={selectedSlide.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <img
                  src={selectedSlide.image}
                  alt={selectedSlide.title}
                  className="w-full max-h-[70vh] object-contain bg-black"
                />
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-white/80 text-sm sm:text-base">
                {selectedSlide.description}
              </p>
              {selectedSlide.url ? (
                <a
                  href={selectedSlide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-[#ffed88] text-black text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>{t("view_label")}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 sm:size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              ) : (
                <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-white/10 text-white/60 text-sm sm:text-base font-semibold cursor-not-allowed select-none">
                  <span>{t("view_label")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
