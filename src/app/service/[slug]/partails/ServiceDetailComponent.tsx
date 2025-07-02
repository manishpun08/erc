"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IServiceRecord } from "../../interface/serviceDetail.interface";
import { formatNepaliDate } from "@/utils/formatDate";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  serviceDetail: IServiceRecord;
}

const ServiceDetailComponent: React.FC<Props> = ({ serviceDetail }) => {
  const t = useTranslations("home");
  const locale = useLocale();

  const files = serviceDetail?.files || [];

  return (
    <div className="max-w-4xl mx-5 lg:mx-auto my-10">
      {files?.map((file, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center 
              py-[1rem] px-[1.25rem] rounded-[0.5rem] border-l-2 border-blue-300 
              bg-white shadow-[0px_2px_18px_4px_rgba(51,96,169,0.06)] 
              group cursor-pointer mb-4"
          >
            <div>
              <Link
                href={file?.file || ""}
                title="View PDF"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="typography-p-large text-text-500 font-medium group-hover:text-blue-500 transition-colors duration-300"
              >
                {file?.title}
              </Link>
              <p className="typography-p-small text-text-300 font-medium pt-[0.62rem]">
                {t("PublishedDate")}:{" "}
                {/* {formatNepaliDate(file?.created_at || "", locale)} */}
              </p>
            </div>
            <div className="flex items-center gap-[0.75rem]">
              <Link
                href={file?.file || ""}
                className="flex items-center justify-center w-[1.25rem] h-[1.25rem] lg:w-[2.125rem] lg:h-[2.125rem]"
                title="Download PDF"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/pdf2.svg"
                  alt="pdf"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </Link>
              <Link
                href={file?.file || ""}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                title="View Document"
              >
                <IoEyeSharp className="text-blue-400 lg:w-[2.125rem] lg:h-[2.125rem]" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceDetailComponent;
