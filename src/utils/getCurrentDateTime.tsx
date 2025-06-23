"use client";

import { useState, useEffect } from "react";
import NepaliDate from "nepali-date-converter";

const engToNepaliDigits = (str: string | number) =>
  String(str).replace(/\d/g, (d) => "०१२३४५६७८९"[+d]);

const formatNepaliDate = (
  bsDayIndex: number,
  bsMonth: number,
  bsDate: number,
  bsYear: number,
  convertDigits = false
) => {
  const bsMonthNames = [
    "बैशाख",
    "जेष्ठ",
    "आषाढ",
    "श्रावण",
    "भदौ",
    "आश्विन",
    "कार्तिक",
    "मंसिर",
    "पुष",
    "माघ",
    "फाल्गुन",
    "चैत्र",
  ];

  const bsDayNames = [
    "आइतबार",
    "सोमबार",
    "मङ्गलबार",
    "बुधबार",
    "बिहीबार",
    "शुक्रबार",
    "शनिबार",
  ];

  const dateStr = convertDigits ? engToNepaliDigits(bsDate) : bsDate;
  const yearStr = convertDigits ? engToNepaliDigits(bsYear) : bsYear;

  return `${bsDayNames[bsDayIndex]}, ${bsMonthNames[bsMonth - 1]} ${dateStr}, ${yearStr}`;
};

const DateTimeToggle = () => {
  const [locale, setLocale] = useState<"en" | "np">("en");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Read locale from cookie or default
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALEMANISH="))
      ?.split("=")[1];

    setLocale(cookieLocale === "np" ? "np" : "en");

    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const date =
    locale === "np"
      ? (() => {
          const nd = new NepaliDate(
            now.getFullYear(),
            now.getMonth() + 1,
            now.getDate()
          );
          return formatNepaliDate(
            nd.getDay(),
            nd.getMonth(),
            nd.getDate(),
            nd.getYear(),
            true
          );
        })()
      : now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

  const time =
    locale === "np"
      ? engToNepaliDigits(now.toLocaleTimeString("en-US", { hour12: true }))
      : now.toLocaleTimeString("en-US", { hour12: true });

  return (
    <div className="flex flex-col text-white font-semibold typography-p-regular pr-6">
      <div>{date}</div>
      <div>{time}</div>
    </div>
  );
};

export default DateTimeToggle;
