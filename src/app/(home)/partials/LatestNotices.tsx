import { useTranslations } from "next-intl";
import React from "react";
import { IServiceData } from "../interface/homeImpService.interface";
import NoticeTab from "./NoticeTab";
import ServiceCardHome from "./ServiceCardHome";

interface Props {
  serviceData: IServiceData;
}

const ServiceLatestNotices: React.FC<Props> = ({ serviceData }) => {
  const t = useTranslations("home");
  return (
    <div className="bg-background-400 lg:mb-[2.5rem]">
      <div className="flex flex-col lg:flex-row gap-[2.5rem] padding-x pb-10">
        {/* left  */}
        <div className="w-full">
          <h2 className="text-text-500 typography-h3 font-bold leading-[150%] pb-[1.25rem]">
            {t("Services")}
          </h2>
          {/* service lists  */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[1.5rem]">
            {serviceData?.records?.map((service, index) => (
              <ServiceCardHome
                key={index}
                slug={service?.slug}
                icon={service?.icon}
                name={service?.name}
              />
            ))}
          </div>
        </div>

        {/* right  */}
        <div className="w-full">
          <h2 className="text-text-500 typography-h3 font-bold leading-[150%] pb-[1.25rem]">
            {t("LatestNotices")}
          </h2>
          <NoticeTab />
        </div>
      </div>
    </div>
  );
};

export default ServiceLatestNotices;
