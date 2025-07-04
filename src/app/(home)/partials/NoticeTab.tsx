"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import React, { useState } from "react";
import TabContent from "./TabContent";
import { useTranslations } from "next-intl";

interface Tab {
  name: string;
  id: string;
}

const NoticeTab = () => {
  const [selectedTab, setSelectedTab] = useState("regular");
  const t = useTranslations("home");

  const { data: MainCategory } = useGetDataQuery({
    url: endpoints.navLinks,
  });

  // Fetch all data (used for "regular")
  const { data: AllData } = useGetDataQuery({
    url: endpoints.document,
    params: {
      page_size: 5,
    },
  });

  // Fetch filtered data (used for other tabs)
  const { data: DocumentData } = useGetDataQuery({
    url: endpoints.document,
    params: {
      main_category: selectedTab,
      page_size: 5,
    },
  });

  // Choose which data to display
  const displayData =
    selectedTab === "regular"
      ? AllData?.data?.records
      : DocumentData?.data?.records;

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div className="flex flex-wrap lg:gap-2 bg-blue-400 rounded-t-[0.7rem] lg:pt-[0.31rem] pb-[0.25rem] lg:pl-[0.25rem] lg:pr-[0.25rem]">
        {/* Regular tab */}
        <button
          onClick={() => setSelectedTab("regular")}
          className={`p-[0.75rem] lg:p-4 typography-p-regular font-semibold cursor-pointer text-center text-white border-b-2 ${
            selectedTab === "regular" ? "border-white" : "border-transparent"
          } hover:border-white`}
        >
          {t("Regular")}
        </button>

        {/* Dynamic tabs */}
        {MainCategory?.data?.slice(0, 3)?.map((tab: Tab, index: number) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab?.id)}
            className={`p-[0.75rem] lg:p-4 typography-p-regular cursor-pointer font-semibold text-center text-white border-b-2 ${
              tab.id === selectedTab ? "border-white" : "border-transparent"
            } hover:border-white`}
          >
            {tab?.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {displayData && displayData.length > 0 ? (
          <TabContent documentData={displayData} />
        ) : (
          <div className="text-center py-8 text-gray-500">
            {t("NoDataAvailable")}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeTab;
