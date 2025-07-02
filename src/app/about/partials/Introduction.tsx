import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import { IAboutRoot } from "../interface/employee.interface";

const Introduction = () => {
  const { data: IntroductionData, error } = useGetDataQuery<{
    data: IAboutRoot;
    error: string;
  }>({
    url: endpoints.about,
  });

  if (error) {
    console.error("Failed to load introduction data:", error);
    return <ErrorMessage errorMessage="introduction data" />;
  }

  return (
    <div>
      <p className="typography-h3-bold">{IntroductionData?.data?.title}</p>

      <div className="mt-3">
        <p
          className="typography-p-regular text-text-400"
          dangerouslySetInnerHTML={{
            __html: IntroductionData?.data?.description || "",
          }}
        />
      </div>
    </div>
  );
};

export default Introduction;
