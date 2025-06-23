import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getOrganizationSettingData = async () => {
  const organizationSettingData = await safeFetch(
    endpoints.organizationSetting
  );
  return organizationSettingData;
};

export const getDynamicNavLinksData = async () => {
  const navLinks = await safeFetch(endpoints.navLinks);
  return navLinks;
};

export const getNavNewsData = async () => {
  const navNews = await safeFetch(endpoints.navNews);
  return navNews;
};

export const getSOACategory = async () => {
  const navData = await safeFetch(endpoints.applicationStatus);

  return navData;
};

export const getImportantLinks = async () => {
  const importantLinks = await safeFetch(endpoints.footer.importantLinks);

  return importantLinks;
};
