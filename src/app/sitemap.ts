import { endpoints } from "@/api/endpoints";
import { MetadataRoute } from "next";

import { getData } from "@/api/fetch";
import { IServiceApiResponse } from "./service/interface/serviceDetail.interface";

const siteurl = process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: serviceData } = await getData<{ data: IServiceApiResponse }>(
    endpoints.serviceData
  );

  const serviceUrls = serviceData?.data?.records
    ?.map((service) => ({
      url: `${siteurl}service/${service?.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    }))
    .flat() as MetadataRoute.Sitemap;

  return [
    {
      url: `${siteurl}`,
    },
    {
      url: `${siteurl}about`,
    },
    {
      url: `${siteurl}service`,
    },
    {
      url: `${siteurl}contact`,
    },

    {
      url: `${siteurl}faqs`,
    },

    {
      url: `${siteurl}terms`,
    },
    {
      url: `${siteurl}privacy`,
    },

    ...serviceUrls,
  ];
}
