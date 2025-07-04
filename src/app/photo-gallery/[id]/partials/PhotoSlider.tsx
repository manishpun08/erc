"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import {
  IPhotoDetail,
  IPhotoDetailImage,
} from "../../interface/photo.interface";
import { formatNepaliDate } from "@/utils/formatDate";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  photoData: IPhotoDetail;
}

const PhotoSlider: React.FC<Props> = ({ photoData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperCore | null>(null);
  const t = useTranslations("home");
  const locale = useLocale();

  // Combine thumbnail and image list
  const allImages: IPhotoDetailImage[] = [
    {
      id: "thumbnail",
      image: photoData.thumbnail,
    },
    ...photoData.images,
  ];

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <>
      <h3 className="typography-h3 text-black font-semibold leading-[150%] pb-1 lg:pb-[0.88rem]">
        {photoData?.title}
      </h3>

      <p className="typography-p1-regular font-medium text-text-300 leading-[120%] pb-5 lg:pb-10">
        {t("PublishedDate")}:{" "}
        {formatNepaliDate(photoData?.images[0]?.created_at || "", locale)}
      </p>

      <div className="relative overflow-hidden">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/3 left-2 z-10 transform -translate-y-1/3">
          <button
            onClick={handlePrev}
            className="bg-blue-50 p-2 rounded-full shadow-md hover:bg-blue-100"
          >
            <FaArrowLeft className="text-blue-500" />
          </button>
        </div>

        <div className="absolute top-1/3 right-2 z-10 transform -translate-y-1/3">
          <button
            onClick={handleNext}
            className="bg-blue-50 p-2 rounded-full shadow-md hover:bg-blue-100"
          >
            <FaArrowRight className="text-blue-500" />
          </button>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-[14rem] lg:h-[28rem] border"
          navigation={false}
        >
          {allImages.map((img: IPhotoDetailImage, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full rounded-[0.25rem]"
            >
              <Image
                src={img.image}
                alt={`Slide ${index + 1}`}
                width={322}
                height={412}
                className="w-full h-full object-contain rounded-[0.25rem]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination with Images */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {allImages.map((photo: IPhotoDetailImage, index: number) => (
            <div
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className="w-[6rem] h-[4rem] lg:w-[8.6875rem] lg:h-[5.4375rem] rounded-[0.25rem]"
            >
              <Image
                src={photo.image}
                alt={`Photo ${index + 1}`}
                width={100}
                height={100}
                className={`w-full h-full object-fill cursor-pointer border rounded-[0.25rem] ${
                  activeIndex === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoSlider;
