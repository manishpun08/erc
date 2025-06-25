import { PATH } from "@/constant/path";
import { IOrganizationSettingDaum } from "@/Interface/organization.interface";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  footerData: IOrganizationSettingDaum;
}

const FooterBottom: React.FC<IProps> = ({ footerData }) => {
  const t = useTranslations("FooterLinks");
  return (
    <div>
      <div className="relative">
        {/* Disclaimer  */}
        <div>
          <p className="typography-p-regular font-semibold text-white pt-[1.44rem] pb-[0.87rem]">
            {t("Disclaimer")}
          </p>
          <p
            className="text-white typography-p-small pb-[1.94rem] "
            dangerouslySetInnerHTML={{
              __html: footerData?.disclimer || "",
            }}
          />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/img-header.png"
            alt="Background Image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="border-b-[0.0375rem] border-blue-50 mb-[1.88rem]" />

        <div className="flex justify-between pb-[1.87rem] gap-10">
          <div className="flex gap-[1.25rem] typography-p-small font-semibold text-white">
            <p>{t("Copyright")}</p>
          </div>
          <div className="flex gap-2 lg:gap-[1.25rem] typography-p-small z-10 font-semibold text-white">
            <Link href={PATH.faq}>FAQ</Link>
            <Link href="/terms-condition">{t("Terms")}</Link>
            <Link href="/privacy-policy">{t("Privacy")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
