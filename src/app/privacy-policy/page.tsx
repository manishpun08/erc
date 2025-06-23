import ErrorMessage from "@/components/ErrorMessage";
import { getOrganizationSettingData } from "@/hooks/globalHook";
import { IOrganizationSettingDaum } from "@/Interface/organization.interface";
import React from "react";

const PrivacyPolicy = async () => {
  try {
    const organizationSettingData = await getOrganizationSettingData();

    const privacyData: IOrganizationSettingDaum =
      organizationSettingData?.data[0];

    const data = privacyData?.terms_condition;

    return (
      <div className="padding-x py-10">
        <h1 className="pb-4 typography-h1 font-semibold">{data?.title}</h1>
        <p
          className=""
          dangerouslySetInnerHTML={{
            __html: data?.description || "",
          }}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching Privacy data:", error);
    return <ErrorMessage errorMessage="Privacy and Policy" />;
  }
};

export default PrivacyPolicy;
