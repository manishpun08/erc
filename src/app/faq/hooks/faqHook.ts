import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getFaqData = async () => {
  const faqData = await safeFetch(endpoints.faq);

  return {
    faqData,
  };
};
