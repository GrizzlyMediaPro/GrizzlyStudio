"use client";

import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from "react";
import { translations, LanguageCode } from "./translations";

type LanguageContextValue = {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: (id: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>("ro");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as LanguageCode | null) : null;
    if (saved === "ro" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (next: LanguageCode) => {
    setLangState(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };

  const t = useMemo(() => {
    return (id: string) => {
      const entry = translations[id as keyof typeof translations];
      if (!entry) return id;
      return entry[lang] || entry.ro || id;
    };
  }, [lang]);

  const value: LanguageContextValue = { lang, setLang, t };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


