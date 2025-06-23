import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import React from "react";

interface IReportOverview {
  title: string;
  description: string;
}

const ReportOverview = () => {
  const { data, error } = useGetDataQuery({
    url: endpoints.about,
  });

  if (error) {
    console.error("Failed to load report review detail data:", error);
    return <ErrorMessage errorMessage="report review detail data" />;
  }

  const aboutReportOverview: IReportOverview =
    data?.data[0]?.electricity_report_overview;

  return (
    <div className=" bg-background-400 ">
      <p className="typography-h3-bold text-text-500">
        {aboutReportOverview?.title}
      </p>

      <div className="mt-5">
        <p className="typography-p-regular-medium text-text-500">
          {aboutReportOverview?.description}
        </p>
      </div>
    </div>
  );
};

export default ReportOverview;
