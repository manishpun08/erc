"use client";
import { useState } from "react";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import TableData from "./Table";
import SoaBreadcrumb from "./SoaBreadcrumb";
import { useTranslations } from "next-intl";

interface TableSOAProps {
  slug: string;
}

const TableSOA = ({ slug }: TableSOAProps) => {
  const t = useTranslations("ComplaintStatus");

  const [selectedTab, setSelectedTab] = useState("");

  const { data } = useGetDataQuery({
    url: endpoints.soaDetail + `/${slug}/`,
    params: {
      status: selectedTab,
    },
  });

  const tabList = [
    { label: t("All"), id: "" },
    { label: t("UnderPreliminaryReview"), id: "Under Preliminary Review" },
    { label: t("ReviewedAndCommentSaid"), id: "Reviewed and Comment Said" },
    { label: t("Approved"), id: "Approved" },
  ];

  return (
    <div>
      <div className="padding-x">
        <SoaBreadcrumb title={data?.data?.records[0]?.title} />
      </div>

      {/* Tabs Header */}
      <div className="padding-x flex justify-between items-center flex-wrap gap-2 mt-[2.88rem] mb-[1.25rem]">
        <div className="flex flex-wrap lg:overflow-x-auto lg:space-x-2 p-[0.38rem] bg-white rounded-[0.5rem] shadow-sm">
          {tabList?.map((tab, index) => (
            <div
              key={index}
              onClick={() => setSelectedTab(tab?.id)}
              className={`py-[0.62rem] px-[1.5rem] cursor-pointer transition-all duration-300 rounded-[0.5rem] typography-p1-regular font-medium  ${
                tab?.id === selectedTab
                  ? "bg-blue-50 text-blue-500"
                  : "text-text-500"
              }`}
            >
              {tab?.label}
            </div>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="padding-x">
        <TableData soaTableData={data} />
      </div>
    </div>
  );
};

export default TableSOA;
