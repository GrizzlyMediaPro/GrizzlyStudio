"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import FadeInElement from "./FadeInElement";

const ROW_1 = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
const ROW_2 = [5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7];

function TestimonialCard({
  num,
  onOpen,
}: {
  num: number;
  onOpen: (num: number) => void;
}) {
  const { t, lang } = useLanguage();
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useLayoutEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    setIsTruncated(el.scrollHeight > el.clientHeight + 1);
  }, [lang, num]);

  return (
    <button
      type="button"
      onClick={() => onOpen(num)}
      className="flex flex-col flex-shrink-0 w-[320px] md:w-[400px] h-[280px] md:h-[300px] mx-3 text-left bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-2xl p-6 border border-gray-300/20 hover:border-[#ffed88]/40 transition-colors cursor-pointer"
    >
      <div className="relative flex-1 min-h-0">
        <p
          ref={quoteRef}
          className="text-white/80 text-sm md:text-base leading-relaxed italic line-clamp-5"
        >
          &ldquo;{t(`testimonial_${num}_quote`)}&rdquo;
        </p>
        {isTruncated && (
          <span className="absolute bottom-0 left-0 right-0 pt-6 bg-gradient-to-t from-neutral-900 via-neutral-900/95 to-transparent text-[#ffed88] text-xs font-medium">
            {t("testimonials_read_more")} →
          </span>
        )}
      </div>
      <div className="flex items-center gap-3 mt-auto pt-4 shrink-0">
        <div className="w-9 h-9 rounded-full bg-[#ffed88]/20 flex items-center justify-center shrink-0">
          <span className="text-[#ffed88] text-sm font-bold">
            {t(`testimonial_${num}_name`).charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white text-sm font-medium">{t(`testimonial_${num}_name`)}</p>
          <p className="text-[#ffed88] text-xs">{t(`testimonial_${num}_company`)}</p>
        </div>
      </div>
    </button>
  );
}

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    if (openId === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openId]);

  return (
    <div className="pt-10 md:pt-24 pb-8 md:pb-12 relative z-10">
      <FadeInElement delay={0} direction="up">
        <div className="text-center mb-12 px-6">
          <h2 className="nohemi-heading text-2xl md:text-3xl text-white">
            {t("testimonials_title")}
            <span className="text-[#ffed88]">{t("testimonials_highlight")}</span>
          </h2>
        </div>
      </FadeInElement>

      <div className={`w-full overflow-hidden relative ${openId !== null ? "[&_.animate-scroll-left-slow]:[animation-play-state:paused] [&_.animate-scroll-right-slow]:[animation-play-state:paused]" : ""}`}>
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll-left-slow mb-6">
          {ROW_1.map((num, idx) => (
            <TestimonialCard key={`row1-${idx}`} num={num} onOpen={setOpenId} />
          ))}
        </div>

        <div className="flex w-max animate-scroll-right-slow">
          {ROW_2.map((num, idx) => (
            <TestimonialCard key={`row2-${idx}`} num={num} onOpen={setOpenId} />
          ))}
        </div>
      </div>

      {openId !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="testimonial-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label={t("testimonials_close")}
            onClick={() => setOpenId(null)}
          />
          <div className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 rounded-2xl p-6 md:p-8 border border-gray-300/20 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors"
              aria-label={t("testimonials_close")}
            >
              ✕
            </button>

            <p className="text-white/90 text-sm md:text-base leading-relaxed italic pr-8">
              &ldquo;{t(`testimonial_${openId}_quote`)}&rdquo;
            </p>

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
              <div className="w-11 h-11 rounded-full bg-[#ffed88]/20 flex items-center justify-center shrink-0">
                <span className="text-[#ffed88] text-base font-bold">
                  {t(`testimonial_${openId}_name`).charAt(0)}
                </span>
              </div>
              <div>
                <p id="testimonial-modal-title" className="text-white text-base font-medium">
                  {t(`testimonial_${openId}_name`)}
                </p>
                <p className="text-[#ffed88] text-sm">{t(`testimonial_${openId}_company`)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
