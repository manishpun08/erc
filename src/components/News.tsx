import NewsCarousel from "@/components/NewsCarousel";
import { useTranslations } from "next-intl";
import React from "react";

const News = () => {
  const t = useTranslations("Header");

  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #003386 0%, #002E78 100%)",
        }}
        className="py-3 px-4 sm:px-6 md:py-4 md:pr-[6.9375rem] md:pl-[5rem] "
      >
        <div className="flex items-center gap-2 md:gap-0 ">
          <div className="flex font-semibold text-white ">
            {t("News")} <span className="px-1">|</span>
          </div>
          <NewsCarousel />
        </div>
      </div>
    </>
  );
};

export default News;
