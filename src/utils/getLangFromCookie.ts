export const getLangFromCookie = (): string => {
  if (typeof document === "undefined") return "en";

  const lang =
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALEMANISH="))
      ?.split("=")[1] ?? "en";
  return lang;
};
