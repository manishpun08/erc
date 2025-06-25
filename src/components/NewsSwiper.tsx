"use client";

import { INewsRecord } from "@/Interface/news.interface";
import Link from "next/link";

import Marquee from "react-fast-marquee";

interface NewsSwiperProps {
  newsData: INewsRecord[];
}

const NewsSwiper: React.FC<NewsSwiperProps> = ({ newsData }) => {
  // Duplicate newsData

  return (
    <div className="overflow-hidden">
      <Marquee pauseOnHover={true} pauseOnClick={true} speed={80}>
        {newsData.map((item, index) => (
          <div
            key={index}
            className="text-white px-5 cursor-pointer typography-p-regular"
          >
            <Link
              href={`/news/${item?.slug}`}
              className="hover:underline whitespace-nowrap"
            >
              {item?.title}
            </Link>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default NewsSwiper;
