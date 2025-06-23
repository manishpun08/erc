"use client";

import { INewsRecord } from "@/Interface/news.interface";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

interface NewsSwiperProps {
  newsData: INewsRecord[];
}

const NewsSwiper: React.FC<NewsSwiperProps> = ({ newsData }) => {
  // Duplicate newsData
  const extendedNewsData =
    newsData?.length < 5
      ? [...newsData, ...newsData, ...newsData, ...newsData]
      : newsData;

  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={20}
      slidesPerView="auto"
      freeMode={{
        enabled: true,
        momentum: false,
      }}
      loop={true}
      speed={8000}
      autoplay={{
        delay: 10,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      allowTouchMove={false}
      className="text-white font-medium cursor-pointer"
      style={{
        userSelect: "none",
        pointerEvents: "auto",
      }}
    >
      {extendedNewsData.map((item, index) => (
        <SwiperSlide
          key={`${item?.id}-${index}`}
          style={{ width: "auto" }}
          className="px-4 py-2"
        >
          <Link
            href={`/news/${item?.slug}`}
            className="hover:underline whitespace-nowrap"
          >
            {item?.title}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSwiper;
