"use client";
import { INavLinksCategory } from "@/Interface/navlinks.interface";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

interface Props {
  dynamicData: INavLinksCategory[];
  staticData: INavLinksCategory[];
}

const MobileNavbar: React.FC<Props> = ({ dynamicData, staticData }) => {
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const renderNavItems = (
    navItems: INavLinksCategory[],
    shouldTranslate: boolean = false
  ) =>
    navItems.map((navItem) => {
      const hasSubcategories = navItem?.subcategories?.length > 0;
      const isActive = activeDropdown === navItem.name;
      const label = shouldTranslate ? t(navItem?.name) : navItem?.name;

      return (
        <div key={navItem?.id} className="flex flex-col">
          {!hasSubcategories ? (
            <Link
              href={navItem?.main_ctg_slug}
              className="flex items-center justify-between text-text-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ) : (
            <button
              onClick={() => toggleDropdown(navItem?.name)}
              className="flex items-center justify-between text-text-500 font-medium"
            >
              {label}
              <ChevronDown
                className={`h-4 w-4 transform transition-transform duration-300 ${
                  isActive ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {isActive && hasSubcategories && (
            <div className="mt-2 ml-4 flex flex-col gap-2">
              {navItem?.subcategories?.map((subItem) => (
                <Link
                  key={subItem?.id}
                  href={subItem?.sub_ctg_slug}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-text-500 hover:text-blue-500"
                >
                  {shouldTranslate && !subItem?.noTranslate
                    ? t(subItem.name)
                    : subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="md:hidden px-6 py-3 bg-blue-50">
      <div className="flex justify-between items-center ">
        {/* Language Switcher */}
        <div className="lg:hidden block">
          <LanguageSwitcher />
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-text-500 ml-auto "
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mt-4 flex flex-col gap-4">
          {renderNavItems(staticData, true)}
          {renderNavItems(dynamicData, false)}

          <button className="mt-4 text-white uppercase font-semibold bg-blue-500 px-4 py-2 rounded-[0.5rem]">
            dms
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
