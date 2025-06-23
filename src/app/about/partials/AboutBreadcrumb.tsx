"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { useTranslations } from "next-intl";

const AboutBreadcrumb: React.FC<{ sectionName: string }> = ({
  sectionName,
}) => {
  const t = useTranslations("about");

  const { data, isError } = useGetDataQuery({
    url: endpoints.breadcrumb,
    params: { title: "About" },
  });

  if (isError) return <div>Something went wrong</div>;

  return (
    <div
      style={{
        backgroundImage: `url(${data?.[0]?.image || "/faqImg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[8rem] lg:h-[12rem] w-full relative rounded-[0.25rem] overflow-hidden flex justify-center items-center"
    >
      <div className="bg-[#003386BD] absolute inset-0" />
      <span className="typography-h1-bold text-white absolute">
        {t(sectionName)}
      </span>
    </div>
  );
};

export default AboutBreadcrumb;
