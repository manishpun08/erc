"use client";

import { createContext, useContext, useState, useEffect } from "react";

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
});

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALEMANISH="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocaleState(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      const customLocale = browserLocale === "ne" ? "np" : browserLocale;
      setLocaleState(customLocale);
      document.cookie = `MYNEXTAPP_LOCALEMANISH=${customLocale}`;
    }
  }, []);

  const setLocale = (locale: string) => {
    setLocaleState(locale);
    document.cookie = `MYNEXTAPP_LOCALEMANISH=${locale}`;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
