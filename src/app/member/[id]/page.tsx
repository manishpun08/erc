import { endpoints } from "@/api/endpoints";
import { getData } from "@/api/fetch";
import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdMail } from "react-icons/io";

interface MemberDetailsId {
  params: Promise<{ id: string }>;
}

const MemberDetails = async ({ params }: MemberDetailsId) => {
  try {
    const { id } = await params;

    const memberDetail = await getData(endpoints.teamDetail + `${id}/`);
    return (
      <div className="padding-x padding-y">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
          {/* message from ceo  */}
          <p
            className="text-text-400 typography-p1-regular text-justify"
            dangerouslySetInnerHTML={{
              __html: memberDetail?.data?.profile || "",
            }}
          />

          <div>
            {/* Image with hover effect */}
            <div className="w-full lg:w-[16.25rem] lg:aspect-[65/76] ">
              <Image
                src={memberDetail?.data?.image || ""}
                alt="ceo"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text box */}
            <div className=" text-center pt-[1.25rem] flex flex-col justify-center items-center">
              <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem]">
                {memberDetail?.data?.name}
              </h2>
              <Link
                href={`mailto:${memberDetail?.data?.email || ""}`}
                className="flex items-center gap-2"
              >
                <IoMdMail size={20} /> {memberDetail?.data?.email}
              </Link>
              <h3 className="typography-p-regular text-text-500 font-bold ">
                {memberDetail?.data?.designation}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching member data:", error);
    return <ErrorMessage errorMessage="member data not found " />;
  }
};

export default MemberDetails;
