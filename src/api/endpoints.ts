interface Endpoints {
  organizationSetting: string;
  navLinks: string;
  navNews: string;
  popup: string;

  homeHero: string;
  serviceData: string;
  about: string;

  homeTeam: string;
  teamDetail: string;
  chairperson: string;
  subcategory: string;
  document: string;
  actRule: string;
  categoryDetail: string;

  actDetail: string;
  newsDetail: string;

  contact: string;
  photoBanner: string;
  photoGallery: string;
  photoDetail: string;
  videoList: string;

  applicationStatus: string;
  soaDetail: string;
  faq: string;

  eFilingData: string;
  createComplain: string;

  serviceDetail: string;
  publicHearing: string;
  chatbot: {
    register: string;
    chatCategory: string;
    subCategory: string;
    chatAnswer: string;
  };

  seo: string;

  footer: {
    affiliatedOrganization: string;
    importantLinks: string;
  };

  breadcrumb: string;
}

export const endpoints: Endpoints = {
  organizationSetting: "/organization/list/",
  navLinks: "/maincategory/list/",
  navNews: "/news/list/",
  popup: "/popup/list/",

  homeHero: "/homepage/",

  serviceData: "/services/list/",

  about: "/about/",
  serviceDetail: "/services/detail/",
  homeTeam: "/commission/list/",
  teamDetail:"/commission/detail/",
  chairperson: "/commission/list/",
  document: "/document/list/",

  subcategory: "/maincategory/detail/",

  actRule: "/subcategory/documentlist/",

  categoryDetail: "/subcategory/detail",

  actDetail: "/document/detail",
  newsDetail: "/news/detail",

  contact: "/contact/create/",

  photoBanner: "/gallery/banner/list/",
  photoGallery: "/gallery/list/",
  photoDetail: "/gallery/detail",
  videoList: "/video/list/",

  applicationStatus: "/applicationstatus/list/",
  soaDetail: "/applicationstatus/detail",
  faq: "/faq/list/",

  eFilingData: "/efiling/list/",
  createComplain: "/complain/create/",
  publicHearing: "/publichearing/create/",
  // Chatbot
  chatbot: {
    register: "/user/register/?lang=np",
    chatCategory: "/chat/category/list/",
    subCategory: "/chat/subCategory/list/",
    chatAnswer: "chat/answer/suggestion/get/",
  },

  breadcrumb: "/herosection/list/",

  footer: {
    affiliatedOrganization: "/link/affiliated-organizations/",
    importantLinks: "/link/important-links/",
  },

  seo: "/seo/",
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
