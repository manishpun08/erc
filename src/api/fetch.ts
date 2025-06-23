/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_API_URL } from "./endpoints";
import { cookies } from "next/headers";

export const getData = async <T = any>(
  url: string,
  params?: Record<string, any>,
  options?: {
    timeout?: number;
  }
): Promise<T> => {
  const controller = new AbortController();
  const timeout = options?.timeout ?? 30000;
  const cookieStore = await cookies();
  const lang = cookieStore.get("MYNEXTAPP_LOCALEMANISH")?.value || "en";
  const langParam = `?lang=${lang}`;

  // Merge params with lang from cookie, allow override
  const queryParams = {
    ...params,
  };

  const queryString = `&${new URLSearchParams(
    Object.entries(queryParams).reduce(
      (acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = String(value);
        }
        return acc;
      },
      {} as Record<string, string>
    )
  ).toString()}`;

  const fetchUrl = `${BASE_API_URL}${url}${langParam}${queryString}`;
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
      },
      signal: controller.signal,
      credentials: "include", // Include cookies if backend expects session
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(
        `Request failed with status ${response.status}: ${response.statusText}`
      );
    }

    const data: T = await response.json();
    return data;
  } catch (error: any) {
    if (error.name === "AbortError") {
      console.error(`Request to ${fetchUrl} timed out after ${timeout}ms`);
    } else {
      console.error(`Request failed to ${fetchUrl}:`, error);
    }
    throw error;
  }
};
