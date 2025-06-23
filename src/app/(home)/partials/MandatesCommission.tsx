"use client";
import React, { useRef, useState } from "react";
import { IMissionVisionGoalsObjec } from "../interface/homeMissionVision.interface";
import ObjectiveCard from "@/components/ObjectiveCard";
import { useTranslations } from "next-intl";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

interface Props {
  mandatesData: IMissionVisionGoalsObjec[];
}

const MandatesCommission: React.FC<Props> = ({ mandatesData }) => {
  const t = useTranslations("home");
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // loop mode safe
    }
  };

  return (
    <div className="padding-x mb-[1.5rem] lg:mb-[2.5rem]">
      <h2 className="text-text-500 font-bold typography-h3 leading-[150%] pb-[1.25rem]">
        {t("Mandates")}
      </h2>

      {/* Grid layout for large screens */}
      <div className="hidden sm:grid sm:grid-cols-1 lg:grid-cols-4 gap-10 ">
        {mandatesData?.map((mandate, index) => (
          <ObjectiveCard
            key={index}
            ordering={mandate?.ordering}
            title={mandate?.title}
            description={mandate?.description}
          />
        ))}
      </div>

      {/* Swiper for small screens */}
      <div className="sm:hidden ">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {mandatesData?.map((mandate, index) => (
            <SwiperSlide key={index} className="pb-2  h-full">
              <ObjectiveCard
                ordering={mandate?.ordering}
                title={mandate?.title}
                description={mandate?.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
        <div className="flex justify-center  gap-2">
          {mandatesData?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-blue-500 w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MandatesCommission;
