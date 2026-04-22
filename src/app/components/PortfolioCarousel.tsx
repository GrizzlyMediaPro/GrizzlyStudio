"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageProvider";
import FadeInElement from "./FadeInElement";
import type { PortfolioCategory } from "@/lib/portfolio-types";
import { normalizeSocialEmbedUrl } from "@/lib/social-embed";

export default function PortfolioCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState<PortfolioCategory>("PAGINI_PREZENTARE");
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const [slides, setSlides] = useState<SlideItem[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [selectedSlide, setSelectedSlide] = useState<SlideItem | null>(null);
  const [modalHostReady, setModalHostReady] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setModalHostReady(true);
  }, []);

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
                  type="button"
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
          className="portfolio-carousel-scroll flex gap-2 sm:gap-4 md:gap-6 pb-6 justify-center group card-group overflow-visible overscroll-contain select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {visibleSlides.map((slide, index) => {
            const embedSrc = normalizeSocialEmbedUrl(slide.embedUrl);
            return (
              <FadeInElement
                key={`${slide.id}-${currentIndex}-${index}`}
                delay={index * 150}
                direction="up"
                duration={600}
                className={`relative z-0 flex-shrink-0 flex w-full sm:w-auto ${
                  screenSize === "mobile" ? "h-[32rem]" : "h-[36rem]"
                }`}
              >
                <div
                  className={`portfolio-card card relative z-0 transition-all duration-500 ease-out flex flex-col cursor-pointer ${
                    screenSize === "mobile"
                      ? "w-full h-[32rem]"
                      : screenSize === "tablet"
                        ? index === 1 && visibleSlides.length > 2
                          ? "w-full sm:w-[18rem] h-[36rem]"
                          : "w-full sm:w-64 h-[36rem]"
                        : index === 1 && visibleSlides.length > 2
                          ? "w-full sm:w-[20rem] md:w-[26rem] lg:w-[26rem] h-[36rem]"
                          : "w-full sm:w-72 md:w-80 lg:w-80 h-[36rem]"
                  } bg-black/40 rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-300/20 shadow-xl transform will-change-transform group-hover:scale-95 hover:!scale-110 hover:!z-30`}
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
                className={`portfolio-phone relative mx-auto flex-grow ${
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

                  <div className="text-center mt-auto">
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
              </FadeInElement>
            );
          })}
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

      {modalHostReady && selectedSlide
        ? createPortal(
            <div
              className="fixed inset-0 z-[10050] flex items-center justify-center overflow-y-auto overscroll-y-contain p-4 sm:p-6"
              style={{
                paddingTop: "max(1rem, env(safe-area-inset-top))",
                paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
              }}
            >
              <button
                type="button"
                className="absolute inset-0 cursor-default bg-black/80"
                aria-label="Închide dialogul"
                onClick={closeSlideModal}
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="portfolio-modal-title"
                className="relative z-10 flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-zinc-950 shadow-[0_25px_80px_-12px_rgba(0,0,0,0.85)] ring-1 ring-white/10 sm:rounded-3xl"
                style={{ maxHeight: "min(92dvh, 900px)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/[0.08] px-5 py-4 sm:px-6 sm:py-5">
                  <div className="min-w-0 flex-1 pr-1">
                    <h4
                      id="portfolio-modal-title"
                      className="nohemi-black text-xl leading-tight text-white sm:text-2xl"
                    >
                      {selectedSlide.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-snug text-[#ffed88] sm:text-base">
                      {selectedSlide.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeSlideModal}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
                    aria-label="Închide"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="size-5"
                      aria-hidden="true"
                    >
                      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto">
                  <div className="bg-black px-4 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5">
                    {selectedSlide.category === "SOCIAL_MEDIA" && selectedSlideEmbedSrc ? (
                      <div className="relative w-full overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-white/10">
                        <div className="relative aspect-video w-full">
                          <iframe
                            src={selectedSlideEmbedSrc}
                            className="absolute inset-0 h-full w-full border-0"
                            title={selectedSlide.title}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative mx-auto flex h-[48vh] min-h-[12rem] w-full max-w-full items-center justify-center rounded-xl bg-zinc-900/80 p-2 ring-1 ring-white/10 sm:min-h-[14rem]">
                        <Image
                          src={selectedSlide.image}
                          alt={selectedSlide.title}
                          fill
                          className="object-contain p-1"
                          sizes="(max-width: 640px) 100vw, 42rem"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-4 border-t border-white/[0.06] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
                    <p className="text-sm leading-relaxed text-white/75 sm:text-[15px]">
                      {selectedSlide.description}
                    </p>
                    {selectedSlide.url ? (
                      <a
                        href={selectedSlide.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#ffed88] px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:self-center"
                      >
                        <span>{t("view_label")}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </a>
                    ) : (
                      <div className="inline-flex shrink-0 cursor-not-allowed select-none items-center justify-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/45 sm:self-center">
                        <span>{t("view_label")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
