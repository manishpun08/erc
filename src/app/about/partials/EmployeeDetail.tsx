import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import { IAboutRoot, IEmployeeDetail } from "../interface/employee.interface";
import EmployeeCard from "@/components/card/EmployeeCard";

const EmployeeDetail = () => {
  const { data, error } = useGetDataQuery<{
    data: IAboutRoot;
    error: string;
  }>({
    url: endpoints.about,
  });

  if (error) {
    console.error("Failed to load employee detail data:", error);
    return <ErrorMessage errorMessage="employee data" />;
  }

  const aboutEmployeeDetail: IEmployeeDetail[] = data?.data?.employee_details;

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-0 gap-4 ">
        {aboutEmployeeDetail?.map((team, index) => (
          <EmployeeCard key={index} team={team} />
        ))}
      </div>
    </>
  );
};

export default EmployeeDetail;
