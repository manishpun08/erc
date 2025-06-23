import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { IMissionVisionDaum } from "@/app/(home)/interface/homeMissionVision.interface";
import ErrorMessage from "@/components/ErrorMessage";

const Introduction = () => {
  const { data: IntroductionData, error } = useGetDataQuery({
    url: endpoints.about,
  });

  if (error) {
    console.error("Failed to load introduction data:", error);
    return <ErrorMessage errorMessage="introduction data" />;
  }

  const aboutIntroduction: IMissionVisionDaum = IntroductionData?.data[0];

  return (
    <div>
      <p className="typography-h3-bold">{aboutIntroduction?.title}</p>

      <div className="mt-3">
        <p
          className="typography-p-regular text-text-400"
          dangerouslySetInnerHTML={{
            __html: aboutIntroduction?.description || "",
          }}
        />
      </div>
    </div>
  );
};

export default Introduction;
