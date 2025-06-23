import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getAboutPageData = async () => {
  const teamData = await safeFetch(endpoints.homeTeam);

  return {
    teamData,
  };
};

export const getAboutIntroductionData = async () => {
  const aboutIntroductionData = await safeFetch(endpoints.about);

  return aboutIntroductionData;
};
