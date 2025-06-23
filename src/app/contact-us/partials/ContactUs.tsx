import { IOrganizationSettingRoot } from "@/Interface/organization.interface";
import { Printer } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { ReactNode } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io";
import defaultIcon from "./icons/location.svg"; // Example icon

interface Props {
  data: IOrganizationSettingRoot;
}

interface ContactItemProps {
  label: string;
  value: string | undefined;
  icon: ReactNode | undefined;
}

const icons = {
  map: <FaMapMarkerAlt className="text-white size-5" />,
  mail: <IoMdMail className="text-white size-5" />,
  call: <IoIosCall className="text-white size-5" />,
  fax: <Printer className="text-white size-5" />,
};

const ContactItem: React.FC<ContactItemProps> = ({ label, value, icon }) => (
  <div className="p-5 rounded-lg bg-[rgba(255,255,255,0.50)] shadow-xs">
    <div className="flex items-center gap-5 bg-red">
      <div className="w-[2.8125rem] h-[2.8125rem] bg-blue-400 rounded-lg flex justify-center items-center">
        {icon || <Image src={defaultIcon} alt="icon" width={44} height={44} />}
      </div>
      <div>
        <p className="typography-p-regular-medium text-black">{label}</p>
        <p className="typography-p-regular text-text-300">{value || "N/A"}</p>
      </div>
    </div>
  </div>
);

const ContactUs: React.FC<Props> = ({ data }) => {
  const t = useTranslations("OrganizationSetting");

  const info = data?.data[0];

  return (
    <div className="space-y-3">
      <ContactItem
        label={t("HeadOffice")}
        value={info?.office_address}
        icon={icons?.map}
      />
      <ContactItem
        label={t("EmailUs")}
        value={info?.email}
        icon={icons?.mail}
      />
      <ContactItem label={t("CallUs")} value={info?.phone} icon={icons?.call} />
      <ContactItem label={t("FaxNumber")} value={info?.fax} icon={icons?.fax} />
    </div>
  );
};

export default ContactUs;
