import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";
import React from "react";
import { IAboutRoot } from "../interface/employee.interface";

interface IorgazizationData {
  title: string;
  description: string;
  image: string;
}

const OrganizationStructure = () => {
  const { data, error } = useGetDataQuery<{
    data: IAboutRoot;
    error: string;
  }>({
    url: endpoints.about,
  });

  if (error) {
    console.error("Failed to load organization data:", error);
    return <ErrorMessage errorMessage="organization data" />;
  }

  const organizationData: IorgazizationData =
    data?.data?.organizational_structure[0];

  return (
    <div className="w-full aspect-[1353.57/962.00]">
      <Image
        src={organizationData?.image}
        alt={organizationData?.title || "Organization Structure"}
        width={800}
        height={800}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default OrganizationStructure;
