"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FadeInElement from "./FadeInElement";
import CookieConsent from "./CookieConsent";
import CountUp from "./CountUp";
import { useLanguage } from "../i18n/LanguageProvider";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiExpo,
  SiPrisma,
  SiStripe,
  SiResend,
  SiJavascript,
  SiTailwindcss,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiLangchain,
  SiN8N,
  SiMake,
  SiZapier,
  SiPython,
  SiSupabase,
  SiSlack,
  SiHubspot,
  SiGooglesheets,
  SiMeta,
  SiInstagram,
  SiTiktok,
  SiFacebook,
  SiLinkedin,
  SiYoutube,
  SiGoogleads,
  SiGoogleanalytics,
  SiMailchimp,
  SiCanva,
  SiFigma,
} from "react-icons/si";

export type PillarId = "software" | "ai" | "strategy";

type Segment = { key: string; accent?: boolean };
type Card = { title: string; desc: string; items: string[] };
type Step = { title: string; desc: string };
type Tech = { name: string; icon: ReactNode };
type Stat = { end: number; suffix: string; title: string; desc: string };

type PillarConfig = {
  heroLine1: Segment[];
  heroLine2: Segment[];
  heroP: string;
  services: { t1: string; h1: string; desc: string; cards: Card[] };
  process: { t1: string; h1: string; desc: string; steps: Step[] };
  differentiator?: Segment[];
  results?: { t1: string; h1: string; desc: string; stats: Stat[] };
  tech: { t1: string; h1: string; desc: string; items: Tech[] };
  cta: { t1: string; h1: string; t2: string; p: string };
};

const techIconClass = "w-8 h-8 text-white";

// Listele din traduceri au prefix „• ”; îl scoatem ca să controlăm marcajul din layout.
const stripBullet = (s: string) => s.replace(/^•\s*/, "");

const CONFIG: Record<PillarId, PillarConfig> = {
  software: {
    heroLine1: [{ key: "sd_hero_t1" }, { key: "sd_hero_h1", accent: true }],
    heroLine2: [
      { key: "sd_hero_h2", accent: true },
      { key: "sd_hero_t2" },
      { key: "sd_hero_h3", accent: true },
    ],
    heroP: "sd_hero_p",
    services: {
      t1: "sd_services_t1",
      h1: "sd_services_h1",
      desc: "sd_services_desc",
      cards: [
        {
          title: "sd_card1_title",
          desc: "sd_card1_desc",
          items: ["sd_card1_li1", "sd_card1_li2", "sd_card1_li3", "sd_card1_li4"],
        },
        {
          title: "sd_card2_title",
          desc: "sd_card2_desc",
          items: ["sd_card2_li1", "sd_card2_li2", "sd_card2_li3", "sd_card2_li4"],
        },
        {
          title: "sd_card3_title",
          desc: "sd_card3_desc",
          items: ["sd_card3_li1", "sd_card3_li2", "sd_card3_li3", "sd_card3_li4"],
        },
      ],
    },
    process: {
      t1: "sd_process_t1",
      h1: "sd_process_h1",
      desc: "sd_process_desc",
      steps: [
        { title: "sd_step1_title", desc: "sd_step1_desc" },
        { title: "sd_step2_title", desc: "sd_step2_desc" },
        { title: "sd_step3_title", desc: "sd_step3_desc" },
        { title: "sd_step4_title", desc: "sd_step4_desc" },
      ],
    },
    differentiator: [
      { key: "devweb_custom_diff_t1", accent: true },
      { key: "devweb_custom_diff_h1" },
      { key: "devweb_custom_diff_t2" },
      { key: "devweb_custom_diff_h2", accent: true },
      { key: "devweb_custom_diff_t3" },
      { key: "devweb_custom_diff_h3", accent: true },
      { key: "devweb_custom_diff_t4" },
    ],
    tech: {
      t1: "sd_tech_t1",
      h1: "sd_tech_h1",
      desc: "sd_tech_desc",
      items: [
        { name: "React", icon: <SiReact className={techIconClass} /> },
        { name: "Next.js", icon: <SiNextdotjs className={techIconClass} /> },
        { name: "TypeScript", icon: <SiTypescript className={techIconClass} /> },
        { name: "Node.js", icon: <SiNodedotjs className={techIconClass} /> },
        { name: "PostgreSQL", icon: <SiPostgresql className={techIconClass} /> },
        { name: "MongoDB", icon: <SiMongodb className={techIconClass} /> },
        { name: "Prisma", icon: <SiPrisma className={techIconClass} /> },
        { name: "React Native", icon: <SiReact className={techIconClass} /> },
        { name: "Expo", icon: <SiExpo className={techIconClass} /> },
        { name: "AWS", icon: <SiAmazon className={techIconClass} /> },
        { name: "Docker", icon: <SiDocker className={techIconClass} /> },
        { name: "Stripe", icon: <SiStripe className={techIconClass} /> },
        { name: "Resend", icon: <SiResend className={techIconClass} /> },
        { name: "JavaScript", icon: <SiJavascript className={techIconClass} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className={techIconClass} /> },
      ],
    },
    cta: { t1: "sd_cta_t1", h1: "sd_cta_h1", t2: "sd_cta_t2", p: "sd_cta_p" },
  },

  ai: {
    heroLine1: [{ key: "aia_hero_t1" }, { key: "aia_hero_h1", accent: true }],
    heroLine2: [
      { key: "aia_hero_h2", accent: true },
      { key: "aia_hero_t2" },
      { key: "aia_hero_h3", accent: true },
    ],
    heroP: "aia_hero_p",
    services: {
      t1: "aia_services_t1",
      h1: "aia_services_h1",
      desc: "aia_services_desc",
      cards: [
        {
          title: "aia_card1_title",
          desc: "aia_card1_desc",
          items: ["aia_card1_li1", "aia_card1_li2", "aia_card1_li3", "aia_card1_li4"],
        },
        {
          title: "aia_card2_title",
          desc: "aia_card2_desc",
          items: ["aia_card2_li1", "aia_card2_li2", "aia_card2_li3", "aia_card2_li4"],
        },
        {
          title: "aia_card3_title",
          desc: "aia_card3_desc",
          items: ["aia_card3_li1", "aia_card3_li2", "aia_card3_li3", "aia_card3_li4"],
        },
      ],
    },
    process: {
      t1: "aia_process_t1",
      h1: "aia_process_h1",
      desc: "aia_process_desc",
      steps: [
        { title: "aia_step1_title", desc: "aia_step1_desc" },
        { title: "aia_step2_title", desc: "aia_step2_desc" },
        { title: "aia_step3_title", desc: "aia_step3_desc" },
        { title: "aia_step4_title", desc: "aia_step4_desc" },
      ],
    },
    differentiator: [
      { key: "aia_diff_t1" },
      { key: "aia_diff_h1", accent: true },
      { key: "aia_diff_t2" },
      { key: "aia_diff_h2", accent: true },
      { key: "aia_diff_t3" },
      { key: "aia_diff_h3", accent: true },
      { key: "aia_diff_t4" },
    ],
    tech: {
      t1: "aia_tech_t1",
      h1: "aia_tech_h1",
      desc: "aia_tech_desc",
      items: [
        { name: "OpenAI", icon: <SiOpenai className={techIconClass} /> },
        { name: "Anthropic", icon: <SiAnthropic className={techIconClass} /> },
        { name: "Gemini", icon: <SiGooglegemini className={techIconClass} /> },
        { name: "LangChain", icon: <SiLangchain className={techIconClass} /> },
        { name: "n8n", icon: <SiN8N className={techIconClass} /> },
        { name: "Make", icon: <SiMake className={techIconClass} /> },
        { name: "Zapier", icon: <SiZapier className={techIconClass} /> },
        { name: "Python", icon: <SiPython className={techIconClass} /> },
        { name: "Node.js", icon: <SiNodedotjs className={techIconClass} /> },
        { name: "TypeScript", icon: <SiTypescript className={techIconClass} /> },
        { name: "PostgreSQL", icon: <SiPostgresql className={techIconClass} /> },
        { name: "Supabase", icon: <SiSupabase className={techIconClass} /> },
        { name: "Slack", icon: <SiSlack className={techIconClass} /> },
        { name: "HubSpot", icon: <SiHubspot className={techIconClass} /> },
        { name: "Google Sheets", icon: <SiGooglesheets className={techIconClass} /> },
      ],
    },
    cta: { t1: "aia_cta_t1", h1: "aia_cta_h1", t2: "aia_cta_t2", p: "aia_cta_p" },
  },

  strategy: {
    heroLine1: [{ key: "ds_hero_t1" }, { key: "ds_hero_h1", accent: true }],
    heroLine2: [
      { key: "ds_hero_h2", accent: true },
      { key: "ds_hero_t2" },
      { key: "ds_hero_h3", accent: true },
      { key: "ds_hero_t3" },
      { key: "ds_hero_h4", accent: true },
    ],
    heroP: "ds_hero_p",
    services: {
      t1: "ds_services_t1",
      h1: "ds_services_h1",
      desc: "ds_services_desc",
      cards: [
        {
          title: "ds_card1_title",
          desc: "ds_card1_desc",
          items: ["ds_card1_li1", "ds_card1_li2", "ds_card1_li3", "ds_card1_li4"],
        },
        {
          title: "ds_card2_title",
          desc: "ds_card2_desc",
          items: ["ds_card2_li1", "ds_card2_li2", "ds_card2_li3", "ds_card2_li4"],
        },
        {
          title: "ds_card3_title",
          desc: "ds_card3_desc",
          items: ["ds_card3_li1", "ds_card3_li2", "ds_card3_li3", "ds_card3_li4"],
        },
      ],
    },
    process: {
      t1: "ds_process_t1",
      h1: "ds_process_h1",
      desc: "ds_process_desc",
      steps: [
        { title: "ds_step1_title", desc: "ds_step1_desc" },
        { title: "ds_step2_title", desc: "ds_step2_desc" },
        { title: "ds_step3_title", desc: "ds_step3_desc" },
        { title: "ds_step4_title", desc: "ds_step4_desc" },
      ],
    },
    results: {
      t1: "ds_results_t1",
      h1: "ds_results_h1",
      desc: "ds_results_desc",
      stats: [
        { end: 10, suffix: "M+", title: "ds_res1_title", desc: "ds_res1_desc" },
        { end: 10, suffix: "k+", title: "ds_res2_title", desc: "ds_res2_desc" },
        { end: 25, suffix: "+", title: "ds_res3_title", desc: "ds_res3_desc" },
      ],
    },
    differentiator: [
      { key: "ds_diff_t1" },
      { key: "ds_diff_h1", accent: true },
      { key: "ds_diff_t2" },
      { key: "ds_diff_h2", accent: true },
      { key: "ds_diff_t3" },
    ],
    tech: {
      t1: "ds_tech_t1",
      h1: "ds_tech_h1",
      desc: "ds_tech_desc",
      items: [
        { name: "Meta", icon: <SiMeta className={techIconClass} /> },
        { name: "Instagram", icon: <SiInstagram className={techIconClass} /> },
        { name: "TikTok", icon: <SiTiktok className={techIconClass} /> },
        { name: "Facebook", icon: <SiFacebook className={techIconClass} /> },
        { name: "LinkedIn", icon: <SiLinkedin className={techIconClass} /> },
        { name: "YouTube", icon: <SiYoutube className={techIconClass} /> },
        { name: "Google Ads", icon: <SiGoogleads className={techIconClass} /> },
        { name: "Google Analytics", icon: <SiGoogleanalytics className={techIconClass} /> },
        { name: "Mailchimp", icon: <SiMailchimp className={techIconClass} /> },
        { name: "Figma", icon: <SiFigma className={techIconClass} /> },
        { name: "Canva", icon: <SiCanva className={techIconClass} /> },
        { name: "HubSpot", icon: <SiHubspot className={techIconClass} /> },
      ],
    },
    cta: { t1: "ds_cta_t1", h1: "ds_cta_h1", t2: "ds_cta_t2", p: "ds_cta_p" },
  },
};

export default function ServicePillarPage({ pillar }: { pillar: PillarId }) {
  const { t } = useLanguage();
  const c = CONFIG[pillar];

  const renderSegments = (segments: Segment[]) =>
    segments.map((s, i) =>
      s.accent ? (
        <span key={i} className="text-[#ffed88]">
          {t(s.key)}
        </span>
      ) : (
        <span key={i}>{t(s.key)}</span>
      )
    );

  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 glow-effect pointer-events-none"></div>

      <NavBar />

      {/* Hero */}
      <section className="relative h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div
            className="text-center px-6 max-w-6xl mx-auto animate-fade-in-up"
            style={{
              animationDelay: "300ms",
              animationDuration: "1200ms",
              animationFillMode: "both",
            }}
          >
            <h1 className="nohemi-heading text-4xl md:text-6xl text-white mb-6 leading-tight">
              {renderSegments(c.heroLine1)}
              <br />
              {renderSegments(c.heroLine2)}
            </h1>
            <p className="nohemi-medium text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              {t(c.heroP)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg"
              >
                {t("pillar_cta_start")}
              </Link>
              <Link
                href="/#portofoliu"
                className="bg-transparent text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20 text-lg"
              >
                {t("pillar_cta_projects")}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 h-[90%] z-0 md:top-1/2 top-1/3">
          <div className="max-w-6xl mx-auto h-full relative overflow-hidden">
            <div
              className="absolute inset-0 animate-fade-in-up"
              style={{
                animationDelay: "600ms",
                animationDuration: "1500ms",
                animationFillMode: "both",
              }}
            >
              <Image
                src="/heroedge2.png"
                alt="Hero Background"
                fill
                className="object-contain opacity-25"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Servicii: layout editorial pe rânduri, același limbaj vizual ca „Cum lucrăm” */}
        <section className="mb-24">
          <FadeInElement delay={0} direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-end mb-14 md:mb-20">
              <div className="lg:col-span-6">
                <h2 className="nohemi-heading text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1]">
                  {t(c.services.t1)}
                  <span className="text-[#ffed88]">{t(c.services.h1)}</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="nohemi-medium text-base md:text-lg text-white/70 leading-relaxed">
                  {t(c.services.desc)}
                </p>
              </div>
            </div>
          </FadeInElement>

          <div className="border-t border-white/10">
            {c.services.cards.map((card, index) => (
              <FadeInElement key={card.title} delay={120 + index * 120} direction="up">
                <article className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 md:py-12 border-b border-white/10">
                  <div className="lg:col-span-5 flex gap-5 md:gap-8">
                    <span className="nohemi-heading text-4xl md:text-5xl text-white/15 leading-none select-none tabular-nums shrink-0">
                      0{index + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="nohemi-medium text-2xl md:text-3xl text-white leading-tight mb-3 transition-colors duration-300 group-hover:text-[#ffed88]">
                        {t(card.title)}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md">
                        {t(card.desc)}
                      </p>
                    </div>
                  </div>

                  <ul className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 lg:pt-2 pl-14 md:pl-[4.5rem] lg:pl-0">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm md:text-base text-white/80 leading-relaxed"
                      >
                        <span className="mt-[0.7em] h-px w-4 bg-[#ffed88]/70 shrink-0" />
                        <span>{stripBullet(t(item))}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeInElement>
            ))}
          </div>
        </section>

        {/* Proces — layout editorial, același cu secțiunea „De la problemă la soluție” de pe homepage */}
        <section className="mb-24 rounded-2xl border border-white/10 bg-neutral-900/40 overflow-hidden">
          <div className="px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <FadeInElement delay={0} direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-end">
                <div className="lg:col-span-6">
                  <h2 className="nohemi-heading text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1]">
                    {t(c.process.t1)}
                    <span className="text-[#ffed88]">{t(c.process.h1)}</span>
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="nohemi-medium text-base md:text-lg text-white/70 leading-relaxed">
                    {t(c.process.desc)}
                  </p>
                </div>
              </div>
            </FadeInElement>

            <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
              {c.process.steps.map((step, index) => (
                <FadeInElement
                  key={step.title}
                  delay={120 + index * 120}
                  direction="up"
                  className={
                    [
                      "",
                      "border-t border-white/10 md:border-t-0 md:border-l",
                      "border-t border-white/10 lg:border-t-0 lg:border-l",
                      "border-t border-white/10 md:border-l lg:border-t-0",
                    ][index]
                  }
                >
                  <div
                    className={[
                      "pt-8 pb-10 md:pt-10 md:pb-2",
                      index % 2 === 1 ? "md:pl-8" : "md:pr-8",
                      index > 0 ? "lg:pl-8" : "lg:pl-0",
                      index < 3 ? "lg:pr-8" : "lg:pr-0",
                    ].join(" ")}
                  >
                    <span className="nohemi-heading block text-5xl md:text-6xl text-white/15 leading-none mb-8 md:mb-10 select-none">
                      0{index + 1}
                    </span>
                    <h3 className="nohemi-medium text-xl md:text-2xl text-white mb-3">
                      {t(step.title)}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      {t(step.desc)}
                    </p>
                  </div>
                </FadeInElement>
              ))}
            </div>
          </div>
        </section>

        {/* Rezultate (opțional): cifre mari, editorial, fără cercuri */}
        {c.results ? (
          <section className="mb-24">
            <FadeInElement delay={0} direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-end mb-14 md:mb-20">
                <div className="lg:col-span-6">
                  <h2 className="nohemi-heading text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1]">
                    {t(c.results.t1)}
                    <span className="text-[#ffed88]">{t(c.results.h1)}</span>
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="nohemi-medium text-base md:text-lg text-white/70 leading-relaxed">
                    {t(c.results.desc)}
                  </p>
                </div>
              </div>
            </FadeInElement>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
              {c.results.stats.map((stat, index) => (
                <FadeInElement
                  key={stat.title}
                  delay={120 + index * 120}
                  direction="up"
                  className={
                    index > 0
                      ? "border-t md:border-t-0 md:border-l border-white/10"
                      : ""
                  }
                >
                  <div
                    className={`pt-8 pb-10 md:pt-10 md:pb-4 ${
                      index > 0 ? "md:pl-8 lg:pl-10" : ""
                    } ${index < 2 ? "md:pr-8 lg:pr-10" : ""}`}
                  >
                    <div className="nohemi-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-tight mb-6 tabular-nums">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </div>
                    <h3 className="nohemi-medium text-lg md:text-xl text-white mb-2">
                      {t(stat.title)}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">
                      {t(stat.desc)}
                    </p>
                  </div>
                </FadeInElement>
              ))}
            </div>
          </section>
        ) : null}

        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* Diferențiator */}
        {c.differentiator ? (
          <FadeInElement delay={0}>
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <p className="nohemi-medium text-lg md:text-xl text-white/80 leading-relaxed">
                {c.differentiator.map((s, i) =>
                  s.accent ? (
                    <span key={i} className="text-[#ffed88] font-semibold">
                      {t(s.key)}
                    </span>
                  ) : (
                    <span key={i}>{t(s.key)}</span>
                  )
                )}
              </p>
            </div>
          </FadeInElement>
        ) : null}

        {/* Tehnologii / Canale */}
        <FadeInElement delay={0}>
          <div className="text-center mb-16">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t(c.tech.t1)}
              <span className="text-[#ffed88]">{t(c.tech.h1)}</span>
            </h2>
            <p className="nohemi-medium text-lg text-white/80 max-w-4xl mx-auto">
              {t(c.tech.desc)}
            </p>
          </div>
        </FadeInElement>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-24">
          {c.tech.items.map((tech, index) => (
            <FadeInElement key={tech.name} delay={index * 50} direction="up">
              <div className="bg-gradient-to-br from-black/10 via-neutral-900 to-neutral-800 rounded-xl p-6 border border-gray-300/20 text-center transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">{tech.icon}</div>
                <h3 className="nohemi-medium text-white text-sm">{tech.name}</h3>
              </div>
            </FadeInElement>
          ))}
        </div>

        <div className="w-32 h-px bg-white/30 mx-auto mb-16 shadow-lg shadow-white/20"></div>

        {/* CTA */}
        <FadeInElement delay={0}>
          <div className="text-center mb-24">
            <h2 className="nohemi-heading text-3xl md:text-4xl text-white mb-8">
              {t(c.cta.t1)}
              <span className="text-[#ffed88]">{t(c.cta.h1)}</span>
              {t(c.cta.t2)}
            </h2>
            <p className="nohemi-medium text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t(c.cta.p)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg"
              >
                {t("pillar_cta_contact")}
              </Link>
              <Link
                href="/#portofoliu"
                className="bg-transparent text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20 text-lg"
              >
                {t("pillar_cta_projects")}
              </Link>
            </div>
          </div>
        </FadeInElement>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
