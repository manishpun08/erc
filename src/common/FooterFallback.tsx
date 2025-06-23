import {
  AffiliatedOrganizations,
  company,
  ImportantLinks,
  OfficeHours,
} from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdCall, MdLocationOn } from "react-icons/md";

const FooterFallback = () => {
  return (
    <footer className="footer-gradient padding-x pt-[2.06rem]">
      {/* logos  */}
      <div>
        <div className="flex gap-3 items-center">
          <div className="w-[4.5rem] sm:w-[5rem] md:w-[5.47988rem] aspect-[87.68/74] flex-shrink-0">
            <Image
              src="/nepal.png"
              alt="Nepal Government Emblem"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white w-[9.5rem] sm:w-fit">
            <div className="text-lg sm:text-xl md:text-[1.85125rem] font-semibold leading-[150%] tracking-tight">
              विद्युत नियामक आयोग
            </div>
            <p className="text-sm sm:text-base md:text-[0.92563rem] font-medium leading-[120%]">
              Electricity Regulatory Commission
            </p>
          </div>
          <div className="w-[3.5rem] sm:w-[4.5rem] md:w-[4.875rem] aspect-square flex-shrink-0">
            <Image
              src="/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* links  */}
      <div className="pt-[1.5rem] lg:pt-[2.5rem] pb-[1.44rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.88rem]">
        {/* Company Section */}
        <div>
          <h4 className="mb-[1.5rem] text-white typography-p-large font-semibold">
            Company
          </h4>
          <ul className=" text-white font-medium typography-p-regular ">
            {company?.map((item, index) => (
              <div key={index} className="space-y-[1.25rem] cursor-pointer">
                <li>{item?.title}</li>
                <li className="flex items-center gap-[0.38rem]">
                  <MdLocationOn size={18} />
                  {item?.location}
                </li>
                <li className="flex items-center gap-[0.38rem]">
                  <MdCall size={18} />
                  {item?.phone}
                </li>
                <li className="flex items-center gap-[0.38rem]">
                  <IoMail size={18} />
                  {item?.email}
                </li>
                <li className="flex items-center gap-[0.56rem]">
                  <FaFacebook size={24} />
                  <FaSquareXTwitter size={24} />
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* ImportantLinks */}
        <div>
          <h4 className="mb-[1.5rem] text-white typography-p-large font-semibold">
            Important Links
          </h4>
          <ul className=" text-white font-medium typography-p-regular space-y-[1.25rem]">
            {ImportantLinks?.map((link, index) => (
              <div key={index}>
                <Link
                  href={link?.url}
                  className="border-l rounded-[0.25rem] py-[0.1875rem] px-[0.625rem] cursor-pointer"
                >
                  {link?.label}
                </Link>
              </div>
            ))}
          </ul>
        </div>

        {/* AffiliatedOrganizations */}
        <div>
          <h4 className="mb-[1.5rem] text-white typography-p-large font-semibold">
            Affiliated Organizations
          </h4>
          <ul className=" text-white font-medium typography-p-regular space-y-[1.25rem]">
            {AffiliatedOrganizations.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.url}
                  className="border-l rounded-[0.25rem] py-[0.1875rem] px-[0.625rem] cursor-pointer"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </ul>
        </div>

        {/* Office Hours */}
        <div>
          <h4 className="mb-[1.5rem] text-white typography-p-large font-semibold">
            Office Hours
          </h4>
          <ul className=" text-white typography-p-regular ">
            {OfficeHours.map((item, index) => (
              <div key={index}>
                <p className="font-semibold pb-[0.88rem]">{item.month}</p>
                <p className="font-medium pb-[0.88rem]">{item.week}</p>
                <p className="pb-[1.5rem] font-semibold ">{item.time}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {/* Disclaimer  */}
      <div>
        <p className="typography-p-regular font-semibold text-white pt-[1.44rem] pb-[0.87rem]">
          Disclaimer
        </p>
        <p className="text-white typography-p-small pb-[1.94rem]">
          While every care has been taken to ensure the accuracy of information
          furnished in this website, ERC does not accept any responsibility or
          liability for any damage or loss to any person for the result of any
          action taken on the basis of this information. However, ERC shall be
          obliged if errors/omissions are brought to its notice for carrying out
          corrections in the next update.
        </p>
      </div>

      <div className="border-b-[0.0375rem] border-blue-50 mb-[1.88rem]" />

      <div className="flex justify-between pb-[1.87rem] gap-10">
        <div className="flex gap-[1.25rem] typography-p-regular font-semibold text-white">
          <p>Electricity Regulatory Commission © All Rights Reserved</p>
        </div>
        <div className="flex gap-2 lg:gap-[1.25rem] typography-p-regular font-semibold text-white">
          <Link href={""} className="cursor-pointer">
            Terms & Condition
          </Link>
          <Link href={""} className="cursor-pointer">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterFallback;
