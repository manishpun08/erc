import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";
import React from "react";
import { IAboutRoot } from "../interface/employee.interface";
import { ICommissionRoots } from "@/Interface/comission.interface";

interface ICeoMessage {
  name: string;
  designation: string;
  image: string;
  message: string;
}

const CeoMessage = () => {
  const { data, error } = useGetDataQuery<{
    data: ICommissionRoots;
    error: string;
  }>({
    url: endpoints.chairperson,
  });

  if (error) {
    console.error("Failed to load Chairperson message data:", error);
    return <ErrorMessage errorMessage="Chairperson message data" />;
  }

  const ceoMessage = data?.data?.records[0];

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
        {/* message from ceo  */}
        <p
          className="text-text-400 typography-p1-regular text-justify"
          dangerouslySetInnerHTML={{
            __html: ceoMessage?.chairperson_message?.description || "",
          }}
        />

        <div>
          {/* Image with hover effect */}
          <div className="w-full lg:w-[16.25rem] lg:aspect-[65/76] ">
            <Image
              src={ceoMessage?.image || ""}
              alt="ceo"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text box */}
          <div className=" text-center pt-[1.25rem]">
            <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem]">
              {ceoMessage?.name}
            </h2>
            <h3 className="typography-p-regular text-text-500 font-bold ">
              {ceoMessage?.designation}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CeoMessage;
