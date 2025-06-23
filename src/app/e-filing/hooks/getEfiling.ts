import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getEFilingData = async () => {
  const eFilingData = await safeFetch(endpoints.eFilingData);

  return {
    eFilingData,
  };
};
