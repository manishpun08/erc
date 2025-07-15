"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import NewsCarousel from "@/components/NewsCarousel";
import { useTranslations } from "next-intl";
import React, { use } from "react";
import NewsSwiper from "./NewsSwiper";

const News = () => {
  const t = useTranslations("Header");
  const { data } = useGetDataQuery({
    url: endpoints.navNews,
  });

  if (data?.data?.records === 0) return null;

  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #003386 0%, #002E78 100%)",
        }}
        className="py-3 px-4 sm:px-6 md:py-4 md:pr-[6.9375rem] md:pl-[5rem] w-full "
      >
        <div className="flex items-center gap-2 md:gap-0  min-w-max">
          <div className="flex font-semibold text-white  border-r-2 pr-2 border-white mr-2">
            {t("News")}
          </div>
          <NewsSwiper newsData={data?.data?.records} />
        </div>
      </div>
    </>
  );
};

export default News;
