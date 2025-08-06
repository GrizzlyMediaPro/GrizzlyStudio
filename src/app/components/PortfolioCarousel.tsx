"use client";

import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
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

  const tabs = [
    { id: "pagini-prezentare", label: "Pagini de prezentare" },
    { id: "magazine-online", label: "Magazine online" },
    { id: "aplicatii", label: "Aplicații web/mobile" },
    { id: "social-media", label: "Rezultate social media" },
    { id: "altele", label: "Altele" },
  ];

  const slides = [
    {
      title: "Vera Papara Psiholog",
      subtitle: "Site pentru psiholog",
      image: "/verasite.png",
      description: "Site profesional pentru cabinetul de psihologie.",
      category: "pagini-prezentare",
    },
    {
      title: "CMD External Group",
      subtitle: "Web design + Official Event Presentation",
      image: "/cmdsite.png",
      description: "Professional web design and development services.",
      category: "pagini-prezentare",
    },
    {
      title: "CursPlus",
      subtitle: "Landing page",
      image: "/cursplussite.png",
      description: "Educational platform and course management system.",
      category: "pagini-prezentare",
    },
    {
      title: "HRZ Media",
      subtitle: "Web design & branding",
      image: "/hrzmediasite.png",
      description: "Creative media agency and branding solutions.",
      category: "pagini-prezentare",
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

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentIndex(0); // Reset la primul slide când schimbi tab-ul
  };

  const visibleSlides = getVisibleSlides();

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
          className="portfolio-carousel-scroll flex gap-4 sm:gap-6 pb-6 px-8 justify-center group overflow-visible"
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
                animation:
                  slideDirection === "left"
                    ? "smoothSlideLeft 0.8s ease-out"
                    : slideDirection === "right"
                    ? "smoothSlideRight 0.8s ease-out"
                    : "none",
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
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#ffed88] text-xs sm:text-sm font-medium">
                    View
                  </span>
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
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots with arrows - responsive */}
        <div className="portfolio-navigation flex justify-center items-center gap-2 sm:gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="portfolio-nav-button w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 ease-in-out hover:scale-110"
            aria-label="Previous slide"
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
            aria-label="Next slide"
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
