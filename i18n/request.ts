// app/[locale]/utils/getRequestConfig.ts
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieLocale =
    (await cookies()).get("MYNEXTAPP_LOCALEMANISH")?.value || "en";

  // Map 'np' to 'ne' internally if needed
  const internalLocale = cookieLocale === "np" ? "ne" : cookieLocale;

  return {
    locale: internalLocale,
    messages: (await import(`../messages/${internalLocale}.json`)).default,
  };
});
