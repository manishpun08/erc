import LanguageSwitcher from "@/components/LanguageSwitcher";
import NewsCarousel from "@/components/NewsCarousel";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const HeaderFallback = () => {
  return (
    <header className="relative w-full">
      {/* Linear Gradient */}
      <div
        className="relative z-10 text-white py-6 padding-x"
        style={{
          backgroundImage: "linear-gradient(180deg, #3360A9 0%, #003386 100%)",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/img-header.png"
            alt="Background Image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Logos */}
        <div className="flex flex-row justify-between gap-4 md:gap-0">
          {/* Left Logo */}
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
            <div className="text-white">
              <h1 className="text-lg sm:text-xl md:text-[1.85125rem] font-semibold leading-[150%] tracking-tight">
                विद्युत नियामक आयोग
              </h1>
              <p className="text-sm sm:text-base md:text-[0.92563rem] font-medium leading-[120%]">
                Electricity Regulatory Commission
              </p>
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex flex-row gap-2 sm:gap-4 items-center ">
            <div className="w-[3.5rem] sm:w-[4.5rem] md:w-[4.875rem] aspect-square flex-shrink-0">
              <Image
                src="/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden lg:block w-[2.5rem] sm:w-[2.75rem] md:w-[3rem] aspect-[24/31] flex-shrink-0 ml-6 sm:ml-0">
              <Image
                src="/flag.gif"
                alt="flag"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* News Section */}
      <div
        style={{
          background: "linear-gradient(180deg, #003386 0%, #002E78 100%)",
        }}
        className="py-3 px-4 sm:px-6 md:py-4 md:pr-[6.9375rem] md:pl-[5rem] "
      >
        <div className="flex items-center justify-between gap-2 md:gap-0 ">
          <div className="flex font-semibold text-white">
            News <span className="px-1">|</span>
          </div>
          <NewsCarousel />
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default HeaderFallback;
