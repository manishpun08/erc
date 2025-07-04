import ErrorMessage from "@/components/ErrorMessage";
import { getOrganizationSettingData } from "@/hooks/globalHook";
import { IOrganizationSettingDaum } from "@/Interface/organization.interface";
import React from "react";

const TermsCondition = async () => {
  try {
    const organizationSettingData = await getOrganizationSettingData();

    const termsConditionData: IOrganizationSettingDaum =
      organizationSettingData?.data;

    const data = termsConditionData?.terms_condition;

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
    console.error("Error fetching Term and condition data:", error);
    return <ErrorMessage errorMessage="Term and condition" />;
  }
};

export default TermsCondition;
