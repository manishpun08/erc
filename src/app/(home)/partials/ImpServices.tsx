"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IServiceData } from "../interface/homeImpService.interface";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";

interface Props {
  impServiceData: IServiceData;
}

const ImpServices: React.FC<Props> = ({ impServiceData }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };
  return (
    <div className="padding-x  mb-[1.5rem] lg:mb-[2.5rem]">
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-[1.25rem] ">
        {impServiceData?.records?.slice(0, 4)?.map((service, index) => (
          <div
            key={index}
            className="bg-background-50 p-[1.2rem] rounded-[0.5rem] cursor-pointer border border-transparent transform transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-[1.02]"
          >
            <Link
              href={`/service/${service?.slug}`}
              className="flex gap-[0.75rem] items-center"
            >
              <div className="bg-blue-400 rounded-[0.5rem] px-[0.88rem] pt-[0.84rem] pb-[0.91rem]">
                <div className="w-[2.10938rem] h-[2.10938rem]">
                  <Image
                    src={service?.icon}
                    alt="Important Services"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="">
                <p className="typography-p-large font-semibold text-text-500 pb-[0.25rem]">
                  {service?.name}
                </p>
                <p
                  className="!text-text-400 typography-p-regular line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: service?.description || "",
                  }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Swiper Slider for Small Screens */}
      <div className="sm:hidden ">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {impServiceData?.records?.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="bg-background-50 p-[1.2rem] rounded-[0.5rem] cursor-pointer border border-transparent transform transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-[1.02]"
              >
                <div className="flex gap-[0.75rem] items-center">
                  <div className="bg-blue-400 rounded-[0.5rem] px-[0.88rem] pt-[0.84rem] pb-[0.91rem]">
                    <div className="w-[2.10938rem] h-[2.10938rem]">
                      <Image
                        src={service?.icon}
                        alt="Important Services"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-[187px]">
                    <p className="typography-p-large font-semibold text-text-500 pb-[0.25rem]">
                      {service?.name}
                    </p>
                    <p
                      className="text-text-400 typography-p-regular"
                      dangerouslySetInnerHTML={{
                        __html: service?.description || "",
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center  gap-2">
          {impServiceData?.records?.map((_, index) => (
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

export default ImpServices;
