import { endpoints } from "@/api/endpoints";
import { getData } from "@/api/fetch";
import { safeFetch } from "@/helper/safeFetch";

export const getHomePageData = async () => {
  const homeData = await safeFetch(endpoints.homeHero);

  const impServiceData = await getData(endpoints.serviceData, {
    is_important: "true",
  });

  const missionVisionData = await safeFetch(endpoints.about);
  const serviceData = await getData(endpoints.serviceData);
  const teamData = await safeFetch(endpoints.homeTeam);
  const chairperson = await safeFetch(endpoints.chairperson);

  return {
    homeData,
    impServiceData,
    missionVisionData,
    serviceData,
    teamData,
    chairperson,
  };
};
