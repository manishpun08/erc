"use client";

import { INavLinksCategory } from "@/Interface/navlinks.interface";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

interface Props {
  sortedLinks: INavLinksCategory[];
}

const DesktopNavbar: React.FC<Props> = ({ sortedLinks }) => {
  const t = useTranslations("nav");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  console.log(sortedLinks, "navlink");
  const renderNavItems = (
    navItems: INavLinksCategory[],
    shouldTranslate: boolean = false
  ) =>
    navItems?.map((navItem) => {
      const isActive = activeDropdown === navItem.id;
      const hasSubcategories = navItem?.subcategories?.length > 0;

      const label = t(navItem?.name);
      return (
        <div
          key={navItem?.id}
          className="relative group "
          onMouseEnter={() => setActiveDropdown(navItem?.id)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {/* main category  */}
          {!hasSubcategories ? (
            <Link
              href={navItem?.main_ctg_slug}
              className="group relative cursor-pointer typography-p-regular font-medium text-text-500 hover:text-blue-500 transition-colors duration-300 flex items-center gap-1 "
            >
              {label}
            </Link>
          ) : (
            <button
              onClick={() => setActiveDropdown(navItem?.id)}
              className="group relative cursor-pointer typography-p-regular font-medium text-text-500 hover:text-blue-500 transition-colors duration-300 flex items-center gap-1"
            >
              {label}
              <ChevronDown
                className={`h-4 w-4 transform transition-transform duration-300 ${
                  isActive ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          )}
          <div
            className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
              isActive ? "w-full" : ""
            }`}
          ></div>

          {/* subcategory */}
          {hasSubcategories && (
            <div
              className={`absolute left-0 top-full mt-3.5 w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${
                isActive ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {navItem?.subcategories?.map((subItem) => (
                <Link
                  key={subItem?.id}
                  href={subItem?.sub_ctg_slug}
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-[0.62rem] text-sm text-text-500 hover:bg-blue-400 hover:text-white"
                >
                  {shouldTranslate && !subItem?.noTranslate
                    ? t(subItem.name)
                    : subItem.name}

                  {subItem?.noTranslate ? subItem.name : t(subItem.name)}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="hidden md:flex items-center py-3 padding-x">
      <div className="flex flex-wrap gap-[1.5rem] items-center ">
        {renderNavItems(sortedLinks, true)}
        {/* {renderNavItems(dynamicData, false)} */}

        <Link
          href={"http://dms.erc.gov.np/a_Login.aspx?ReturnUrl=%2f"}
          className="text-white uppercase font-semibold typography-p-regular bg-blue-500 px-4 py-2 rounded-[0.5rem] cursor-pointer"
        >
          dms
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavbar;
