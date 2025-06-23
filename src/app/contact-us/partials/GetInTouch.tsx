import { IOrganizationSettingRoot } from "@/Interface/organization.interface";
import React from "react";
import ContactUs from "./ContactUs";
import GetInTouchForm from "./GetInTouchForm";
import { useTranslations } from "next-intl";

interface Props {
  data: IOrganizationSettingRoot;
}

const GetInTouch: React.FC<Props> = ({ data }) => {
  const t = useTranslations("contact");
  return (
    <div>
      <p className="typography-h3-bold text-black">{t("GetInTouch")}</p>
      <p className="mt-3">{t("GetTouchParagraph")}</p>

      {/* Get In Touch Form */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <GetInTouchForm />
        </div>

        <div className="lg:col-span-2">
          <ContactUs data={data} />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
