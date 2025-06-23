// utils/date.ts
import { Locale } from "next-intl";

export const formatDate = (dateString: string, locale: Locale): string => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateString));
};

export const formatNepaliDate = (
  dateString: string,
  locale: Locale
): string => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
};
