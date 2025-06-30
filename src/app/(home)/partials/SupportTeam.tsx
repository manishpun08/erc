"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { IEmployeeDetail } from "@/app/about/interface/employee.interface";
import ErrorMessage from "@/components/ErrorMessage";
import EmployeeCard from "@/components/card/EmployeeCard";

const EmployeeDetail = () => {
  const { data, error } = useGetDataQuery({
    url: endpoints.about,
  });

  if (error) {
    console.error("Failed to load employee detail data:", error);
    return <ErrorMessage errorMessage="employee data" />;
  }

  const aboutEmployeeDetail: IEmployeeDetail[] =
    data?.data[0]?.employee_details;

  return (
    <section className="padding-x padding-y">
      <h2 className="text-text-500 font-bold typography-h3 leading-[150%] pb-[1.25rem]">
        Support Team
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-0 gap-5 ">
        {aboutEmployeeDetail?.map((team, index) => (
          <EmployeeCard key={index} team={team} />
        ))}
      </div>
    </section>
  );
};

export default EmployeeDetail;
