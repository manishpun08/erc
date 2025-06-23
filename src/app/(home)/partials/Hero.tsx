"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { IHomeHeroDaum } from "../interface/homeHero.interface";
import PdfModal from "@/components/modal/PdfModal";
import Link from "next/link";
import { useTranslations } from "next-intl";
import backgroundImage from "@/assets/home/hero.jpg";

interface Props {
  heroData: IHomeHeroDaum;
}

const Hero: React.FC<Props> = ({ heroData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("home");

  useEffect(() => {
    const modalSeen = sessionStorage.getItem("pdfModalShown");
    if (!modalSeen) {
      setIsModalOpen(true);
      sessionStorage.setItem("pdfModalShown", "true");
    }
  }, []);

  return (
    <div className="my-[1.5rem] lg:my-[2.5rem] padding-x">
      {/* Main Container - Added min-h-[500px] for proper sizing */}
      <div className="relative min-h-[500px] z-5 bg-blue-500 text-white py-[7.5rem] px-4 lg:px-0 lg:pl-[3.75rem] rounded-[0.25rem] overflow-hidden">
        {/* Background Image - Fixed positioning and sizing */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={heroData?.image || backgroundImage}
            alt="Hero background"
            fill
            priority
            quality={80}
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 lg:w-[32rem]">
          <h1 className="text-[1.9375rem] lg:text-[2.9375rem] text-white font-bold leading-[130%] pb-[0.62rem]">
            {heroData?.slogan}
          </h1>
          <p className="typography-p-large text-white pb-[1.25rem]">
            {heroData?.title}
          </p>
        </div>

        {/* Buttons */}
        <div className="relative z-10 flex flex-row gap-[1.12rem] pt-4">
          <Link
            href="/about?tab=Introduction"
            className="py-[0.62rem] px-2 lg:px-[1.25rem] text-blue-500 typography-p-large font-semibold bg-white rounded-[0.5rem] shadow-[0px_4px_5.3px_0px rgba(0,0,0,0.25)] cursor-pointer"
          >
            {t("KnowMore")}
          </Link>

          <Link
            href="/submit-a-complain"
            className="py-[0.62rem] px-2 lg:px-[1.25rem] border border-white text-white typography-p-large font-semibold bg-[rgba(255,255,255,0.12)] rounded-[0.5rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-md cursor-pointer"
          >
            {t("SubmitComplaint")}
          </Link>
        </div>
      </div>

      <PdfModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;
