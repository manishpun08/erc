import ErrorMessage from "@/components/ErrorMessage";
import React from "react";
import { getEFilingData } from "./hooks/getEfiling";
import { IEfilingData } from "./inteface/e-filing";

const EFiling = async () => {
  try {
    const { eFilingData } = await getEFilingData();

    const dataEFiling: IEfilingData = eFilingData?.data[0];

    return (
      <>
        <div className="padding-x py-[2.5rem]">
          <h3 className="typography-h3 font-semibold text-text-500 leading-[150%] ">
            {dataEFiling?.title}
          </h3>

          <p
            className="text-text-400 typography-p-regular"
            dangerouslySetInnerHTML={{
              __html: dataEFiling?.description || "",
            }}
          />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching e-filing data:", error);
    return <ErrorMessage errorMessage="e-filing data" />;
  }
};

export default EFiling;
