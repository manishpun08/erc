import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import React from "react";

interface ISectorOverview {
  title: string;
  description: string;
}

const SectorOverview = () => {
  const { data, error } = useGetDataQuery({
    url: endpoints.about,
  });

  if (error) {
    console.error("Failed to load Sector review detail data:", error);
    return <ErrorMessage errorMessage="Sector review detail data" />;
  }

  const aboutSectorOverview: ISectorOverview =
    data?.data[0]?.electricity_sector_overview;

  return (
    <div className=" bg-background-400 ">
      <p className="typography-h3-bold text-text-500">
        {aboutSectorOverview?.title}
      </p>

      <div className="mt-5">
        <p className="typography-p-regular-medium text-text-500">
          {aboutSectorOverview?.description}
        </p>
      </div>
    </div>
  );
};

export default SectorOverview;
