"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import TranslationLoader from "@/common/TranslationLoader";

const LanguageSwitcher = () => {
  const [locale, setLocale] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALEMANISH="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      const customLocale = browserLocale === "ne" ? "np" : browserLocale;
      setLocale(customLocale);
      document.cookie = `MYNEXTAPP_LOCALEMANISH=${customLocale}; path=/`;
      window.location.reload(); // Full reload on first set
    }
  }, []);

  const handleLanguageChange = (lang: "en" | "np") => {
    if (lang === locale) return;

    setLoading(true);
    document.cookie = `MYNEXTAPP_LOCALEMANISH=${lang}; path=/`;
    setTimeout(() => {
      window.location.reload();
    }, 500); // Optional delay for smooth UX
  };

  const baseStyle = "cursor-pointer pb-1 z-20";
  const activeStyle = "border-b-2 border-white";
  const inactiveStyle = "border-b-2 border-transparent";

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-50">
        <TranslationLoader />
      </div>
    );
  }

  return (
    <div>
      {/* Desktop View */}
      <div className="pl-3 typography-p-regular font-semibold text-white hidden md:flex gap-2">
        <span
          onClick={() => handleLanguageChange("np")}
          className={`${baseStyle} ${locale === "np" ? activeStyle : inactiveStyle}`}
        >
          नेपाली
        </span>
        <span>|</span>
        <span
          onClick={() => handleLanguageChange("en")}
          className={`${baseStyle} ${locale === "en" ? activeStyle : inactiveStyle}`}
        >
          English
        </span>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative pl-3 text-black lg:text-white font-semibold ">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1"
        >
          {locale === "np" ? "Nep" : "Eng"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 bg-white text-black rounded shadow-md w-20 z-50">
            <div
              onClick={() => handleLanguageChange("np")}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Nep
            </div>
            <div
              onClick={() => handleLanguageChange("en")}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Eng
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
