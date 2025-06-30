import { PATH } from "@/constant/path";
import { IImportantLinks } from "@/Interface/footerLinks.interface";
import {
  IOrganizationSettingDaum,
  IOrganizationSettingOfficeHour,
} from "@/Interface/organization.interface";
import { formatTime } from "@/utils/formatTime";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdCall, MdLocationOn } from "react-icons/md";

interface ICompany {
  footerData: IOrganizationSettingDaum;
}

interface IOfficeData {
  officeData: IOrganizationSettingOfficeHour[];
}
interface IOfficeData {
  officeData: IOrganizationSettingOfficeHour[];
}

interface IImportantLinksData {
  importantLinksData: IImportantLinks;
}

export const Company: React.FC<ICompany> = ({ footerData }) => {
  const t = useTranslations("FooterLinks");

  return (
    <div>
      <h3 className="mb-[1.5rem] text-white typography-p-large font-semibold">
        {t("ContactUs")}
      </h3>

      <ul className="text-white font-medium typography-p-small">
        <div className="space-y-[1.25rem] cursor-pointer">
          {/* Organization Name */}
          {footerData?.org_name_eng && <li>{footerData.org_name_eng}</li>}

          {/* Address */}
          {footerData?.office_address && (
            <li className="flex items-center gap-[0.38rem]">
              <MdLocationOn className="shrink-0" size={20} />
              {footerData.office_address}
            </li>
          )}

          {/* Phone */}
          {footerData?.phone && (
            <li className="flex items-center gap-[0.38rem]">
              <MdCall className="shrink-0" size={20} />
              {footerData.phone}
            </li>
          )}

          {/* Email */}
          {footerData?.email && (
            <li className="flex items-center gap-[0.38rem]">
              <IoMail className="shrink-0" size={20} />
              {footerData.email}
            </li>
          )}

          {/* Social Media Icons */}
          {(footerData?.social_media?.facebook ||
            footerData?.social_media?.twitter) && (
            <li className="flex items-center gap-[0.56rem]">
              {footerData?.social_media?.facebook && (
                <Link
                  href={footerData.social_media.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="shrink-0" size={24} />
                </Link>
              )}
              {footerData?.social_media?.twitter && (
                <Link
                  href={footerData.social_media.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter className="shrink-0" size={24} />
                </Link>
              )}
            </li>
          )}
          <Link href={PATH.public_hearing}>
            <button className="mt-4 text-blue-500 uppercase font-semibold bg-white px-4 py-2 rounded-[0.5rem] text-xs hover:bg-blue-600 hover:text-white cursor-pointer transform transition duration-500 ease-in-out delay-75">
              {t("PublicHearing")}
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export const ImportantLinksSection: React.FC<IImportantLinksData> = ({
  importantLinksData,
}) => {
  const t = useTranslations("FooterLinks");

  return (
    <div>
      <h3 className="mb-[1.5rem] text-white typography-p-large font-semibold">
        {t("ImportantLinks")}
      </h3>
      <ul className="text-white font-medium typography-p-small space-y-[1.25rem]">
        {importantLinksData?.data?.records?.map((link, index) => (
          <div key={index}>
            <Link
              href={link?.url}
              className="border-l rounded-[0.25rem] py-[0.1875rem] px-[0.625rem] cursor-pointer"
            >
              {link?.title}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export const OfficeHorus: React.FC<IOfficeData> = ({ officeData }) => {
  const t = useTranslations("FooterLinks");

  return (
    <div>
      <h3 className="mb-[1.5rem] text-white typography-p-large font-semibold">
        {t("OfficeHours")}
      </h3>
      <ul className=" text-white typography-p-small w-full  ">
        {officeData?.map((item, index) => (
          <div key={index}>
            <div>
              <p className="font-semibold pb-[0.88rem]">
                {item?.season} {item?.start_date} to {item?.end_date}
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium pb-[0.88rem]">{item?.days}</p>
                  <p className="pb-[1.5rem] font-semibold">
                    {formatTime(item?.opening_time)} to{" "}
                    {formatTime(item?.closing_time)}
                  </p>
                </div>
                <div>
                  {" "}
                  <p className="font-medium pb-[0.88rem]">Friday</p>
                  <p className="pb-[1.5rem] font-semibold">
                    10:00 AM to 3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
