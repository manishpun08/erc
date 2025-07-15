import { getNavNewsData } from "@/hooks/globalHook";
import { INewsRecord } from "@/Interface/news.interface";
import { useTranslations } from "next-intl";
import React from "react";
import NewsSwiper from "./NewsSwiper";

const News = async () => {
  try {
    const t = useTranslations("Header");
    const navNewsData = await getNavNewsData();
    const newsData: INewsRecord[] = navNewsData?.data?.records || [];

    return (
      <>
        {newsData?.length > 0 ? (
          <div
            style={{
              background: "linear-gradient(180deg, #003386 0%, #002E78 100%)",
            }}
            className="py-3 px-4 sm:px-6 md:py-4 md:pr-[6.9375rem] md:pl-[5rem] "
          >
            <div className="flex items-center gap-2 md:gap-0 ">
              <div className="flex font-semibold text-white  border-r-2 pr-2 border-white mr-2">
                {t("News")}
              </div>
              <NewsSwiper newsData={newsData} />
            </div>
          </div>
        ) : null}
      </>
    );
  } catch (error) {
    console.error("Error fetching news data:", error);
    return <></>;
  }
};

export default News;
