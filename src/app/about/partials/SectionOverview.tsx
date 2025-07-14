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
    data?.data?.electricity_sector_overview;

  return (
    <div className=" bg-background-400 w-full ">
      <p className="typography-h3-bold text-text-500">
        {aboutSectorOverview?.title}
      </p>

      <p
        className=" prose mt-5 min-w-full"
        dangerouslySetInnerHTML={{ __html: aboutSectorOverview?.description }}
      />
    </div>
  );
};

export default SectorOverview;
