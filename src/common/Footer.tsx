import {
  getImportantLinks,
  getOrganizationSettingData,
} from "@/hooks/globalHook";
import { IOrganizationSettingDaum } from "@/Interface/organization.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterBottom from "./FooterBottom";
import FooterFallback from "./FooterFallback";
import { Company, ImportantLinksSection, OfficeHorus } from "./FooterLinks";

const Footer: React.FC = async () => {
  try {
    // global custom hook
    const organizationSettingData = await getOrganizationSettingData();

    const footerData: IOrganizationSettingDaum =
      organizationSettingData?.data;

    const importantLinks = await getImportantLinks();
    const importantLinksData = importantLinks;

    return (
      <footer className="footer-gradient padding-x pt-[2.06rem]">
        {/* logos  */}
        <div>
          <div className="flex gap-3 items-center ">
            <Link
              href="/"
              className="w-[4.5rem] sm:w-[5rem] md:w-[5.47988rem] aspect-[87.68/74] flex-shrink-0 "
            >
              <Image
                src={footerData?.gov_logo}
                alt="Nepal Government Emblem"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="text-white">
              <div className="text-lg  notranslate  font-semibold leading-[150%] tracking-tight">
                {/* {headerData?.organization_name} */}
                विद्युत नियमन आयोग
              </div>
              <div className="text-xs  notranslate  font-semibold leading-[150%] tracking-tight">
                {/* {headerData?.organization_name} */}
                Electricity Regulatory Commission
              </div>
            </div>
            <Link
              href="/"
              className="w-[3.5rem] sm:w-[4.5rem] md:w-[4.875rem] aspect-square flex-shrink-0"
            >
              <Image
                src={footerData?.erc_logo}
                alt="logo"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>

        {/* links  */}
        <div className="pt-[1.5rem] lg:pt-[2.5rem] pb-[1.44rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.88rem]">
          {/* Company Section */}

          <ImportantLinksSection importantLinksData={importantLinksData} />
          <Company footerData={footerData} />

          <OfficeHorus officeData={footerData?.office_hours} />
        </div>

        <FooterBottom footerData={footerData} />
      </footer>
    );
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return <FooterFallback />;
  }
};

export default Footer;
