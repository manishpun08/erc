import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import React from "react";
import { IAboutRoot } from "../interface/employee.interface";

const FunctionDuties = () => {
  const { data, error } = useGetDataQuery<{
    data: IAboutRoot;
    error: string;
  }>({
    url: endpoints.about,
  });

  if (error) {
    console.error("Failed to load function and duties data:", error);
    return <ErrorMessage errorMessage="function and duties data" />;
  }

  const aboutDutiesFunction = data?.data?.function_duties_authorities[0];

  return (
    <div className=" bg-background-400 ">
      <p className="typography-h3-bold text-text-500">
        {aboutDutiesFunction?.title}
      </p>

      {/* Function */}
      <div className="mt-5">
        <p
          className=" prose "
          dangerouslySetInnerHTML={{
            __html: aboutDutiesFunction?.description || "",
          }}
        />
      </div>
    </div>
  );
};

export default FunctionDuties;
