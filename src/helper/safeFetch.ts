/* eslint-disable @typescript-eslint/no-explicit-any */
import { getData } from "@/api/fetch";

export const safeFetch = async <T = any>(endpoint: string) => {
  try {
    return await getData<T>(endpoint);
  } catch (error) {
    console.error(`Failed to fetch data from ${endpoint}:`, error);
    return null;
  }
};
