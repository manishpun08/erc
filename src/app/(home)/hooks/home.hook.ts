import { endpoints } from "@/api/endpoints";
import { getData } from "@/api/fetch";
import { IAboutRoot } from "@/app/about/interface/employee.interface";
import { safeFetch } from "@/helper/safeFetch";
import { ICommissionRoots } from "@/Interface/comission.interface";

export const getHomePageData = async () => {
  const homeData = await getData(endpoints.homeHero);

  const impServiceData = await getData(endpoints.serviceData, {
    is_important: "true",
  });

  const missionVisionData = await safeFetch<IAboutRoot>(endpoints.about);
  const serviceData = await getData(endpoints.serviceData);
  const teamData = await getData(endpoints.homeTeam, {
    is_former_member: "false",
  });
  const chairperson = await getData<ICommissionRoots>(endpoints.homeTeam, {
    is_chairperson: "true",
  });

  return {
    homeData,
    impServiceData,
    missionVisionData,
    serviceData,
    teamData,
    chairperson,
  };
};
