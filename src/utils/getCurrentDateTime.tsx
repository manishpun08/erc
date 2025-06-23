"use client";

import { useEffect, useState } from "react";
import * as bs from "bikram-sambat";

// Convert English digits to Nepali digits
const engToNepaliDigits = (str: string | number): string =>
  String(str).replace(/\d/g, (d) => "०१२३४५६७८९"[parseInt(d)]);

// BS Month mapping interface
interface BSMonthMap {
  [key: number]: {
    nepali: string;
    english: string;
  };
}

const getNepaliDate = (
  englishDate: Date
): {
  year: number;
  monthNepali: string;
  monthEnglish: string;
  date: number;
} => {
  try {
    const dateString = englishDate.toISOString().split("T")[0]; // e.g., "2025-06-23"
    const bsDateString: string = bs.toBik_euro(dateString); // Returns "2082-03-09"

    const [year, month, date] = bsDateString.split("-").map(Number);

    const monthMap: BSMonthMap = {
      1: { nepali: "बैशाख", english: "Baisakh" },
      2: { nepali: "जेष्ठ", english: "Jestha" },
      3: { nepali: "आषाढ", english: "Aashadha" },
      4: { nepali: "श्रावण", english: "Shrawan" },
      5: { nepali: "भदौ", english: "Bhadra" },
      6: { nepali: "आश्विन", english: "Ashwin" },
      7: { nepali: "कार्तिक", english: "Kartik" },
      8: { nepali: "मंसिर", english: "Mangsir" },
      9: { nepali: "पुष", english: "Poush" },
      10: { nepali: "माघ", english: "Magh" },
      11: { nepali: "फाल्गुन", english: "Falgun" },
      12: { nepali: "चैत्र", english: "Chaitra" },
    };

    return {
      year,
      monthNepali: monthMap[month].nepali,
      monthEnglish: monthMap[month].english,
      date,
    };
  } catch (error) {
    console.error("Nepali date conversion error:", error);
    // Fallback to static values
    return {
      year: 2082,
      monthNepali: "आषाढ",
      monthEnglish: "Aashadha",
      date: 9,
    };
  }
};

// Get Nepali or English weekday
const getNepaliDay = (date: Date, isEnglish: boolean = false): string => {
  const daysNepali = [
    "आइतबार",
    "सोमवार",
    "मङ्गलबार",
    "बुधबार",
    "बिहीबार",
    "शुक्रबार",
    "शनिबार",
  ];

  const daysEnglish = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return isEnglish ? daysEnglish[date.getDay()] : daysNepali[date.getDay()];
};

const DateTimeToggle: React.FC = () => {
  const [locale, setLocale] = useState<"en" | "np">("en");
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    // Read locale from cookie
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALEMANISH="))
      ?.split("=")[1] as "en" | "np" | undefined;

    setLocale(cookieLocale === "np" ? "np" : "en");

    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const nepaliDate = getNepaliDate(now);
  const dayName = getNepaliDay(now, locale === "en");

  const formattedDate =
    locale === "np"
      ? `${engToNepaliDigits(nepaliDate.date)} ${nepaliDate.monthNepali} ${engToNepaliDigits(nepaliDate.year)}, ${dayName}`
      : `${nepaliDate.date} ${nepaliDate.monthEnglish} ${nepaliDate.year}, ${dayName}`;

  const formattedTime =
    locale === "np"
      ? engToNepaliDigits(
          now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })
        )
      : now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });

  return (
    <div>
      <div>{formattedDate}</div>
      <div>{formattedTime}</div>
    </div>
  );
};

export default DateTimeToggle;
